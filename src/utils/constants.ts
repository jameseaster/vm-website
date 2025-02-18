import welder from "../assets/mock-welding-photo.jpeg"
import deck from "../assets/deck.png"
import house from "../assets/house.png"
import stairs from "../assets/stairs.png"

export const headerItems = [
  { id: "home", label: "Home", image: welder, children: [] },
  { id: "services", label: "Services", image: deck, children: [] },
  { id: "gallery", label: "Gallery", image: house, children: [] },
  { id: "contact", label: "Contact", image: stairs, children: [] },
];

export const headerHeight = 75;
