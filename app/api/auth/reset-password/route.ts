import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, resetLink } = await req.json();

    if (!email || !resetLink) {
      return NextResponse.json(
        { message: "Email and reset link are required" },
        { status: 400 }
      );
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Reset your password`,
      html: `
        <p>Click <a href="${resetLink}">here</a> to reset your password.</p>
      `,
    };

    transport.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Erro ao enviar email" },
      { status: 500 }
    );
  }
}
