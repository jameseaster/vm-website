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
    children: [
      {
        id: "all",
        type: "menu-item",
        label: "All Services",
        route: "/#services",
        children: [],
      },
      {
        id: "custom-fabrication",
        type: "menu-item",
        label: "Custom Fabrication",
        route: "/#custom-fabrication",
        children: [],
      },
      {
        id: "equipment-repair",
        type: "menu-item",
        label: "Equipment Repair",
        route: "/#equipment-repair",
        children: [],
      },
      {
        id: "residential-welding",
        type: "menu-item",
        label: "Residential Welding",
        route: "/#residential-welding",
        children: [],
      },
    ],
  },
  {
    id: "reviews",
    type: "button",
    route: "/#reviews",
    label: "Reviews",
    children: [],
  },
  {
    id: "gallery",
    type: "button",
    route: "/#gallery",
    label: "Gallery",
    children: [],
  },
  {
    id: "contact",
    type: "button",
    route: "/#contact",
    label: "Contact",
    children: [],
  },
];

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
      moreDetails:
        "Ad labore elit ut elit. Esse qui excepteur voluptate sunt minim. Fugiat officia id esse laboris nisi minim laborum nisi et adipisicing adipisicing. Excepteur mollit consequat dolore nostrud occaecat non laboris amet voluptate labore ad eiusmod qui eiusmod. Excepteur cillum cillum mollit minim sint amet consequat cillum nulla ad ut tempor. Qui eu proident reprehenderit nostrud sunt duis aliqua nulla tempor esse aliquip.",
    },
    {
      id: "equipment-repair",
      img: service2,
      title: "Equipment Repair",
      description:
        "Repairs for heavy equipment, trailers, excavators, and more with strong, dependable welding that lasts.",
      moreDetails:
        "Ipsum occaecat sint cillum Lorem aliqua proident nostrud est in irure sunt. Officia incididunt mollit enim duis consectetur aute magna in. Pariatur ea duis ex cillum reprehenderit esse elit consectetur consectetur dolor. Ea irure ad laborum incididunt. Lorem tempor ullamco ut laboris est veniam. Tempor nisi laboris exercitation exercitation tempor elit magna irure adipisicing.",
    },
    {
      id: "custom-fabrication",
      img: service3,
      title: "Custom Fabrication",
      description:
        "Custom metal fabrication for projects big and small — from handrails and brackets to specialty parts, built exactly to your specs.",
      moreDetails:
        "Dolore ex minim esse non adipisicing. Mollit proident quis duis eiusmod exercitation laborum anim minim ea do. Velit consectetur reprehenderit id labore fugiat anim sint magna reprehenderit reprehenderit eu consequat veniam anim. Reprehenderit velit officia voluptate dolore reprehenderit proident sint aute Lorem est ullamco. Tempor ad adipisicing amet elit nostrud. Ea laboris velit do in ea esse Lorem voluptate labore aliquip mollit reprehenderit enim qui. Incididunt veniam voluptate cillum qui occaecat ea sit ex consequat velit dolore nulla ad.",
    },
  ],
};

export const reviews = [
  {
    text: "Helped in pinch to weld a tab on trailer hitch so I don't end up being on someone traffic cam video to YouTube!",
    author: "Christopher Maxwell",
    stars: 5,
  },
  {
    text: "VM Welding is an absolute pleasure to work with. Was able to get my work completed sooner than anticipated, pricing was very fair and the quality was amazing...",
    author: "Cameren Fouche",
    stars: 5,
  },
  {
    text: "Amazing quality & great communication; a local gem. If you need welding or fabrication work, call these guys.",
    author: "James Easter",
    stars: 5,
  },
  {
    text: "...These guys have become my go to shop from now on for anything that needs to be welded or fabricated. I would highly recommend working with them!",
    author: "Nikos Pulos",
    stars: 5,
  },
  { text: "", author: "Etheena Griego", stars: 5 },
];
