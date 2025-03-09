<script setup lang="ts">
import Logo from "./Logo.vue";
import { ref, onMounted } from "vue";
import router from "../router/index.ts";
import ThemeToggle from "./ThemeToggle.vue";
import MobileHeader from "./MobileHeader.vue";
import DesktopHeader from "./DesktopHeader.vue";
import { headerHeight, headerItems } from "../utils/constants";

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
  background-color: rgba(40, 40, 40, 0.8);
  z-index: 1;
}
</style>
