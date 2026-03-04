-- 1. Create bookings table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT now(),
    court_id INT NOT NULL,
    court_name TEXT NOT NULL,
    booking_time TEXT NOT NULL,
    sport TEXT NOT NULL,
    user_id UUID,
    user_email TEXT,
    payment_status TEXT CHECK (payment_status IN ('pending', 'paid', 'failed')) DEFAULT 'pending',
    payment_id TEXT, -- Yoco checkout session ID
    yoco_payment_id TEXT, -- Yoco actual payment reference
    amount INT NOT NULL, -- in cents
    currency TEXT DEFAULT 'ZAR',
    confirmed_at TIMESTAMPTZ
);

-- 2. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_bookings_payment_id ON public.bookings(payment_id);
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON public.bookings(user_id);

-- 3. RLS Policies (Example: Allow anyone to create a booking for now)
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public booking creation" 
ON public.bookings FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Users can view their own bookings" 
ON public.bookings FOR SELECT 
USING (auth.uid() = user_id OR user_id IS NULL);
