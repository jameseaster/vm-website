import deck from "../assets/deck.png"
import house from "../assets/house.png"
import stairs from "../assets/stairs.png"
import welder from "../assets/mock-welding-photo.jpeg"

export const headerItems = [
  {
    id: "home",
    route: '/',
    label: "Home",
    image: welder
  },
  {
    id: "services",
    route: "/services",
    label: "Services",
    image: deck
  },
  {
    id: "gallery",
    route: "/gallery",
    label: "Gallery",
    image: house
  },
  {
    id: "contact",
    route: "/contact",
    label: "Contact",
    image: stairs
  },
];

export const headerHeight = 75;
