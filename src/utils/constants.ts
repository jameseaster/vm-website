export const headerHeight = 65;

export const galleryImages = [
  new URL("../assets/gallery/IMG_0247.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_0220.png", import.meta.url).href,
  new URL("../assets/gallery/deck.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1308.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1306.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1161.png", import.meta.url).href,
  new URL("../assets/gallery/house.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_0219.png", import.meta.url).href,
  new URL("../assets/gallery/gate.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1440.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1590.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1192.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_1902.png", import.meta.url).href,
  new URL("../assets/gallery/IMG_0757.png", import.meta.url).href,
];

export const headerItems = [
  {
    id: "reviews",
    type: "button",
    route: "/#reviews",
    label: "Reviews",
    children: [],
  },
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
        id: "residential-welding",
        type: "menu-item",
        label: "Residential Welding",
        route: "/#residential-welding",
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
        id: "custom-fabrication",
        type: "menu-item",
        label: "Custom Fabrication",
        route: "/#custom-fabrication",
        children: [],
      },
    ],
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

const service1 = new URL("../assets/gallery/IMG_0247.png", import.meta.url)
  .href;
const service2 = new URL("../assets/gallery/house.png", import.meta.url).href;
const service3 = new URL("../assets/gallery/IMG_0220.png", import.meta.url)
  .href;

export const services = {
  title: "Our Services",
  cards: [
    {
      id: "residential-welding",
      img: service1,
      title: "Residential Welding",
      description:
        "Custom handrails and metalwork, built to fit your home with strength, style, and precision.",
      // TODO: Add more details as learned from the client
      moreDetails: "",
    },
    {
      id: "equipment-repair",
      img: service2,
      title: "Equipment Repair",
      description:
        "Repairs for heavy equipment, trailers, excavators, and more with strong, dependable welding that lasts.",
      // TODO: Add more details as learned from the client
      moreDetails: "",
    },
    {
      id: "custom-fabrication",
      img: service3,
      title: "Custom Fabrication",
      description:
        "Custom metal fabrication for projects big and small — from handrails and brackets to specialty parts, built exactly to your specs.",
      // TODO: Add more details as learned from the client
      moreDetails: "",
    },
  ],
};

export const aboutUs = {
  text: `We are locally based in Colorado Springs, and proudly serve Colorado Springs,
      Denver, and Pueblo areas. Whether you need sleek, modern stair rails for
      your home, on-site mobile welding, or help fixing industrial equipment, we
      bring skilled craftsmanship and reliable service to every job. From custom
      residential work to tough industrial repairs, we're here to get it done
      right.`,
  reviews: [
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
  ],
};

export const contactInfo = {
  email: "vmfabrication@outlook.com",
  phone: "(719) 987-6543",
  hours: "M-F 8am-5pm",
};

export const links = {
  facebook: "https://www.facebook.com/profile.php?id=100072490594696",
  instagram: "https://www.instagram.com/vmweldingandfab/",
  google:
    "https://www.google.com/maps/place/VM+Welding+and+Fabrication+LLC/@38.8382793,-104.7644498,1080m/data=!3m2!1e3!4b1!4m6!3m5!1s0x23b9e840c81d0eb9:0xac873e6922bc85c7!8m2!3d38.8382793!4d-104.7644498!16s%2Fg%2F11p60pmff_?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D",
};
