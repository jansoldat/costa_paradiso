// Example beach item with image
export const beachWithImage = {
  id: "1",
  name: "Costa Paradiso Beach",
  category: "Main Beach",
  description:
    "Beautiful main beach with crystal clear waters and stunning views. Perfect for swimming and sunbathing.",
  imageUrl:
    "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/gimg_1_jpg_e55c3feb5b.webp",
  image: {
    data: {
      id: "img_1",
      attributes: {
        url: "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/gimg_1_jpg_e55c3feb5b.webp",
        formats: {
          large: {
            url: "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/large_gimg_1_jpg_e55c3feb5b.webp",
          },
          medium: {
            url: "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/medium_gimg_1_jpg_e55c3feb5b.webp",
          },
          thumbnail: {
            url: "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/thumbnail_gimg_1_jpg_e55c3feb5b.webp",
          },
        },
      },
    },
  },
};

// Example beach item without image (will use SVG fallback)
export const beachWithoutImage = {
  id: "2",
  name: "Hidden Cove",
  category: "Secret Spot",
  description:
    "A mysterious hidden cove that's only accessible during low tide. Adventure awaits!",
  imageUrl: null,
  image: null,
};

// Example of how these would be used in the BeachList component
export const exampleBeachCollection = [
  beachWithImage,
  beachWithoutImage,
  {
    id: "3",
    name: "Li Cossi Beach",
    category: "Family Beach",
    description:
      "Family-friendly beach with shallow waters and nearby amenities.",
    imageUrl:
      "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/gimg_2_jpg_e2f39af0e5.webp",
    image: {
      data: {
        id: "img_2",
        attributes: {
          url: "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/gimg_2_jpg_e2f39af0e5.webp",
          formats: {
            medium: {
              url: "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/medium_gimg_2_jpg_e2f39af0e5.webp",
            },
            thumbnail: {
              url: "https://res.cloudinary.com/dsnfelexc/image/upload/v1682857704/thumbnail_gimg_2_jpg_e2f39af0e5.webp",
            },
          },
        },
      },
    },
  },
  {
    id: "4",
    name: "Coming Soon Beach",
    category: "Future Destination",
    description:
      "This amazing beach will be featured soon. Stay tuned for more information!",
    imageUrl: undefined, // This will also trigger SVG fallback
    image: {
      data: null,
    },
  },
];
