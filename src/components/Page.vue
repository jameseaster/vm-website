<script setup lang="ts">
import { useQuasar } from "quasar";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import router from "../router/index.ts";
import { headerHeight } from "../utils/constants";

// use functions
const $q = useQuasar();

// helper functions
function backToTop() {
  router.push("/");
}
</script>

<template>
  <q-layout view="hHh lpr fFf" style="margin-top: -110px">
    <Header class="header" :style="`margin-top: -${headerHeight}px`" />
    <div class="page">
      <slot />
    </div>
    <Footer class="footer" />
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="$q.screen.gt.sm ? [25, 25] : [10, 10]"
    >
      <q-btn
        rounded
        no-caps
        label="Back to top"
        icon-right="keyboard_arrow_up"
        :color="$q.dark.isActive ? 'grey-9' : 'grey-4'"
        :text-color="$q.dark.isActive ? 'white' : 'dark'"
        @click="backToTop"
      />
    </q-page-scroller>
  </q-layout>
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
  background: var(--q-background);
}
</style>
