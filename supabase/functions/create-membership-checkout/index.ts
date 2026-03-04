import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const YOCO_SECRET_KEY = Deno.env.get('YOCO_SECRET_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Membership pricing table — amounts in ZAR cents
// Each plan carries a first-month charge that includes the R90 joining fee
const PLAN_PRICES: Record<string, Record<string, number>> = {
    'adult-monthly': { monthly: 15000, description: 'Adult Pro - Monthly (R150/mo)' },
    'adult-annual': { monthly: 12000, description: 'Adult Pro - Annual (R120/mo billed annually)' },
    'masters-monthly': { monthly: 12000, description: 'Masters - Monthly (R120/mo)' },
    'masters-annual': { monthly: 9500, description: 'Masters - Annual (R95/mo billed annually)' },
    'junior-monthly': { monthly: 7500, description: 'Junior - Monthly (R75/mo)' },
    'junior-annual': { monthly: 6000, description: 'Junior - Annual (R60/mo billed annually)' },
    'league': { monthly: 0, description: 'Queenswood League Registration (Free / First Match Fee)' },
}

const JOINING_FEE = 9000 // R90.00 in cents — added to first payment

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { plan, billingCycle, fullName, email, whatsapp, utrDupr } = await req.json()

        // ── 1. Resolve the correct plan key and amount ──────────────────────────
        const planKey = plan === 'league' ? 'league' : `${plan}-${billingCycle || 'monthly'}`
        const planData = PLAN_PRICES[planKey]

        if (!planData) {
            throw new Error(`Unknown plan: ${planKey}`)
        }

        // First payment = monthly fee + joining fee (except for league which may be free)
        const firstPaymentAmount = plan === 'league' ? 0 : planData.monthly + JOINING_FEE

        // ── 2. Record registration in Supabase ───────────────────────────────────
        const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!)

        const { data: registration, error: dbError } = await supabase
            .from('membership_registrations')
            .insert([{
                full_name: fullName,
                email: email,
                whatsapp: whatsapp,
                plan: planKey,
                description: planData.description,
                monthly_rate: planData.monthly,
                first_payment: firstPaymentAmount,
                utr_dupr: utrDupr || null,
                payment_status: 'pending',
                currency: 'ZAR',
            }])
            .select()
            .single()

        if (dbError) throw dbError

        // ── 3. If free (e.g. league preview) skip Yoco ───────────────────────────
        if (firstPaymentAmount === 0) {
            await supabase
                .from('membership_registrations')
                .update({ payment_status: 'confirmed' })
                .eq('id', registration.id)

            return new Response(
                JSON.stringify({ success: true, message: 'League registration confirmed!' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // ── 4. Create Yoco Checkout Session ──────────────────────────────────────
        const host = req.headers.get('host')
        const yocoResponse = await fetch('https://online.yoco.com/v1/checkouts', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${YOCO_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: firstPaymentAmount,
                currency: 'ZAR',
                externalId: registration.id.toString(),
                successUrl: `https://${host}/queenswood-tennis?status=reg_success&regId=${registration.id}`,
                cancelUrl: `https://${host}/queenswood-tennis?status=reg_cancel`,
                failureUrl: `https://${host}/queenswood-tennis?status=reg_failure`,
                metadata: {
                    registrationId: registration.id,
                    plan: planKey,
                    name: fullName,
                    email: email,
                    // Breakdown sent to Yoco for transparency
                    planFee: planData.monthly,
                    joiningFee: JOINING_FEE,
                },
            }),
        })

        const yocoData = await yocoResponse.json()

        if (!yocoResponse.ok) {
            throw new Error(yocoData.message || 'Failed to create Yoco checkout session')
        }

        // ── 5. Store Yoco payment ID on the registration record ──────────────────
        await supabase
            .from('membership_registrations')
            .update({ yoco_payment_id: yocoData.id })
            .eq('id', registration.id)

        return new Response(
            JSON.stringify({ redirectUrl: yocoData.redirectUrl }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Unknown error'
        return new Response(
            JSON.stringify({ error: message }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
    }
})
