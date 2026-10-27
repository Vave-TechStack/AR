# Deployment Instructions

## Prerequisites
- PostgreSQL database
- Cloudflare R2 bucket (or S3-compatible storage)
- Node.js 18+

## Environment Variables
Copy \.env.example\ to \.env.production\ and fill all required values.

## Build
\\\ash
npm ci
npx prisma generate
npx prisma migrate deploy
npm run build
npm run start
\\\

## Cloudflare Pages/Workers
This app uses Next.js App Router with server-side functionality. For Cloudflare deployment:
- Use OpenNext for Cloudflare Workers
- Configure R2 bindings
- Set environment variables in dashboard
- Run migrations separately against production DB

## GCP Migration
Storage and auth are abstracted behind adapters in \src/lib/\. Swap implementations in adapters to migrate to GCP Cloud Run/Cloud SQL without major refactoring.
