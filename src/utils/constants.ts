export const headerHeight = 65;

export const headerItems = [
  {
    id: "home",
    type: 'button',
    route: '/',
    label: "Home",
    image: new URL("../assets/mock-welding-photo.jpeg", import.meta.url).href,
    children: []
  },
  {
    id: "services",
    type: 'menu',
    route: "/services",
    label: "Services",
    image: new URL("../assets/deck.png", import.meta.url).href,
    children: [
      {
        id: "custom-fabrication",
        type: "menu-item",
        label: "Custom Fabrication",
        route: "/services/custom-fabrication",
        image: new URL("../assets/deck.png", import.meta.url).href,
        children: []
      },
      {
        id: "equipment-repair",
        type: "menu-item",
        label: "Equipment Repair",
        route: "/services/equipment-repair",
        image: new URL("../assets/mock-welding-photo.jpeg", import.meta.url).href,
        children: []
      },
      {
        id: "residential-welding",
        type: "menu-item",
        label: "Residential Welding",
        route: "/services/residential-welding",
        image: new URL("../assets/stairs.png", import.meta.url).href,
        children: []
      },
    ]
  },
  {
    id: "gallery",
    type: 'button',
    route: "/gallery",
    label: "Gallery",
    image: new URL("../assets/stairs.png", import.meta.url).href,
    children: []
  },
  {
    id: "contact",
    type: 'button',
    route: "/contact",
    label: "Contact",
    image: new URL("../assets/house.png", import.meta.url).href,
    children: []
  },
];
