import { sendMail } from "@/service/mail_service";

export const dynamic = "force-dynamic"; // defaults to auto
var nodemailer = require("nodemailer");

export async function GET(request: Request) {
  const data = await request.json();
  //console.log(data);

  return Response.json({ data });
}

export async function POST(request: Request) {
  const data = await request.json();

  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${data.captchaToken}`,
    { method: "POST" }
  );

  if (captchaResponse.ok) {
    var response = await sendMail(
      data.title,
      data.name,
      data.email,
      data.message
    );
    if (response) {
      return Response.json({ status: "OK" });
    } else {
      return Response.json({ status: "Error" });
    }
  }

  return Response.json({ status: "Error" });
}
