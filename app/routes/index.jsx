import { Directus } from '@directus/sdk';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const directus = new Directus(process.env.API_URL);
  const publicData = await directus.items('sections').readByQuery({
    fields: ["*", "translations.*"],
    deep: {
      translations:
      {
        _filter:
          { languages_id: "en-US" }
      }
    }
  });

  return publicData;
}

export default function Index() {
  const res = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Ahojda</h1>
    </div>
  );
}
