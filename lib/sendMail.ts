import nodemailer from "nodemailer";

type MailOptions = {
  subject: string;
  html: string;
  email: string;
};

export const sendMail = async ({ email, subject, html }: MailOptions) => {
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
    subject,
    html,
  };

  transport.sendMail(mailOptions);
};
