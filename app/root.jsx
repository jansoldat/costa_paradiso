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
import stylesLightbox from "yet-another-react-lightbox/styles.css";
import { validationAction, getSchema, getRecaptchaURL } from "~/utils/validation.server";
import styles from "~/styles/app.css"
import { useWebPSupportCheck } from "~/hooks/useWebPSupportCheck"
import { RootContext } from "./context/root-context";
import { sendMail } from "./utils/mail.server"
import appleFavicon from "./assets/apple-touch-icon.png"
import android512 from "./assets/android-chrome-512x512.png"
import android192 from "./assets/android-chrome-192x192.png"
import favicon16 from "./assets/favicon-16x16.png"
import favicon32 from "./assets/favicon-32x32.png"
import manifest from "./assets/site.webmanifest"
import axios from "axios";

const SUCCESS = {
  "en-US": "Email has been sent!",
  "it-IT": "L'e-mail è stata inviata!",
  "cs-CZ": "Zpráva byla úspěšně odeslána!",
}

export const action = async ({ request }) => {
  const url = new URL(request.url)
  const code = url.searchParams.get('lang') || "cs-CZ";
  const { formData, errors } = await validationAction({ request, schema: getSchema(code) })
  console.log('formData :', formData);
  const VERIFY_URL = getRecaptchaURL(formData.captcha);
  console.log('VERIFY_URL :', VERIFY_URL);


  if (errors) {
    return json({ errors }, { status: 400 })
  }

  const captchaResponse = await axios.post(VERIFY_URL)
  const isValidUser = captchaResponse.data?.success;

  if (!isValidUser) {
    return json({ errors: [`Sorry mate. You did not pass recaptcha test. If this is an error please contact us on our instagram.`] },
      { status: 400 })
  }

  const response = await sendMail(formData);
  if (response === "Error") {
    return json(
      { errors: [`Error during sending email. Please contact us at this adress: ${process.env.CONTACT_EMAIL}`] },
      { status: 400 })
  }

  return json({ success: SUCCESS[code] }, { status: 200 })
}


export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const code = url.searchParams.get('lang') || "cs-CZ";

  return json({
    ENV: {
      apiUrl: process.env.API_URL,
      captchaClientSecret: process.env.CAPTCHA_CLIENT_SECRET,
      captchaServerSecret: process.env.CAPTCHA_SERVER_SECRET,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    },
    language: code
  })
}


const META_TRANSLATIONS = {
  "en-US": {
    title: "Accommodation in Sardinia | Apartment in Costa Paradiso region",
    description: "Luxury apartment for rent in Sardinia in the Costa Paradiso area. Beautiful beaches, great accessibility and nice price.",
    'og:title': "Luxury apartment for rent in Sardinia.",
    "og:description": "Book a luxury apartment in Sardinia in Costa Paradiso. Discover a hidden gem in the heart of the Mediterranean or Sardinia."
  },
  "it-IT": {
    title: "Alloggio in Sardegna | Appartamento in zona di Costa Paradiso",
    description: "Appartamento di lusso in affitto in Sardegna nella zona di Costa Paradiso. Spiagge bellissime, grande accessibilità e prezzo conveniente.",
    'og:title': "Appartamento di lusso in affitto in Sardegna.",
    "og:description": "Prenotate un appartamento di lusso in Sardegna a Costa Paradiso. Scoprite una gemma nascosta nel cuore del Mediterraneo o della Sardegna."
  },
  "cs-CZ": {
    title: "Ubytování v Sardinii | Apartmán v oblasti Costa Paradiso",
    description: "Pronájem luxusního apartmánu v Sardinii v oblasti Costa Paradiso. Krásné pláže, skvělá dostupnost a příjemná cena.",
    'og:title': "Pronájem luxusního apartmánu v Sardinii.",
    "og:description": "Zarezervujte si luxusní apartmán na Sardinii v oblasti Costa Paradiso. Objevte skrytý klenot v srdci Středomoří neboli Sardinie."
  },
}
export const meta = ({ data }) => {

  return ({
    charset: "utf-8",
    title: "Costa Paradiso",
    ...META_TRANSLATIONS[data.language],
    viewport: "width=device-width,initial-scale=1",
    author: "Jan Soldát",
    robots: "index, follow",
    'mobile-web-app-capable': "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "og:type": "website",
    "og:url": "https://sardinieapartman.cz/",
    "og:image": "https://res.cloudinary.com/dsnfelexc/image/upload/v1682765430/Hero/background_xrtylw.webp",
    "og:locale:alternate": ["cs-CZ", "it-IT"],

  })
};


export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "apple-touch-icon", sizes: "180x180", href: appleFavicon },
    { rel: "icon", type: "image/png", sizes: "192x192", href: android192 },
    { rel: "icon", type: "image/png", sizes: "512x512", href: android512 },
    { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32 },
    { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16 },
    { rel: "manifest", href: manifest },
    { rel: "stylesheet", href: stylesLightbox, fetchpriority: "low" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Quicksand:wght@300;400;700&display=fallback", fetchpriority: "low" },
  ];
}

export default function App() {
  const { ENV, language } = useLoaderData()
  const supportsWebP = useWebPSupportCheck();

  return (
    <html lang={language}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <RootContext.Provider value={{ apiUrl: ENV.apiUrl, googleMapsApiKey: ENV.googleMapsApiKey, captchaClientSecret: ENV.captchaClientSecret, supportsWebP, language }}>
          <Outlet />
        </RootContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
