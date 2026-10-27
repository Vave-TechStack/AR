# VaveAR by Vave TechStack

Production-ready WebAR SaaS platform at [ar.vavetechstack.com](https://ar.vavetechstack.com).

## Tech Stack
- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, shadcn/ui (Base UI), Lucide icons, Framer Motion
- Three.js, MindAR for WebAR
- PostgreSQL + Prisma
- NextAuth.js v5

## Features
- Marketing website (Home, Features, Solutions, Demo Gallery, Pricing, About, Contact, Login/Register)
- Customer dashboard (Projects, Media, Templates, QR codes, Analytics, Billing)
- Admin dashboard (Users, Projects, Subscriptions, Media, Support, Audit logs)
- Public AR experience via QR codes with image tracking
- Cloudflare R2 media storage (adapter ready for GCP)
- Role-based access control with tenant isolation

## Getting Started

1. Copy \.env.example\ to \.env\ and configure values
2. Install dependencies: \
pm install\
3. Generate Prisma client: \
px prisma generate\
4. Run migrations: \
px prisma migrate dev\
5. Start dev server: \
pm run dev\

## Deployment
See [DEPLOYMENT.md](./DEPLOYMENT.md) for Cloudflare/hosting instructions.

## License
Proprietary
