import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // Step 1: Check environment variables
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    return NextResponse.json(
      {
        error: "Server configuration error.",
        debug: {
          step: "env_check",
          GMAIL_USER_set: !!gmailUser,
          GMAIL_APP_PASSWORD_set: !!gmailPass,
          GMAIL_USER_length: gmailUser?.length ?? 0,
          GMAIL_APP_PASSWORD_length: gmailPass?.length ?? 0,
        },
      },
      { status: 500 },
    );
  }

  // Step 2: Parse request body
  let body;
  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json(
      {
        error: "Invalid request body.",
        debug: { step: "parse_body", message: String(e) },
      },
      { status: 400 },
    );
  }

  const { name, email, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        error: "Name, email, and message are required.",
        debug: {
          step: "validation",
          hasName: !!name,
          hasEmail: !!email,
          hasMessage: !!message,
        },
      },
      { status: 400 },
    );
  }

  // Step 3: Create transporter
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });
  } catch (e) {
    return NextResponse.json(
      {
        error: "Failed to create email transporter.",
        debug: {
          step: "create_transporter",
          message: e instanceof Error ? e.message : String(e),
        },
      },
      { status: 500 },
    );
  }

  // Step 4: Verify transporter connection
  try {
    await transporter.verify();
  } catch (e) {
    return NextResponse.json(
      {
        error: "Email authentication failed.",
        debug: {
          step: "verify_transporter",
          message: e instanceof Error ? e.message : String(e),
          hint: "Check GMAIL_APP_PASSWORD. Make sure 2-Step Verification is ON and you generated an App Password (not your regular Gmail password).",
        },
      },
      { status: 500 },
    );
  }

  // Step 5: Send email
  try {
    await transporter.sendMail({
      from: `"LaunchCraft Website" <${gmailUser}>`,
      to: "launchcrafts.in@gmail.com",
      replyTo: email,
      subject: `New Project Inquiry — ${service || "General"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Name</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Email</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Service</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${service || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;vertical-align:top;">Message</td>
            <td style="padding:8px 12px;white-space:pre-wrap;">${message}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      {
        error: "Failed to send email.",
        debug: {
          step: "send_email",
          message: e instanceof Error ? e.message : String(e),
          code: (e as Record<string, unknown>).code ?? null,
        },
      },
      { status: 500 },
    );
  }
}
