export const headerHeight = 65;

export const galleryImages = [
  new URL("../assets/gallery/IMG_0247.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_0757.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1161.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1192.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_0219.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_0220.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1306.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1308.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1440.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1590.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1902.png", import.meta.url).href,
];

export const headerItems = [
  {
    id: "services",
    type: "menu",
    route: "/#services",
    label: "Services",
    // image: new URL("../assets/deck.png", import.meta.url).href,
    children: [
      {
        id: "all",
        type: "menu-item",
        label: "All Services",
        route: "/#services",
        // image: new URL("../assets/deck.png", import.meta.url).href,
        children: [],
      },
      {
        id: "custom-fabrication",
        type: "menu-item",
        label: "Custom Fabrication",
        route: "/#custom-fabrication",
        // image: new URL("../assets/deck.png", import.meta.url).href,
        children: [],
      },
      {
        id: "equipment-repair",
        type: "menu-item",
        label: "Equipment Repair",
        route: "/#equipment-repair",
        // image: new URL("../assets/mock-welding-photo.jpeg", import.meta.url).href,
        children: [],
      },
      {
        id: "residential-welding",
        type: "menu-item",
        label: "Residential Welding",
        route: "/#residential-welding",
        // image: new URL("../assets/stairs.png", import.meta.url).href,
        children: [],
      },
    ],
  },
  {
    id: "gallery",
    type: "button",
    route: "/#gallery",
    label: "Gallery",
    // image: new URL("../assets/stairs.png", import.meta.url).href,
    children: [],
  },
  {
    id: "contact",
    type: "button",
    route: "/#contact",
    label: "Contact",
    // image: new URL("../assets/house.png", import.meta.url).href,
    children: [],
  },
];

export const text = {
  homeInfo: {
    paragraphs: [
      "Aluminum TIG welding, stainless steel TIG welding, mild steel TIG welding, mild steel MIG welding.",
      "Custom exhaust, Custom intakes, Hand rails, Repair work Trailer, modifications, General welding and fabrication.",
      "You dream it, I make it. Give me a call today for a free estimate!",
    ],
  },
};

const service1 = new URL("../assets/gate.png", import.meta.url).href;
const service2 = new URL("../assets/house.png", import.meta.url).href;
const service3 = new URL("../assets/deck.png", import.meta.url).href;

export const services = {
  title: "Welding & Fabrication Services",
  cards: [
    {
      id: "residential-welding",
      img: service1,
      title: "Residential Welding",
      description:
        "Custom handrails and metalwork, built to fit your home with strength, style, and precision.",
    },
    {
      id: "equipment-repair",
      img: service2,
      title: "Equipment Repair",
      description:
        "Repairs for heavy equipment, trailers, excavators, and more with strong, dependable welding that lasts.",
    },
    {
      id: "custom-fabrication",
      img: service3,
      title: "Custom Fabrication",
      description:
        "Custom metal fabrication for projects big and small — from handrails and brackets to specialty parts, built exactly to your specs.",
    },
  ],
};

