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

## 🗺️ Site Content Structure (for 05/03/2025 //for Bash)

# Queenswood Sports Club - Content Management README

This document provides a complete inventory of all editable text content on the Queenswood Sports Club website. Use this as a reference when updating site copy.

---

## 📋 Quick Reference

| Section | Key Content Areas |
| :--- | :--- |
| **Top Bar** | Member profile, UTR/DUPR ratings |
| **Hero** | Main headline, sub-headline |
| **Pro Services** | Xander Vance profile, active session |
| **Community** | Pickleball section, Q-Leagues, leaderboard, social events |
| **Club Legacy** | History text, stats, technical specs, quote |
| **Coaching Staff** | Carla Smith & Joe Ladder profiles |
| **Membership** | Three plan tiers with pricing and features |
| **Booking** | Section title, step instructions |
| **Footer** | Copyright/legal text |

---

## 📝 Complete Content Inventory

### Top Bar
| Field | Current Content |
| :--- | :--- |
| Member Name | Danielle S. |
| Member Title | Queenswood Elite Member |
| UTR Rating | 6.42 |
| DUPR Rating | 4.15 |

### Hero Section
| Field | Current Content |
| :--- | :--- |
| Headline (H1) | READY TO SERVE? |
| Sub-headline | Experience the next generation of racket sports at Queenswood. Pro-grade surfaces, immersive motion, and an elite community. |

### Pro Services - Xander Vance
| Field | Current Content |
| :--- | :--- |
| Player Name | Xander Vance |
| Title / Tag | Queenswood Pro Elite |
| Q-Ranking | #04 |
| Win Rate | 89% |
| Serve Speed | 194km/h |
| Accuracy | 92% |

### Active Session Banner
| Field | Current Content |
| :--- | :--- |
| Session Title | Morning Power-Drill |
| Session Details | Court 05 • Advanced Training |

### Pickleball Section
| Field | Current Content |
| :--- | :--- |
| Headline | The Pickleball Revolution. |
| Description | Immerse yourself in a community built on performance and progression. Level up today. |

### Q-Leagues
| Field | Current Content |
| :--- | :--- |
| Section Title | Q-Leagues |
| Description | Join our Level-Based competitive engine. Verified UTR play, weekly match-ups, and the elite Queenswood Ladder starting March 2026. |

### Q-Leaderboard
| Field | Current Content |
| :--- | :--- |
| Section Title | Q-Leaderboard |
| Season Label | Season 01 |
| #01 | Xander van Zyl 🎾 7.82 +2 |
| #02 | Brendan Louw 🎾 7.65 +1 |
| #03 | Marco Ferreira 🎾 7.44 0 |
| #04 | Jaco Pretorius 🎾 7.21 -1 |
| #05 | Keanu Dlamini 🎾 7.08 +3 |
| #06 | Ryan Nkosi 🎾 6.97 -2 |
| #07 | Tshego Molefe 🎾 6.84 +1 |
| #08 | Andre du Plessis 🏓 6.72 0 |
| #09 | Kyle Botha 🏓 6.61 +4 |
| #10 | Sipho Mahlangu 🏓 6.48 -1 |

### Social & Club Info
| Field | Current Content |
| :--- | :--- |
| Event Title | Social Dinks |
| Event Details | Every Thursday from 18:00. R60 visitors. All levels welcome. |
| Live City Time | PTA: 23:26:09 |
| Players On Court | 12 On Court |
| Next Up Event | Mixed Social @ 18:00 |

### Legacy/History Section
| Field | Current Content |
| :--- | :--- |
| Headline | A Legacy of Tennis Excellence |
| Sub-headline | COMMUNITY DRIVEN. |
| Description | Since the early 1950s, Queenswood Tennis Club has been a cornerstone of the Gauteng tennis community. |
| Years Stat | 70+ Years of History |
| Members Stat | 300+ Active Members |
| Events Stat | 50+ Monthly Events |

### Technical Specifications
| Field | Current Content |
| :--- | :--- |
| Surface | Pro-Grade DecoTurf System (US Open Standard). |
| Illumination | Twin-Mast 2000 Lux LED Stadium Lighting. |
| Coaching | Led by Carla Smith, Joe Lodder & Elite Staff. |
| Analytics | Precision Match Tracking & Video Replay. |

### Featured Quote
| Field | Current Content |
| :--- | :--- |
| Quote Text | "Where elite performance meets a community legacy built over 70 years." |

### Coaching Staff - Carla Smith
| Field | Current Content |
| :--- | :--- |
| Name | Carla Smith |
| Title | Head Tennis Coach |
| Short Bio | Former WTA-ranked player bringing world-class technique to Queenswood. |
| Rating | 9.2 |
| Experience | 12 yrs |
| Rate | R450/hr |
| Wins | 340+ |
| Specialties / Certs | Singles Strategy & Power Serve, ITF Level 3, TSA Elite Coach |
| Next Availability | Next Available: Tomorrow 07:00 |

### Coaching Staff - Joe Ladder
| Field | Current Content |
| :--- | :--- |
| Name | Joe Ladder |
| Title | Pickleball & Doubles Specialist |
| Short Bio | Pickleball pioneer in SA, transforming club play with competitive edge. |
| Rating | 8.7 |
| Experience | 8 yrs |
| Rate | R350/hr |
| Wins | 210+ |
| Specialties / Certs | Doubles Tactics & Net Play, PPR Certified, TSA Coach |
| Next Availability | Next Available: Today 16:00 |

### Membership Plans - Section Header
| Field | Current Content |
| :--- | :--- |
| Section Title | Join the Movement / Membership Plans |

### Plan 1: Adult Pro
| Field | Current Content |
| :--- | :--- |
| Plan Name | Adult Pro |
| Description | The Gold Standard Access |
| Price | R150/mo |
| Joining Fee | + R90 joining fee |
| Feature 1 | ✓ 24/7 Priority Booking Node |
| Feature 2 | ✓ Pro-Shop & Restring (15% OFF) |
| Feature 3 | ✓ High-FPS Performance Tracking |
| Feature 4 | ✓ Guest Access Pass (2/month) |

### Plan 2: Masters
| Field | Current Content |
| :--- | :--- |
| Plan Name | Masters |
| Description | For athletes 60+ |
| Price | R120/mo |
| Joining Fee | + R90 joining fee |
| Feature 1 | ✓ Morning Social Priority Slot |
| Feature 2 | ✓ League & Mixed Participation |
| Feature 3 | ✓ Clubhouse Performance Perks |

### Plan 3: Junior
| Field | Current Content |
| :--- | :--- |
| Plan Name | Junior |
| Description | Legacy for 21 & Under |
| Price | R75/mo |
| Joining Fee | + R90 joining fee |
| Feature 1 | ✓ Junior Masterclass Invites |
| Feature 2 | ✓ Competitive Ladder Seed |
| Feature 3 | ✓ Performance Analytics Node |

### Booking Section
| Field | Current Content |
| :--- | :--- |
| Section Title | Ready to PLAY? |
| Step 1 Title | 1. Select Date |
| Step 1 Helper | Find your perfect window. |
| Step 2 Title | 2. Pick Time |
| Step 2 Helper | Pick a date and time to continue |

### Footer
| Field | Current Content |
| :--- | :--- |
| Footer Text | Official Queenswood Sports Booking Portal |

---

## 🔧 Technical Notes

- **File Location:** All content is currently in `index.html`
- **Update Method:** Edit the corresponding HTML elements directly
- **Content Type:** All fields listed above are text-based and can be updated with new copy as needed

---


---
*Created with Elite 2026 Aesthetics. 🎾🔥*


