<script setup lang="ts">
import { ref } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Home from "../routes/Home.vue";
import HeroImage from "./HeroImage.vue";
import Gallery from "../routes/Gallery.vue";
import Contact from "../routes/Contact.vue";
import Services from "../routes/Services.vue";
import { headerHeight, headerItems } from "../utils/constants";

// Refs
const selected = ref(headerItems[0].id);

const logSelectedPage = ({ id }: { id: string }) => {
  selected.value = id;
};
</script>

<template>
  <HeroImage :selected="selected" />
  <Header
    class="header"
    :selected="selected"
    :style="`margin-top: -${headerHeight}px`"
    @selected-page-id="logSelectedPage"
  />

  <div class="page">
    <Home v-if="selected === 'home'" />
    <Services v-if="selected === 'services'" />
    <Gallery v-if="selected === 'gallery'" />
    <Contact v-if="selected === 'contact'" />
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
