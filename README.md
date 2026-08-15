# Huma Electronics — Homepage

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + lucide-react +
Framer Motion clone of the Huma Electronics homepage design.

## Getting started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — composes all homepage sections
- `src/app/layout.tsx` — fonts (Poppins/Inter) + SEO metadata
- `src/app/globals.css` — design tokens (colors) as Tailwind v4 `@theme` vars
- `src/components/` — one file per section (`Header`, `Hero`, `ServicesGrid`,
  `Expertise`, `WhyChooseUs`, `Process`, `Booking`, `Legacy`, `Footer`)
- `src/components/ui/` — shared card/heading components

## Placeholder images to replace

All photographic content is stubbed with generated placeholder SVGs in
`public/placeholders/`. Swap these for real photography before shipping —
each one is referenced from a single component:

| File | Used in | Replace with |
|---|---|---|
| `public/placeholders/hero-technician.svg` | `Hero.tsx` | Photo of a technician servicing a wall-mounted AC in a living room |
| `public/placeholders/expertise-tv.svg` | `Expertise.tsx` | TV panel repair photo |
| `public/placeholders/expertise-audio.svg` | `Expertise.tsx` | Audio system service photo |
| `public/placeholders/expertise-kitchen.svg` | `Expertise.tsx` | Kitchen appliances photo |
| `public/placeholders/expertise-home.svg` | `Expertise.tsx` | Smart home appliance photo |
| `public/placeholders/legacy.svg` | `Legacy.tsx` | Workshop / team photo |

The "Book Your Appliance Service" illustration (glowing nodes + tools icon)
is built with inline SVG/lucide icons in `Booking.tsx` rather than an image
placeholder, since it's a diagram rather than a photo — no asset swap needed
there.

## Notes

- The booking form uses controlled React state, not a native `<form>`
  submit — `handleBookService` / `handleWhatsApp` in `Booking.tsx` are
  stubbed with `TODO` comments for wiring to a real backend / WhatsApp
  deep link.
- `next.config.ts` enables `images.dangerouslyAllowSVG` so the local SVG
  placeholders can go through `next/image`; once real JPG/PNG photos are
  dropped in, that flag can be removed if you don't otherwise need SVGs.
