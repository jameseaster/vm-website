<script setup lang="ts">
import { ref } from "vue";
import router from "../router/index.ts";
import MobileHeader from "./MobileHeader.vue";
import DesktopHeader from "./DesktopHeader.vue";
import { headerHeight } from "../utils/constants";

// Refs
const mobileMenu = ref(false);

// helper functions
function handleMobileNavigation(route: string | undefined) {
  if (route) {
    router.replace(route);
  }
}
</script>

<template>
  <div
    :style="`height: ${headerHeight}px`"
    class="row full-width justify-between items-center header-container"
  >
    <DesktopHeader />
    <MobileHeader
      v-model="mobileMenu"
      @update-route="(route:string | undefined) => handleMobileNavigation(route)"
    />
  </div>
</template>

<style scoped>
.header-container {
  background-color: var(--q-headerBackground);
  z-index: 1;
}
</style>
