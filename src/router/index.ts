import Home from "../pages/Home.vue";
import Unknown from "../pages/Unknown.vue";
import EquipmentRepair from "../pages/EquipmentRepair.vue";
import CustomFabrication from "../pages/CustomFabrication.vue";
import ResidentialWelding from "../pages/ResidentialWelding.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/custom-fabrication",
    name: "Custom Fabrication",
    component: CustomFabrication,
  },
  {
    path: "/equipment-repair",
    name: "Equipment Repair",
    component: EquipmentRepair,
  },
  {
    path: "/residential-welding",
    name: "Residential Welding",
    component: ResidentialWelding,
  },
  { path: "/:pathMatch(.*)*", name: "Unknown", component: Unknown },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 50,
      };
    }
  },
});

export default router;
