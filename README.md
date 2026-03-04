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

// things to confirm with Bash

*# Queenswood Sports Club - Content Management Guide

This document serves as a central reference for all **editable text content** on the Queenswood Sports Club website. Below is a visual map of the content groups, followed by a detailed table to find, review, and update the copy for any section of the site.

---

## 🗺️ Site Content Structure

The following diagram groups the website's content into logical areas for easier management.

```mermaid
graph TD
    %% Define Styles
    classDef topbar fill：#e1f5fe,stroke：#01579b,color：#000000
    classDef hero fill：#fff3e0,stroke：#e65100,color：#000000
    classDef pro fill：#f3e5f5,stroke：#4a148c,color：#000000
    classDef community fill：#e8f5e9,stroke：#1b5e20,color：#000000
    classDef legacy fill：#fff8e1,stroke：#ff6f00,color：#000000
    classDef coaches fill：#ffebee,stroke：#b71c1c,color：#000000
    classDef membership fill：#e0f2f1,stroke：#006064,color：#000000
    classDef booking fill：#fce4ec,stroke：#880e4f,color：#000000

    %% Root Node
    Homepage["Queenswood Sports Club Website"]；

    %% Top Level Groups
    TopBar["Top Bar (User Profile)"]
    Hero["Hero Section"]
    ProServices["Pro Services & Live Action"]
    Community["Community & Leagues"]
    Legacy["Club Legacy & History"]
    Coaches["Coaching Staff"]
    Membership["Membership Plans"]
    Booking["Booking Section"]
    Footer["Footer"]

    %% Connect Root to Groups
    Homepage --> TopBar
    Homepage --> Hero
    Homepage --> ProServices
    Homepage --> Community
    Homepage --> Legacy
    Homepage --> Coaches
    Homepage --> Membership
    Homepage --> Booking
    Homepage --> Footer

    %% Sub-components for key groups
    ProServices --> ProProfile["Pro Athlete Profile (Xander Vance)"]
    ProServices --> ActiveSession["Active Session Banner"]

    Community --> QLeagues["Q-Leagues Description"]
    Community --> Leaderboard["Leaderboard (Top 10)"]
    Community --> SocialInfo["Social Events & Club Status"]

    Legacy --> HistoryBlurb["History Text & Stats"]
    Legacy --> TechSpecs["Technical Specifications"]
    Legacy --> Quote["Featured Quote"]

    Coaches --> Coach1["Coach 1 Profile (Carla Smith)"]
    Coaches --> Coach2["Coach 2 Profile (Joe Ladder)"]

    Membership --> Plan1["Plan： Adult Pro"]
    Membership --> Plan2["Plan： Masters"]
    Membership --> Plan3["Plan： Junior"]

    Booking --> Step1["Step 1： Select Date"]
    Booking --> Step2["Step 2： Pick Time"]

    %% Apply Styles to Groups
    class TopBar topbar；
    class Hero hero；
    class ProServices,ProProfile,ActiveSession pro；
    class Community,QLeagues,Leaderboard,SocialInfo community；
    class Legacy,HistoryBlurb,TechSpecs,Quote legacy；
    class Coaches,Coach1,Coach2 coaches；
    class Membership,Plan1,Plan2,Plan3 membership；
    class Booking,Step1,Step2 booking；
```

---

## 📝 Editable Content Inventory

| Page Section | Content Block / Module | Editable Field | Current Content / Example |
| :--- | :--- | :--- | :--- |
| **Top Bar** | User Profile | Member Name | Danielle S. |
| | | Member Title | Queenswood Elite Member |
| | Player Stats | UTR Rating | 6.42 |
| | | DUPR Rating | 4.15 |
| **Hero Area** | Main Call-to-Action | Headline (H1) | READY TO SERVE? |
| | | Sub-headline | Experience the next generation of racket sports at Queenswood. Pro-grade surfaces, immersive motion, and an elite community. |
| **Pro Services (Xander Vance)** | Pro Athlete Profile | Player Name | Xander Vance |
| | | Title / Tag | Queenswood Pro Elite |
| | | Stat 1: Q-Ranking | #04 |
| | | Stat 2: Win Rate | 89% |
| | | Stat 3: Serve Speed | 194km/h |
| | | Stat 4: Accuracy | 92% |
| | Active Session Banner | Session Title | Morning Power-Drill |
| | | Session Details | Court 05 • Advanced Training |
| **Pickleball Section** | Feature Block | Headline | The Pickleball Revolution. |
| | | Descriptive Text | Immerse yourself in a community built on performance and progression. Level up today. |
| **Q-Leagues & Leaderboard** | League Description | Section Title | Q-Leagues |
| | | Description | Join our Level-Based competitive engine. Verified UTR play, weekly match-ups, and the elite Queenswood Ladder starting March 2026. |
| | Leaderboard | Section Title | Q-Leaderboard |
| | | Season Label | Season 01 |
| | | Player Entry #01 | #01 Xander van Zyl 🎾 7.82 +2 |
| | | Player Entry #02 | #02 Brendan Louw 🎾 7.65 +1 |
| | | Player Entry #03 | #03 Marco Ferreira 🎾 7.44 0 |
| | | Player Entry #04 | #04 Jaco Pretorius 🎾 7.21 -1 |
| | | Player Entry #05 | #05 Keanu Dlamini 🎾 7.08 +3 |
| | | Player Entry #06 | #06 Ryan Nkosi 🎾 6.97 -2 |
| | | Player Entry #07 | #07 Tshego Molefe 🎾 6.84 +1 |
| | | Player Entry #08 | #08 Andre du Plessis 🏓 6.72 0 |
| | | Player Entry #09 | #09 Kyle Botha 🏓 6.61 +4 |
| | | Player Entry #10 | #10 Sipho Mahlangu 🏓 6.48 -1 |
| **Social & Club Info** | Social Event | Event Title | Social Dinks |
| | | Details (Day/Time/Cost) | Every Thursday from 18:00. R60 visitors. All levels welcome. |
| | Live Club Status | "Live" City Time | PTA: 23:26:09 |
| | | Players On Court | 12 On Court |
| | | Next Up Event | Mixed Social @ 18:00 |
| **Legacy/History** | Main Section | Headline | A Legacy of Tennis Excellence |
| | | Sub-headline | COMMUNITY DRIVEN. |
| | | Description Paragraph | Since the early 1950s, Queenswood Tennis Club has been a cornerstone of the Gauteng tennis community. |
| | Key Stats | Stat 1: Years | 70+ Years of History |
| | | Stat 2: Members | 300+ Active Members |
| | | Stat 3: Events | 50+ Monthly Events |
| | Technical Specifications | Spec 1: Surface | Pro-Grade DecoTurf System (US Open Standard). |
| | | Spec 2: Illumination | Twin-Mast 2000 Lux LED Stadium Lighting. |
| | | Spec 3: Coaching | Led by Carla Smith, Joe Lodder & Elite Staff. |
| | | Spec 4: Analytics | Precision Match Tracking & Video Replay. |
| | Featured Quote | Quote Text | "Where elite performance meets a community legacy built over 70 years." |
| **Coaching Staff** | Section Header | Section Title | Elite Coaching Staff / Meet Your Coaches. |
| | Coach 1 Profile | Name | Carla Smith |
| | | Title | Head Tennis Coach |
| | | Short Bio | Former WTA-ranked player bringing world-class technique to Queenswood. |
| | | Stat 1: Rating | 9.2 |
| | | Stat 2: Experience | 12 yrs |
| | | Stat 3: Rate | R450/hr |
| | | Stat 4: Wins | 340+ |
| | | Specialties / Certs | Singles Strategy & Power Serve, ITF Level 3, TSA Elite Coach |
| | | Next Availability | Next Available: Tomorrow 07:00 |
| | Coach 2 Profile | Name | Joe Ladder |
| | | Title | Pickleball & Doubles Specialist |
| | | Short Bio | Pickleball pioneer in SA, transforming club play with competitive edge. |
| | | Stat 1: Rating | 8.7 |
| | | Stat 2: Experience | 8 yrs |
| | | Stat 3: Rate | R350/hr |
| | | Stat 4: Wins | 210+ |
| | | Specialties / Certs | Doubles Tactics & Net Play, PPR Certified, TSA Coach |
| | | Next Availability | Next Available: Today 16:00 |
| **Membership Plans** | Section Header | Section Title | Join the Movement / Membership Plans |
| | Plan 1: Adult Pro | Plan Name / Tier | Adult Pro |
| | | Description / Tag | The Gold Standard Access |
| | | Price | R150/mo |
| | | Joining Fee | + R90 joining fee |
| | | Feature 1 | ✓ 24/7 Priority Booking Node |
| | | Feature 2 | ✓ Pro-Shop & Restring (15% OFF) |
| | | Feature 3 | ✓ High-FPS Performance Tracking |
| | | Feature 4 | ✓ Guest Access Pass (2/month) |
| | Plan 2: Masters | Plan Name / Tier | Masters |
| | | Description / Tag | For athletes 60+ |
| | | Price | R120/mo |
| | | Joining Fee | + R90 joining fee |
| | | Feature 1 | ✓ Morning Social Priority Slot |
| | | Feature 2 | ✓ League & Mixed Participation |
| | | Feature 3 | ✓ Clubhouse Performance Perks |
| | Plan 3: Junior | Plan Name / Tier | Junior |
| | | Description / Tag | Legacy for 21 & Under |
| | | Price | R75/mo |
| | | Joining Fee | + R90 joining fee |
| | | Feature 1 | ✓ Junior Masterclass Invites |
| | | Feature 2 | ✓ Competitive Ladder Seed |
| | | Feature 3 | ✓ Performance Analytics Node |
| **Booking Section** | Booking Widget Header | Section Title | Ready to PLAY? |
| | Booking Step 1 | Step Title | 1. Select Date |
| | | Helper Text | Find your perfect window. |
| | Booking Step 2 | Step Title | 2. Pick Time |
| | | Helper Text | Pick a date and time to continue |
| **Footer** | Legal / Info | Footer Text | Official Queenswood Sports Booking Portal |

---

## 🚀 For Developers: Implementation Notes

- **File Location:** This content is currently hardcoded in the `index.html` file.
- **Update Process:** To make changes, edit the corresponding HTML elements directly.
- **Future Enhancement:** Consider moving this content into a `config.js` file or a headless CMS (like Sanity, Contentful, or even a simple Google Sheet) to allow for non-technical updates without touching the code.**

---
*Created with Elite 2026 Aesthetics. 🎾🔥*

