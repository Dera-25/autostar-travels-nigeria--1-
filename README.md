# Autostar Travels Nigeria

A premium single-page website for Autostar Travels Nigeria — an executive interstate transportation and parcel logistics company connecting Enugu, Abuja, and Lagos.

## Overview

This project is a modern, responsive React landing page built to showcase Autostar's services, travel routes, branch locations, and booking capabilities. It features smooth scroll-triggered animations, a clean executive design, and full mobile responsiveness.

## Tech Stack

- **Framework:** React 19 + Vite 6
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Build Tool:** Vite

## Features & Sections

- **Navbar** — Fixed navigation with smooth-scroll anchor links
- **Hero** — Full-screen hero with headline, fleet imagery, and an integrated booking widget
- **About** — Company story with feature highlights and a "10+ Years of Excellence" badge
- **Services** — Four core offerings:
  - Passenger Transport
  - Parcel Delivery
  - Corporate Logistics
  - Charter Services
- **Routes** — Destination cards for Enugu ↔ Abuja ↔ Lagos with schedules and pricing
- **Why Choose Us** — Value proposition highlights
- **How It Works** — Step-by-step booking/delivery process
- **Contact** — Branch details for Enugu, Abuja, and Lagos with phone, email, and WhatsApp contact options
- **Footer** — Quick links, contact info, newsletter signup, and social placeholders

## Key Details

- **Daily Departures:** Fixed 5:30 AM schedules across all major routes
- **Fleet:** Executive air-conditioned Toyota Sienna vehicles
- **Branches:**
  - **Enugu** — No. 123 Ogui Road, Enugu State
  - **Abuja** — Utako Ultra Modern Market, Suite 45, Abuja FCT
  - **Lagos** — Jibowu Terminal, Yaba, Lagos State
- **Support Hours:** 7:00 AM — 9:00 PM daily

## Project Structure

```
├── public/
│   └── images/
│       ├── sienna.png          # Fleet vehicle image
│       └── Parcel.jpg          # Logistics/parcel image
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── BookingWidget.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Routes.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally on port `3000`.

### Build

```bash
npm run build
```

Outputs the production build to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

Runs TypeScript type checking without emitting files.

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite --port=3000 --host=0.0.0.0` | Start development server |
| `build` | `vite build` | Create production build |
| `preview` | `vite preview` | Preview production build locally |
| `clean` | `rm -rf dist` | Remove build output |
| `lint` | `tsc --noEmit` | Run TypeScript type check |

## Notes

- This is a static frontend site with no backend API or server-side functionality.
- Route card images are loaded from Unsplash; local images (`sienna.png`, `Parcel.jpg`) are served from `/public/images/`.

