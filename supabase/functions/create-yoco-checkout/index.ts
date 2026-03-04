import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const YOCO_SECRET_KEY = Deno.env.get('YOCO_SECRET_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { court, time, date, sport, userId, userEmail, amount } = await req.json()

    // Default amount to 15000 (R150) if not provided, for backward compatibility
    const paymentAmount = amount || 15000;

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    // 1. Create a pending booking in Supabase
    const { data: booking, error: dbError } = await supabase
      .from('bookings')
      .insert([
        {
          court_id: court.id,
          court_name: court.name,
          booking_time: time,
          booking_date: date,
          sport: sport,
          user_id: userId,
          user_email: userEmail,
          payment_status: 'pending',
          amount: paymentAmount,
          currency: 'ZAR'
        }
      ])
      .select()
      .single()

    if (dbError) throw dbError

    // 2. Create Yoco Checkout Session
    const response = await fetch('https://online.yoco.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${YOCO_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: paymentAmount,
        currency: 'ZAR',
        externalId: booking.id.toString(),
        successUrl: `https://${req.headers.get('host')}/queenswood-tennis?status=success&bookingId=${booking.id}`,
        cancelUrl: `https://${req.headers.get('host')}/queenswood-tennis?status=cancel`,
        failureUrl: `https://${req.headers.get('host')}/queenswood-tennis?status=failure`,
        metadata: {
          bookingId: booking.id,
          court: court.name,
          time: time,
          date: date
        }
      }),
    })

    const yocoData = await response.json()

    if (!response.ok) {
      throw new Error(yocoData.message || 'Failed to create Yoco checkout')
    }

    // 3. Update booking with payment_id
    await supabase
      .from('bookings')
      .update({ payment_id: yocoData.id })
      .eq('id', booking.id)

    return new Response(
      JSON.stringify({ redirectUrl: yocoData.redirectUrl }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
