import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail({ name, subject, email, msg }) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Sardinie apartmán kontaktní formulář <support@sardinieapartman.cz>",
      replyTo: email,
      to: [process.env.CONTACT_EMAIL],
      subject: "Nová zpráva z kontaktního formuláře.",
      html: `
        <div>
          <h1>Předmět: ${subject}</h1>
          <h2>Odesílatel: ${name}, ${email}</h2>
          <p>${msg}</p>
        </div>
      `,
      reply_to: email, // This allows replies to go to the original sender
    });

    if (error) {
      console.error("Resend error:", error);
      return "Error";
    }

    console.log("Email sent successfully:", data);
    return "Success";
  } catch (error) {
    console.error("Resend catch error:", error);
    return "Error";
  }
}
