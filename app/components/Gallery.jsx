import React, { useMemo } from "react";
import cs from "classnames";
import Lightbox from "yet-another-react-lightbox";
import LazyLoad from "react-lazy-load";

import { getBackgroundFallbackImage, getDirectusImage } from "~/utils";
import { useRootContext } from "~/context/root-context";

const VERTICAL = [2, 6, 24];
const HORIZONTAL = [3, 30, 33];
const BIG = [2, 11, 23, 35];


const Gallery = ({ images }) => {
  const { apiUrl, supportsWebP } = useRootContext()

  const [index, setIndex] = React.useState(-1);

  const galleryImages = useMemo(() => images.map((image, index) => ({
    id: image.id,
    src: getDirectusImage({ asset: image.directus_files_id, apiUrl, width: 1250 }),
    thumbnailUrl: getBackgroundFallbackImage({ supportsWebP, asset: image.directus_files_id, apiUrl, width: 250, name: `image-gallery-${index}` }),
    isVertical: VERTICAL.includes(index),
    isHorizontal: HORIZONTAL.includes(index),
    isBig: BIG.includes(index)
  })), [apiUrl, images, supportsWebP])

  return (
    <div className="gallery-container" >
      {galleryImages.map((image, index) => {
        return (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            onClick={(e) => { e.preventDefault(); setIndex(index); }}
            key={`gallery-image-${image.id}`}
            alt={`Gallery image number ${index + 1}`}
            aria-label={`Gallery image number ${index + 1}`}
            className={cs({
              horizontal: image.isHorizontal,
              vertical: image.isVertical,
              big: image.isBig
            })}
            href="#">
            <LazyLoad>
              <div style={{ backgroundImage: image.thumbnailUrl }}></div>
            </LazyLoad>
          </a>)
      }
      )}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={galleryImages}
      />
    </div>
  )
}

export default Gallery;
