import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // TODO: Integrate with your preferred email service:
    // - Resend (https://resend.com)
    // - SendGrid
    // - Nodemailer
    // - Formspree
    //
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@aldovadev.com',
    //   to: 'hello@aldovadev.com',
    //   subject: `[Portfolio] ${subject}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    // });

    console.log("Contact form submission:", { name, email, subject, message });

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
