export const headerItems = [
  {
    id: "home",
    route: '/',
    label: "Home",
    image: new URL("../assets/mock-welding-photo.jpeg", import.meta.url).href,
  },
  {
    id: "services",
    route: "/services",
    label: "Services",
    image: new URL("../assets/deck.png", import.meta.url).href,

  },
  {
    id: "gallery",
    route: "/gallery",
    label: "Gallery",
    image: new URL("../assets/stairs.png", import.meta.url).href,
  },
  {
    id: "contact",
    route: "/contact",
    label: "Contact",
    image: new URL("../assets/house.png", import.meta.url).href,
  },
];

export const headerHeight = 60;
