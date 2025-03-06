import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Unknown from "../pages/Unknown.vue";
import Gallery from "../pages/Gallery.vue";
import Services from "../pages/Services.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  { path: "/gallery", name: "Gallery", component: Gallery },
  { path: "/Services", name: "Services", component: Services },
  { path: "/contact", name: "Contact", component: Contact },
  { path: '/:pathMatch(.*)*', name: "Unknown", component: Unknown },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
