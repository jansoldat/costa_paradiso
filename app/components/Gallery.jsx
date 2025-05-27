import React, { useMemo } from "react";
import cs from "classnames";
import Lightbox from "yet-another-react-lightbox";
import LazyLoad from "react-lazy-load";

const VERTICAL = [2, 6, 24];
const HORIZONTAL = [3, 30, 33];
const BIG = [2, 11, 23, 35];

const SOURCE = "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/";

const getImageUrls = () => {
  return [
    {
      id: "1",
      attributes: {
        url: `${SOURCE}gimg_1_jpg_e55c3feb5b.webp`,
        formats: {
          medium: {
            url: `${SOURCE}medium_gimg_1_jpg_e55c3feb5b.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_1_jpg_e55c3feb5b.webp`,
          },
        },
      },
    },
    {
      id: "2",
      attributes: {
        url: `${SOURCE}gimg_2_jpg_e2f39af0e5.webp`,
        formats: {
          medium: {
            url: `${SOURCE}medium_gimg_2_jpg_e2f39af0e5.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_2_jpg_e2f39af0e5.webp`,
          },
        },
      },
    },
    {
      id: "3",
      attributes: {
        url: `${SOURCE}gimg_3_jpg_c77200d606.webp`,
        formats: {
          medium: {
            url: `${SOURCE}medium_gimg_3_jpg_c77200d606.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_3_jpg_c77200d606.webp`,
          },
        },
      },
    },
    {
      id: "4",
      attributes: {
        url: `${SOURCE}gimg_4_jpg_167160916a.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_4_jpg_167160916a.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_4_jpg_167160916a.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_4_jpg_167160916a.webp`,
          },
        },
      },
    },
    {
      id: "5",
      attributes: {
        url: `${SOURCE}gimg_5_jpg_a69db6b0ed.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_5_jpg_a69db6b0ed.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_5_jpg_a69db6b0ed.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_5_jpg_a69db6b0ed.webp`,
          },
        },
      },
    },
    {
      id: "6",
      attributes: {
        url: `${SOURCE}gimg_6_jpg_e804323cc2.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_6_jpg_e804323cc2.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_6_jpg_e804323cc2.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_6_jpg_e804323cc2.webp`,
          },
        },
      },
    },
    {
      id: "7",
      attributes: {
        url: `${SOURCE}gimg_7_jpg_8a7f00948b.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_7_jpg_8a7f00948b.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_7_jpg_8a7f00948b.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_7_jpg_8a7f00948b.webp`,
          },
        },
      },
    },
    {
      id: "8",
      attributes: {
        url: `${SOURCE}gimg_8_jpg_8b4e9ea337.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_8_jpg_8b4e9ea337.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_8_jpg_8b4e9ea337.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_8_jpg_8b4e9ea337.webp`,
          },
        },
      },
    },
    {
      id: "9",
      attributes: {
        url: `${SOURCE}gimg_9_jpg_32529356b0.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_9_jpg_32529356b0.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_9_jpg_32529356b0.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_9_jpg_32529356b0.webp`,
          },
        },
      },
    },
    {
      id: "12",
      attributes: {
        url: `${SOURCE}gimg_10_jpg_861f15279b.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_10_jpg_861f15279b.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_10_jpg_861f15279b.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_10_jpg_861f15279b.webp`,
          },
        },
      },
    },
    {
      id: "13",
      attributes: {
        url: `${SOURCE}gimg_11_jpg_6686759684.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_11_jpg_6686759684.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_11_jpg_6686759684.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_11_jpg_6686759684.webp`,
          },
        },
      },
    },
    {
      id: "14",
      attributes: {
        url: `${SOURCE}gimg_12_jpg_ca1939915a.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_12_jpg_ca1939915a.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_12_jpg_ca1939915a.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_12_jpg_ca1939915a.webp`,
          },
        },
      },
    },
    {
      id: "15",
      attributes: {
        url: `${SOURCE}gimg_13_jpg_877ef2fa9c.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_13_jpg_877ef2fa9c.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_13_jpg_877ef2fa9c.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_13_jpg_877ef2fa9c.webp`,
          },
        },
      },
    },
    {
      id: "16",
      attributes: {
        url: `${SOURCE}gimg_14_jpg_24fea04cc6.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_14_jpg_24fea04cc6.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_14_jpg_24fea04cc6.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_14_jpg_24fea04cc6.webp`,
          },
        },
      },
    },
    {
      id: "17",
      attributes: {
        url: `${SOURCE}gimg_15_jpg_4889d91b79.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_15_jpg_4889d91b79.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_15_jpg_4889d91b79.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_15_jpg_4889d91b79.webp`,
          },
        },
      },
    },
    {
      id: "18",
      attributes: {
        url: `${SOURCE}gimg_16_jpg_38aedaadc3.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_16_jpg_38aedaadc3.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_16_jpg_38aedaadc3.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_16_jpg_38aedaadc3.webp`,
          },
        },
      },
    },
    {
      id: "19",
      attributes: {
        url: `${SOURCE}gimg_17_jpg_cb7e2ffc9f.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_17_jpg_cb7e2ffc9f.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_17_jpg_cb7e2ffc9f.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_17_jpg_cb7e2ffc9f.webp`,
          },
        },
      },
    },
    {
      id: "20",
      attributes: {
        url: `${SOURCE}gimg_18_jpg_e9c4bbb880.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_18_jpg_e9c4bbb880.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_18_jpg_e9c4bbb880.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_18_jpg_e9c4bbb880.webp`,
          },
        },
      },
    },
    {
      id: "21",
      attributes: {
        url: `${SOURCE}gimg_19_jpg_886894266d.webp`,
        formats: {
          medium: {
            url: `${SOURCE}medium_gimg_19_jpg_886894266d.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_19_jpg_886894266d.webp`,
          },
        },
      },
    },
    {
      id: "22",
      attributes: {
        url: `${SOURCE}gimg_20_jpg_d74904b070.webp`,
        formats: {
          large: {
            url: `${SOURCE}large_gimg_20_jpg_d74904b070.webp`,
          },
          medium: {
            url: `${SOURCE}medium_gimg_20_jpg_d74904b070.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_20_jpg_d74904b070.webp`,
          },
        },
      },
    },
    {
      id: "23",
      attributes: {
        url: `${SOURCE}gimg_21_jpg_5bf49e733c.webp`,
        formats: {
          medium: {
            url: `${SOURCE}medium_gimg_21_jpg_5bf49e733c.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_21_jpg_5bf49e733c.webp`,
          },
        },
      },
    },
    {
      id: "24",
      attributes: {
        url: `${SOURCE}gimg_22_jpg_b7486aa8d4.webp`,
        formats: {
          medium: {
            url: `${SOURCE}medium_gimg_22_jpg_b7486aa8d4.webp`,
          },
          thumbnail: {
            url: `${SOURCE}thumbnail_gimg_22_jpg_b7486aa8d4.webp`,
          },
        },
      },
    },
  ];
};

const Gallery = () => {
  const images = getImageUrls();
  const [index, setIndex] = React.useState(-1);

  const galleryImages = useMemo(
    () =>
      images.map((image, index) => {
        return {
          id: ["image", image.id].join("--"),
          src: image.attributes.formats?.large?.url || image.attributes.url,
          thumbnailUrl: image?.attributes?.formats?.thumbnail?.url,
          isVertical: VERTICAL.includes(index),
          isHorizontal: HORIZONTAL.includes(index),
          isBig: BIG.includes(index),
        };
      }),
    [images]
  );

  return (
    <div className="gallery-container">
      {galleryImages.map((image, index) => {
        return (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a
            onClick={(e) => {
              e.preventDefault();
              setIndex(index);
            }}
            key={`gallery-image-${image.id}`}
            alt={`Gallery image number ${index + 1}`}
            aria-label={`Gallery image number ${index + 1}`}
            className={cs({
              horizontal: image.isHorizontal,
              vertical: image.isVertical,
              big: image.isBig,
            })}
            href="#"
          >
            <LazyLoad>
              <div
                style={{ backgroundImage: `url("${image.thumbnailUrl}")` }}
              ></div>
            </LazyLoad>
          </a>
        );
      })}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={galleryImages}
      />
    </div>
  );
};

export default Gallery;
