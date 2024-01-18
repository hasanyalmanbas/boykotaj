var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(
  title: string,
  name: string,
  email: string,
  message: string
) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_TO,
    replyTo: email,
    subject: title,
    html: `
    <p>Name: ${name} </p>
    <p>Email: ${email} </p>
    <p>Message: ${message} </p>
    `,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err: any, response: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
}
