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
    type: 'menu',
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
        children: []
      },
      {
        id: "custom-fabrication",
        type: "menu-item",
        label: "Custom Fabrication",
        route: "/#custom-fabrication",
        // image: new URL("../assets/deck.png", import.meta.url).href,
        children: []
      },
      {
        id: "equipment-repair",
        type: "menu-item",
        label: "Equipment Repair",
        route: "/#equipment-repair",
        // image: new URL("../assets/mock-welding-photo.jpeg", import.meta.url).href,
        children: []
      },
      {
        id: "residential-welding",
        type: "menu-item",
        label: "Residential Welding",
        route: "/#residential-welding",
        // image: new URL("../assets/stairs.png", import.meta.url).href,
        children: []
      },
    ]
  },
  {
    id: "gallery",
    type: 'button',
    route: "/#gallery",
    label: "Gallery",
    // image: new URL("../assets/stairs.png", import.meta.url).href,
    children: []
  },
  {
    id: "contact",
    type: 'button',
    route: "/#contact",
    label: "Contact",
    // image: new URL("../assets/house.png", import.meta.url).href,
    children: []
  },
];
