import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import sgMail, { MailDataRequired } from '@sendgrid/mail';

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string; // honeypot
};

function escapeHtml(str: string) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Very basic in-memory rate limiter: counts per IP in short window.
// Note: serverless functions are ephemeral; for production use a persistent store like Redis.
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // max requests per IP per window
const ipCounts: Map<string, { count: number; firstTs: number }> = new Map();

export async function POST(req: NextRequest) {
  try {
    const body: Body = await req.json();

    // Honeypot: ignore submissions with the hidden 'website' field filled
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const message = (body.message || '').trim();
    const subject = (body.subject || `New contact from ${name || 'Website Visitor'}`).trim();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Name, email and message are required.' }, { status: 400 });
    }

    // Rate limiting by IP
  const ip = req.headers.get('x-real-ip') || req.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const info = ipCounts.get(ip) || { count: 0, firstTs: now };
    if (now - info.firstTs > RATE_LIMIT_WINDOW_MS) {
      info.count = 0;
      info.firstTs = now;
    }
    info.count += 1;
    ipCounts.set(ip, info);
    if (info.count > RATE_LIMIT_MAX) {
      return NextResponse.json({ ok: false, error: 'Rate limit exceeded. Try again later.' }, { status: 429 });
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;
    const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

    if (!SENDGRID_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
      console.error('SendGrid env vars missing');
      return NextResponse.json({ ok: false, error: 'Server not configured.' }, { status: 500 });
    }

    const html = `
      <h3>New contact form message</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p>Sent from your website contact form</p>
    `;

    // Use @sendgrid/mail for server-side sending
    try {
      sgMail.setApiKey(SENDGRID_API_KEY);
      const msg: MailDataRequired = {
        to: CONTACT_TO_EMAIL,
        from: CONTACT_FROM_EMAIL,
        replyTo: email,
        subject,
        html,
      };

      const result = await sgMail.send(msg);
      // result is an array of responses from SendGrid
      console.log('SendGrid send result', result);
      if (process.env.NODE_ENV !== 'production') {
        return NextResponse.json({ ok: true, detail: result });
      }
    } catch (err: unknown) {
      console.error('SendGrid send error', err);
      // Try to extract SendGrid response body when available
      let detail: unknown = undefined;
      if (err && typeof err === 'object') {
        const e = err as { response?: { body?: unknown } };
        detail = e.response?.body ?? String(err);
      } else {
        detail = String(err);
      }

      if (process.env.NODE_ENV !== 'production') {
        return NextResponse.json({ ok: false, error: 'Failed to send email', detail }, { status: 502 });
      }

      return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error('Contact API error', err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message || 'Server error' }, { status: 500 });
  }
}
