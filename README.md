# Queenswood Tennis & Pickleball - Elite 2026 Platform 🎾⚡

Welcome to the future of racket sports. Queenswood is a state-of-the-art digital facility designed for the "Elite 2026" season, featuring immersive motion, advanced analytics, and integrated secure payments.

## ✨ Features

- **"Ace Serve" Hero**: A high-impact, custom-animated hero section with "Toss & Smash" typography.
- **Q-Pro Experience**: Interactive 3D tilt cards for pro players with live stat tracking.
- **Bento Grid Navigation**: Modern, highly-organized layout for club features and events.
- **Mobile Optimized**: Fully responsive design that ensures the "Elite" aesthetic translates perfectly to any screen size.
- **Parallax Engine**: Dynamic scrolling depth with custom scroll-reveal animations.
- **Secure Yoco Integration**: Real-time court booking with secure payment processing via Yoco and Supabase Edge Functions.

## 🛠️ Technical Stack

- **Frontend**: Vanilla HTML/JS, Tailwind CSS, React (via Babel), Lucide Icons, Framer Motion-style custom logic.
- **Backend / Payments**: Supabase Edge Functions (Deno/TypeScript), Yoco SDK.
- **Database**: Supabase PostgreSQL.
- **Hosting**: GitHub Pages.

## 🚀 Getting Started

### 1. Database Setup
Run the `supabase_setup.sql` script in your Supabase SQL Editor to initialize the `bookings` table and RLS policies.

### 2. Edge Functions Deployment
The `/supabase` folder contains the Edge Functions:
- `create-yoco-checkout`: Handles session generation.
- `yoco-webhook`: Processes payment confirmation.

Deploy these using the Supabase CLI:
```bash
supabase functions deploy create-yoco-checkout
supabase functions deploy yoco-webhook
```

### 3. Environment Variables
Ensure the following variables are set in your Supabase project:
- `YOCO_SECRET_KEY`: Your live/test secret key from the Yoco Dashboard.
- `SUPABASE_URL`: Your project URL.
- `SUPABASE_SERVICE_ROLE_KEY`: For secure database updates in the webhook.

### 4. Configuration
In `index.html`, replace the placeholder `SJR_SUPABASE_ID` (Line 830) with your actual Supabase Project ID.

## 📍 Location
**Queenswood Tennis Club**  
Cnr Soutpansberg Rd & Engel St, Pretoria, South Africa  
*Since the 1950s - Pretoria's Premier Racket Destination.*

---
*Created with Elite 2026 Aesthetics. 🎾🔥*
