<script setup lang="ts">
import { onMounted } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import { headerHeight } from "../utils/constants";

// Scroll to top on page change
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <Header class="header" :style="`margin-top: -${headerHeight}px`" />
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
  overflow-x: hidden;
  position: relative;
}
</style>
