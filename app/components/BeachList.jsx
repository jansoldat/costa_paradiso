import { Beach } from "./Beach";

const imageUrls = {
  sorgente:
    "https://res.cloudinary.com/dsnfelexc/image/upload/v1682798339/beaches/sorgente.jpg_vhhkfp.webp",
  cossi:
    "https://res.cloudinary.com/dsnfelexc/image/upload/v1682798338/beaches/cossi.jpg_tnvdsi.webp",
  tinnari:
    "https://res.cloudinary.com/dsnfelexc/image/upload/v1682798339/beaches/tinnari.jpg_tif1du.webp",
};

export const BeachList = ({ beachItems }) => (
  <div className="beaches row">
    {beachItems.map((item, i) => {
      return (
        <Beach
          {...item}
          key={item.id}
          {...item}
          imageUrl={imageUrls[item.imageId]}
          mirrorImageIndex={0}
        />
      );
    })}
  </div>
);
