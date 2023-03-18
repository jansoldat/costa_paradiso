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

export const translateFilter = (code) => ({
  translations:
  {
    _filter:
      { languages_code: { _eq: code } }
  },
})


export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const code = url.searchParams.get('lang') || "en-US";



  const directus = new Directus(process.env.API_URL, { MAX_RELATIONAL_DEPTH: 20 });

  const contactForm = await directus.items('contactForm').readByQuery({
    fields: "*, translations.*, quote.*, quote.translations.*",
    deep: {
      ...translateFilter(code),
      quote: { ...translateFilter(code) }
    }
  });

  const hero = await directus.items('Hero').readByQuery({
    fields: "*, translations.*",
    deep: {
      ...translateFilter(code),
    }
  });

  const sectionData = await directus.items('sections').readByQuery({
    fields: ["*", "translations.*,Blocks.*, Blocks.item:quote.*, Blocks.item:quote.translations.*, Blocks.item:htmlText.*, Blocks.item:htmlText.translations.*, Blocks.item:apartmentItems.*, Blocks.item:apartmentItems.items.*, Blocks.item:apartmentItems.items.translations.*, Blocks.item:gallery, Blocks.item:gallery.images.*, Blocks.item:beachItems.items.*, Blocks.item:beachItems.items.translations.*, Blocks.item:priceTable.*, Blocks.item:priceTable.translations.*, Blocks.item:priceTable.items.*, Blocks.item:priceTable.items.translations.*, Blocks.item:iconItems.*, Blocks.item:iconItems.items.*, Blocks.item:iconItems.items.translations.*"],
    sort: ["sort"],
    deep: {
      ...translateFilter(code),
      Blocks: {
        "item:quote": { ...translateFilter(code) },
        "item:htmlText": { ...translateFilter(code) },
        "item:apartmentItems": {
          items:
            { ...translateFilter(code) }
        },
        "item:beachItems": {
          items:
            { ...translateFilter(code) }
        },
        "item:iconItems": {
          items:
            { ...translateFilter(code) }
        },
        "item:priceTable": {
          ...translateFilter(code),
          items:
            { ...translateFilter(code) }
        },
      },
    }
  });

  return json({ sectionData, contactForm, hero });
}

export default function Index() {
  const { sectionData, contactForm, hero } = useLoaderData();

  return (
    <>
      <Hero {...hero.data} language={contactForm.data.translations[0].languages_code} />


      {sectionData?.data?.length > 0 &&
        sectionData.data.map(section => {

          return <Section key={section.id} {...section} >
            <>
              {section.Blocks.map(block => <BlockBuilder key={block.id} {...block} />)}
            </>
          </Section>
        })
      }

      <Section translations={[{ heading: contactForm.data.translations[0].title }]} kind="dark" isLast className="contact">
        <ContactForm className="grid__form" {...contactForm.data} />
      </Section>
      <Map />


      <footer className="column">
        <button className="footer__link" onClick={animateScroll.scrollToTop}>
          <svg className="footer__icon" id="sprite_top" viewBox="0 0 349.757 349.756">
            <title>top</title>
            <path d="M298.055,147.199c0,2.787-1.267,9.271-13.036,9.271h-54.037v178.856c0.072,0.48,0.144,1.159,0.144,1.939 c0,3.177-1.207,6.106-3.416,8.269c-2.858,2.798-7.224,4.222-12.988,4.222h-83.056c-11.493,0-14.525-8.149-14.525-12.454V160.236 H67.606c-13.841,0-15.904-6.594-15.904-10.521c0-6.293,5.996-12.577,7.197-13.775c3.176-4.305,89.036-118.195,101.529-130.718 c4.558-4.534,9.131-5.339,12.163-5.209c7.293,0.3,12.268,5.915,12.808,6.56l104.838,126.674 C291.75,134.631,298.055,141.068,298.055,147.199z" />
          </svg>
        </button>
        <p>Copyright © 2020 Hana Alexanderová</p>
        <a href="https://www.instagram.com/hanaalexanderova">
          <Instagram className="footer__ig" /></a>
        <p className="author" >Jan Soldát</p>
      </footer>
    </ >
  );
}
