# GEAR Platform

Venture-grade platform scaffold built with Next.js App Router, Stripe SAFE intake, Framer Motion animations, and Sanity CMS integration points.

## Stack

- Next.js 14+ App Router (TypeScript)
- TailwindCSS
- Framer Motion
- Stripe Checkout + Webhook scaffold
- Sanity headless CMS client

## Project Structure

- `app/` App Router pages + API routes
- `components/` modular landing page sections
- `lib/` Stripe and Sanity clients
- `schemas/` Sanity schema location
- `styles/` optional shared style assets

## Environment Variables

Copy `.env.example` to `.env.local` and set values:

```bash
cp .env.example .env.local
```

Required keys:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Stripe Endpoints

- `POST /api/create-checkout-session`
- `POST /api/webhook`

## Deployment

1. Push repository to GitHub.
2. Import project in Vercel.
3. Add all environment variables.
4. Deploy.
