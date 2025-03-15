import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Unknown from "../pages/Unknown.vue";
import Gallery from "../pages/Gallery.vue";
import Services from "../pages/Services.vue";
import EquipmentRepair from "../pages/EquipmentRepair.vue";
import CustomFabrication from "../pages/CustomFabrication.vue";
import ResidentialWelding from "../pages/ResidentialWelding.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/services", name: "Services", component: Services },
  { path: "/services/custom-fabrication", name: "Custom Fabrication", component: CustomFabrication },
  { path: "/services/equipment-repair", name: "Equipment Repair", component: EquipmentRepair },
  { path: "/services/residential-welding", name: "Residential Welding", component: ResidentialWelding },
  { path: "/contact", name: "Contact", component: Contact },
  { path: '/:pathMatch(.*)*', name: "Unknown", component: Unknown },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
