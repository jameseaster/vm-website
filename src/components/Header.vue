<script setup lang="ts">
import { ref } from "vue";
import MobileHeader from "./MobileHeader.vue";
import DesktopHeader from "./DesktopHeader.vue";
import { headerHeight } from "../utils/constants";

// Refs
const mobileMenu = ref(false);
</script>

<template>
  <div
    :style="`height: ${headerHeight}px`"
    class="row full-width justify-between items-center header-container"
  >
    <DesktopHeader />
    <MobileHeader
      :mobileMenu="mobileMenu"
      @toggle-menu="mobileMenu = !mobileMenu"
    />
  </div>
</template>

<style scoped>
.header-container {
  background-color: var(--q-headerBackground);
  z-index: 1;
}
</style>
