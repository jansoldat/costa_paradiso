import { Directus } from '@directus/sdk';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { animateScroll } from 'react-scroll';
import { BlockBuilder } from '~/components/BlockBuilder';
import { Section } from '~/components/Section';
import Hero from '~/components/Hero';
import { Map } from '~/components/Map';
import { Instagram } from '~/components/icons';
import ContactForm from './contactForm';
import { useRootContext } from '~/context/root-context';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import qs from 'qs';

const getQuery = locale => qs.stringify({ populate: "deep", locale })



export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const code = url.searchParams.get('lang') || "cs-CZ";
  const BASE_URL = `${process.env.API_URL}/api/sections/?${getQuery(code)}`;
  const CONTACT_URL = `${process.env.API_URL}/api/contact/?${getQuery(code)}`;

  const res = await fetch(`${BASE_URL}`);
  const contactRes = await fetch(`${CONTACT_URL}`);
  const data = await res.json();
  const contactData = await contactRes.json();

  return { data: data?.data, contactData: contactData?.data };
}

export default function Index() {
  const { data, contactData } = useLoaderData();
  const { language, captchaClientSecret } = useRootContext();

  const year = new Date().getFullYear();


  return (
    <>
      <Hero />


      {data?.length > 0 &&
        data.map(section => {
          const sectionInfo = section?.attributes;
          const blocks = sectionInfo.slug === "gallery" ? [section?.attributes?.sectionGal] : section?.attributes?.Blocks;

          return <Section key={section.id} {...sectionInfo} >
            <>
              {blocks.map(block => <BlockBuilder key={[block.__component, block.id].join("--")} __component={sectionInfo.slug === "gallery" && "gallery"} {...block} />)}
            </>
          </Section>
        })
      }

      <Section heading={contactData?.attributes?.title} kind="dark" isLast className="contact" slug="contact">
        <GoogleReCaptchaProvider reCaptchaKey={captchaClientSecret}>
          <ContactForm className="grid__form" {...contactData?.attributes} />
        </GoogleReCaptchaProvider>
      </Section>
      <Map languages_code={language} />

      <footer className="column">
        <button className="footer__link" onClick={animateScroll.scrollToTop}>
          <svg className="footer__icon" id="sprite_top" viewBox="0 0 349.757 349.756">
            <title>top</title>
            <path d="M298.055,147.199c0,2.787-1.267,9.271-13.036,9.271h-54.037v178.856c0.072,0.48,0.144,1.159,0.144,1.939 c0,3.177-1.207,6.106-3.416,8.269c-2.858,2.798-7.224,4.222-12.988,4.222h-83.056c-11.493,0-14.525-8.149-14.525-12.454V160.236 H67.606c-13.841,0-15.904-6.594-15.904-10.521c0-6.293,5.996-12.577,7.197-13.775c3.176-4.305,89.036-118.195,101.529-130.718 c4.558-4.534,9.131-5.339,12.163-5.209c7.293,0.3,12.268,5.915,12.808,6.56l104.838,126.674 C291.75,134.631,298.055,141.068,298.055,147.199z" />
          </svg>
        </button>
        <p>Copyright © {year} Hana Alexanderová</p>
        <a href="https://www.instagram.com/hanaalexanderova">
          <Instagram className="footer__ig" /></a>
        <p className="author" >Jan Soldát</p>
      </footer>
    </ >
  );
}
