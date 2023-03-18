import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { json } from "@remix-run/node";
import { validationAction, getSchema } from "~/utils/validation";
import styles from "~/styles/app.css"
import { useWebPSupportCheck } from "~/hooks/useWebPSupportCheck"
import stylesLightbox from "yet-another-react-lightbox/styles.css";
import { RootContext } from "./context/root-context";
import { sendMail } from "./utils/mail.server"


export const meta = () => ({
  charset: "utf-8",
  title: "Costa Paradiso",
  viewport: "width=device-width,initial-scale=1",
});

const SUCCESS = {
  "en-US": "Email has been sent!",
  "it-IT": "L'e-mail è stata inviata!",
  "cs-CS": "Zpráva byla úspěšně odeslána!",
}

export const action = async ({ request }) => {
  const url = new URL(request.url)
  const code = url.searchParams.get('lang') || "en-US";
  const { formData, errors } = await validationAction({ request, schema: getSchema(code) })

  if (errors) {
    return json({ errors }, { status: 400 })
  }

  const response = await sendMail(formData);
  if (response === "Error") {
    return json(
      { errors: [`Error during sending email. Please contact us at this adress: ${process.env.CONTACT_EMAIL}`] },
      { status: 400 })
  }

  return json({ success: SUCCESS[code] }, { status: 200 })
}



export const loader = async () => {

  return json({
    ENV: {
      apiUrl: process.env.API_URL,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY
    },
  })
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: stylesLightbox, fetchpriority: "low" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Quicksand:wght@300;400;700&display=fallback", fetchpriority: "low" },
  ];
}

export default function App() {
  const { ENV } = useLoaderData()
  const supportsWebP = useWebPSupportCheck();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <RootContext.Provider value={{ apiUrl: ENV.apiUrl, googleMapsApiKey: ENV.googleMapsApiKey, supportsWebP }}>
          <Outlet />
        </RootContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
