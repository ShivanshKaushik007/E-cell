export const galleryData = [
  {
    group: 1,
    id: 1,
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: {
      src1: "",
      alt1: "",
    },
  },
  {
    group: 1,
    id: 2,
    title: "Serene Lake",
    button: "Discover Now",
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: {
      src1: "",
      alt1: "",
    },
  },
  {
    group: 2,
    id: 3,
    title: "Golden Desert",
    button: "Explore the Sands",
    src: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: {
      src1: "",
      alt1: "",
    },
  },
  {
    group: 2,
    id: 4,
    title: "Starry Night",
    button: "See the Stars",
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img: {
      src1: "",
      alt1: "",
    },
  },
];

export const item = 4;

// galleryData.ts
export const productslst = galleryData.map(({ title, src, id }) => ({
  title,
  link: `/gallery/${id}`,   // NOTE: This is correct now for dynamic linking
  thumbnail: src,
}));
