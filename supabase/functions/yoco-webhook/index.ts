import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

serve(async (req) => {
    try {
        const body = await req.json()
        console.log('Received Yoco Webhook:', body)

        // Yoco sends payment.succeeded event
        if (body.type === 'payment.succeeded') {
            const paymentData = body.payload
            const bookingId = paymentData.externalId

            const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

            // Update the booking status
            const { error } = await supabase
                .from('bookings')
                .update({
                    payment_status: 'paid',
                    yoco_payment_id: paymentData.id,
                    confirmed_at: new Date().toISOString()
                })
                .eq('id', bookingId)

            if (error) throw error

            console.log(`Booking ${bookingId} confirmed successfully via webhook.`)
        }

        return new Response(JSON.stringify({ received: true }), {
            headers: { 'Content-Type': 'application/json' },
        })

    } catch (error) {
        console.error('Webhook processing error:', error)
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        })
    }
})
