import nodemailer from "nodemailer";
import Transport from "nodemailer-sendinblue-transport";

const transporter = nodemailer.createTransport(
  new Transport({ apiKey: process.env.SENDINBLUE_API_KEY })
);


export async function sendMail({ name, subject, email, msg }) {
  return new Promise((resolve) => {
    transporter.sendMail({
      subject: 'Nová zpráva z kontaktního formuláře.',
      from: `${name}<${email}>`,
      to: process.env.CONTACT_EMAIL,
      html: `
        <div>
          <h1>Předmět: ${subject}</h1>
          <h2>Odesílatel: ${name}, ${email}</h2>
          <p>${msg}</p>
        </div>
    `,
    }, function (error, info) {
      if (error) {
        console.log("error is " + error);
        resolve("Error");
      }
      else {
        console.log('Email sent: ' + info.response);
        resolve("Success");
      }
    });
  })
}
