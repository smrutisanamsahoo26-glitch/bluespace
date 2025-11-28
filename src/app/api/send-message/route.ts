import { NextResponse } from "next/server";
import { Resend } from "resend";

const toEmail = "bluespaceofficial@mail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, requirement } = body;

    if (!name || !email || !phone || !requirement) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY missing");
      return NextResponse.json(
        { message: "Email service not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "BlueSpace <notifications@bluespace.dev>",
      to: toEmail,
      subject: `New enquiry from ${name}`,
      replyTo: email,
      text: `
New enquiry received:

Name: ${name}
Email: ${email}
Phone: ${phone}

Requirement:
${requirement}
`,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Unable to send message." },
      { status: 500 },
    );
  }
}

