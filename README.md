# Lika Digital Marketing

This is a Next.js landing page built for Vercel deployment with a config-driven content system in `config/client.ts`.

## Routes

The site now ships with bilingual locale routes:

- English homepage: `/en`
- Spanish homepage: `/es`
- English intake form: `/en/start-your-project`
- Spanish intake form: `/es/empezar-proyecto`

The root path `/` redirects to `/en`.

Legacy intake paths such as `/your-business`, `/your-bussiness`, and `/start-your-project` redirect to the English intake route.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Push the project to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables from `.env.example` in Vercel → Project Settings → Environment Variables.
4. Redeploy.

## Form email notifications

Both the hero form and the contact form submit to `app/api/lead/route.ts`.

To receive lead emails, set these variables:

```bash
RESEND_API_KEY=your_resend_api_key
LEAD_FROM_EMAIL=leads@yourdomain.com
LEAD_NOTIFICATION_EMAIL=likadigitalmarketing@gmail.com
```

- `RESEND_API_KEY`: get this from your Resend account.
- `LEAD_FROM_EMAIL`: must be from a domain verified in Resend.
- `LEAD_NOTIFICATION_EMAIL`: inbox that receives form notifications.
- If `LEAD_NOTIFICATION_EMAIL` is omitted, the app falls back to the email in `config/client.ts`.

### Resend setup checklist

1. Create a Resend account.
2. Verify your sending domain in Resend, for example `yourdomain.com`.
3. Create a sender address on that domain, for example `leads@yourdomain.com`.
4. Copy your API key from Resend.
5. In Vercel, go to Project Settings → Environment Variables and add:
	- `RESEND_API_KEY`
	- `LEAD_FROM_EMAIL`
	- `LEAD_NOTIFICATION_EMAIL`
6. Redeploy the project after saving the variables.

### Recommended Vercel values

- `RESEND_API_KEY`: your Resend API key starting with `re_`
- `LEAD_FROM_EMAIL`: sender address from your verified domain, such as `leads@yourdomain.com`
- `LEAD_NOTIFICATION_EMAIL`: the inbox where you want to receive leads, such as your Gmail or business email

### Important note

The recipient can be a Gmail address, but the sender in `LEAD_FROM_EMAIL` should use a domain verified inside Resend. If these values are missing, the form still submits, but Vercel logs will show that email notifications were skipped.

## Recommended pre-deploy checklist

- Set the real production domain in `config/client.ts`.
- Confirm `header.logo.imageSrc` and all image paths load correctly.
- Test one hero form submission locally.
- Test one contact form submission locally.
- Add all required Vercel environment variables.
- Verify your sender domain in Resend before launching.

## Build commands

```bash
npm run build
npm run start
```
