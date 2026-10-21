This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## AI Logo Maker (`/logo-maker`)

A free tool where visitors describe their business and get four AI logo ideas.

**How it works**
1. `/api/logo` asks **Cloudflare Workers AI** (FLUX.1 schnell) for 4 black-and-white symbols. The business name is never sent to the AI, because image models misspell text.
2. In the browser, each symbol is traced into a clean vector (`imagetracerjs`), and the name and tagline are set in real fonts converted to outlines (`opentype.js`, fonts in `public/fonts/logo`, SIL OFL).
3. Visitors change colour, typeface, layout and lettering instantly, without using another generation.
4. Downloading the SVG or PNG asks for a name, email and optional WhatsApp number once. `/api/logo/lead` emails that lead and the chosen SVG to the agency inbox using the existing Gmail setup.

**Setup**
1. Create a free Cloudflare account. Copy your **Account ID**, then create an API token with the **Workers AI** template.
2. Add `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` to `.env.local` and to **AWS Amplify → Environment variables**. `amplify.yml` already writes them to `.env.production` at build time.
3. Optional: add a free **Cloudflare Turnstile** widget and set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` to block bots.

All variables are listed in `.env.example`.

**Cost and limits.** The Workers AI free plan includes 10,000 neurons per day, enough for roughly 40 generations of 4 logos each. Defaults are 4 generations per visitor per day and 40 in total (`LOGO_DAILY_LIMIT_PER_IP`, `LOGO_DAILY_LIMIT_GLOBAL`). On the Workers Free plan, extra requests fail instead of being billed. When that happens, the page shows "try tomorrow" with a link to the contact page.

The limits are kept in server memory, so each server instance counts separately. For a hard global cap, create a Cloudflare **AI Gateway** with rate limiting and set `CLOUDFLARE_AI_BASE_URL` to its Workers AI URL.
