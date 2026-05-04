import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Missing RESEND_API_KEY environment variable." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const to = process.env.CONTACT_TO || "bill@lipeprotocol.com";
    const from =
      process.env.CONTACT_FROM || "LipeProtocol <onboarding@resend.dev>";

    const subject = `New LipeProtocol briefing request from ${name}`;

    const text = `
New LipeProtocol briefing request

Name: ${name}
Email: ${email}

Message:
${message}
`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New LipeProtocol briefing request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const result = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html,
      replyTo: email,
    });

    if (result.error) {
      return Response.json({ error: result.error.message }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { error: "Unable to send inquiry." },
      { status: 500 },
    );
  }
}