<script setup lang="ts">
import Logo from "./Logo.vue";
import router from "../router/index.ts";
import HeaderMenu from "./HeaderMenu.vue";
import ThemeToggle from "./ThemeToggle.vue";
import { headerItems } from "../utils/constants";
</script>

<template>
  <div class="gt-sm q-ml-md">
    <Logo />
  </div>
  <div class="gt-sm row">
    <div v-for="item in headerItems" :key="item.id" class="q-mx-sm">
      <router-link v-if="item.type === 'button'" :to="item.route">
        <q-btn
          no-caps
          rounded
          unelevated
          size="large"
          :ripple="false"
          :label="item.label"
          class="header-btn-color"
          :flat="item.route !== router.currentRoute.value.path"
          :outline="item.route === router.currentRoute.value.path"
        />
      </router-link>
      <HeaderMenu v-else :item="item" />
    </div>
  </div>
  <div class="gt-sm q-mr-md">
    <ThemeToggle />
  </div>
</template>

<style scoped>
.header-btn-color {
  color: var(--q-fontColor);
}
</style>
