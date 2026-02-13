import { NextRequest, NextResponse } from "next/server";

/* ── Simple in-memory rate limiter ─────────────────────────── */
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

/* ── Field constraints ─────────────────────────────────────── */
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5_000;

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim();
}

export async function POST(req: NextRequest) {
  try {
    /* Rate limiting */
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await req.json();

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const subject = sanitize(body.subject);
    const message = sanitize(body.message);

    /* Required check */
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    /* Length limits */
    if (name.length > MAX_NAME) {
      return NextResponse.json({ error: `Name must be under ${MAX_NAME} characters` }, { status: 400 });
    }
    if (email.length > MAX_EMAIL) {
      return NextResponse.json({ error: `Email must be under ${MAX_EMAIL} characters` }, { status: 400 });
    }
    if (subject.length > MAX_SUBJECT) {
      return NextResponse.json({ error: `Subject must be under ${MAX_SUBJECT} characters` }, { status: 400 });
    }
    if (message.length > MAX_MESSAGE) {
      return NextResponse.json({ error: `Message must be under ${MAX_MESSAGE} characters` }, { status: 400 });
    }

    /* Email format */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // TODO: Integrate an email service (e.g. Resend, SendGrid, Nodemailer)
    // to actually deliver the message.

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
