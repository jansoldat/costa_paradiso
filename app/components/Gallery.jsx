import React, { useMemo } from "react";
import cs from "classnames";
import Lightbox from "yet-another-react-lightbox";
import LazyLoad from "react-lazy-load";

const VERTICAL = [2, 6, 24];
const HORIZONTAL = [3, 30, 33];
const BIG = [2, 11, 23, 35];

const THUMBNAIL_SOURCE = "https://res.cloudinary.com/dsnfelexc/image/upload/v1757961934/gallery/thumbnail/";
const SOURCE = "https://res.cloudinary.com/dsnfelexc/image/upload/v1757961919/gallery/gallery/";

const getImageUrls = () => {
  return [
    {
      id: "1",
      attributes: {
        url: `${SOURCE}gal_1_ncqzhf.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_1_ncqzhf.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_1_thumb_z6woz1.webp`,
          },
        },
      },
    },
    {
      id: "2",
      attributes: {
        url: `${SOURCE}gal_2_uqoo05.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_2_uqoo05.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_2_thumb_rfxyuw.webp`,
          },
        },
      },
    },
    {
      id: "3",
      attributes: {
        url: `${SOURCE}gal_3_hvvnho.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_3_hvvnho.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_3_thumb_qnb1q2.webp`,
          },
        },
      },
    },
    {
      id: "4",
      attributes: {
        url: `${SOURCE}gal_4_nsvvip.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_4_nsvvip.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_4_thumb_aamut5.webp`,
          },
        },
      },
    },
    {
      id: "5",
      attributes: {
        url: `${SOURCE}gal_5_yifyxt.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_5_yifyxt.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_5_thumb_udy2db.webp`,
          },
        },
      },
    },
    {
      id: "6",
      attributes: {
        url: `${SOURCE}gal_6_gjvanp.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_6_gjvanp.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_6_thumb_ttoayi.webp`,
          },
        },
      },
    },
    {
      id: "7",
      attributes: {
        url: `${SOURCE}gal_7_uc5bxi.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_7_uc5bxi.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_7_thumb_qdvuaz.webp`,
          },
        },
      },
    },
    {
      id: "8",
      attributes: {
        url: `${SOURCE}gal_8_p1plcl.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_8_p1plcl.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_8_thumb_l1s6z3.webp`,
          },
        },
      },
    },
    {
      id: "9",
      attributes: {
        url: `${SOURCE}gal_9_vq0rib.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_9_vq0rib.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_9_thumb_dvgcfe.webp`,
          },
        },
      },
    },
    {
      id: "10",
      attributes: {
        url: `${SOURCE}gal_10_budxi3.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_10_budxi3.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_10_thumb_spmkf0.webp`,
          },
        },
      },
    },
    {
      id: "11",
      attributes: {
        url: `${SOURCE}gal_11_qvk5zq.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_11_qvk5zq.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_11_thumb_bgpsvz.webp`,
          },
        },
      },
    },
    {
      id: "12",
      attributes: {
        url: `${SOURCE}gal_12_pismgo.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_12_pismgo.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_12_thumb_hox6zn.webp`,
          },
        },
      },
    },
    {
      id: "13",
      attributes: {
        url: `${SOURCE}gal_13_o1fegj.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_13_o1fegj.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_13_thumb_jpyoy7.webp`,
          },
        },
      },
    },
    {
      id: "14",
      attributes: {
        url: `${SOURCE}gal_14_nhylbb.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_14_nhylbb.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_14_thumb_kyqsmy.webp`,
          },
        },
      },
    },
    {
      id: "15",
      attributes: {
        url: `${SOURCE}gal_15_knxpoz.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_15_knxpoz.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_15_thumb_ukdmnq.webp`,
          },
        },
      },
    },
    {
      id: "16",
      attributes: {
        url: `${SOURCE}gal_16_fhxexq.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_16_fhxexq.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_16_thumb_e7cxhr.webp`,
          },
        },
      },
    },
    {
      id: "17",
      attributes: {
        url: `${SOURCE}gal_17_fco6ut.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_17_fco6ut.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_17_thumb_on5jtq.webp`,
          },
        },
      },
    },
    {
      id: "18",
      attributes: {
        url: `${SOURCE}gal_18_k0qfvs.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_18_k0qfvs.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_18_thumb_dw7unr.webp`,
          },
        },
      },
    },
    {
      id: "19",
      attributes: {
        url: `${SOURCE}gal_19_hhd4zk.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_19_hhd4zk.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_19_thumb_ofvven.webp`,
          },
        },
      },
    },
    {
      id: "20",
      attributes: {
        url: `${SOURCE}gal_20_gji7sy.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_20_gji7sy.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_20_thumb_lqecmx.webp`,
          },
        },
      },
    },
    {
      id: "21",
      attributes: {
        url: `${SOURCE}gal_21_nivm4i.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_21_nivm4i.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_21_thumb_dtdrpo.webp`,
          },
        },
      },
    },
    {
      id: "22",
      attributes: {
        url: `${SOURCE}gal_22_pxvcrc.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_22_pxvcrc.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_22_thumb_ullafs.webp`,
          },
        },
      },
    },
    {
      id: "23",
      attributes: {
        url: `${SOURCE}gal_23_c630tk.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_23_c630tk.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_23_thumb_gv5irn.webp`,
          },
        },
      },
    },
    {
      id: "24",
      attributes: {
        url: `${SOURCE}gal_24_uhmxt1.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_24_uhmxt1.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_24_thumb_mqsaz4.webp`,
          },
        },
      },
    },
    {
      id: "25",
      attributes: {
        url: `${SOURCE}gal_25_bwg30a.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_25_bwg30a.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_25_thumb_zrjxri.webp`,
          },
        },
      },
    },
    {
      id: "26",
      attributes: {
        url: `${SOURCE}gal_26_ufhjg2.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_26_ufhjg2.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_26_thumb_pmjo9a.webp`,
          },
        },
      },
    },
    {
      id: "27",
      attributes: {
        url: `${SOURCE}gal_27_avwbrc.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_27_avwbrc.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_27_thumb_zhtlmy.webp`,
          },
        },
      },
    },
    {
      id: "28",
      attributes: {
        url: `${SOURCE}gal_28_dj7sxy.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_28_dj7sxy.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_28_thumb_o0ptko.webp`,
          },
        },
      },
    },
    {
      id: "29",
      attributes: {
        url: `${SOURCE}gal_29_g4lehk.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_29_g4lehk.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_29_thumb_jj8jcv.webp`,
          },
        },
      },
    },
    {
      id: "30",
      attributes: {
        url: `${SOURCE}gal_30_cyp31d.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_30_cyp31d.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_30_thumb_v7nqzh.webp`,
          },
        },
      },
    },
    {
      id: "31",
      attributes: {
        url: `${SOURCE}gal_31_xmmuyy.webp`,
        formats: {
          medium: {
            url: `${SOURCE}gal_31_xmmuyy.webp`,
          },
          thumbnail: {
            url: `${THUMBNAIL_SOURCE}gal_31_thumb_cynsf1.webp`,
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
