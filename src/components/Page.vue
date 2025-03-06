<script setup lang="ts">
import { ref } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Home from "../routes/Home.vue";
import HeroImage from "./HeroImage.vue";
import ThemeToggle from "./ThemeToggle.vue";
import Gallery from "../routes/Gallery.vue";
import Contact from "../routes/Contact.vue";
import Services from "../routes/Services.vue";
import router from "../router/index.ts";
import { headerHeight, headerItems } from "../utils/constants";

// Refs
const selected = ref(headerItems[0].id);

const handleSelect = ({ id }: { id: string }) => {
  selected.value = id;
  const item = headerItems.find((item) => item.id === id);
  router.push(item.route);
};
</script>

<template>
  <Header
    class="header"
    :selected="selected"
    :style="`margin-top: -${headerHeight}px`"
    @page-select="handleSelect"
  />
  <HeroImage :selected="selected" />

  <div class="page">
    <slot />
  </div>
  <Footer class="footer" />
</template>

<style lang="scss" scoped>
.header {
  top: 0;
  position: sticky;
  padding-top: 8px;
  padding-bottom: 8px;
}
.page {
  width: 100vw;
  min-height: 75vh;
  overflow-x: hidden;
  position: relative;
}
.footer {
  background-color: $footer-background;
}
</style>
