<script setup lang="ts">
import Logo from "./Logo.vue";
import { ref, computed } from "vue";
import router from "../router/index.ts";
import ThemeToggle from "./ThemeToggle.vue";
import { headerItems } from "../utils/constants";

// Props
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});

let timeoutId;
const hover = ref(false);
const menuOpen = ref(false);

function openMenu() {
  clearTimeout(timeoutId);
  hover.value = true;
  menuOpen.value = true;
}

function closeMenu() {
  hover.value = false;
  timeoutId = setTimeout(() => {
    menuOpen.value = false;
  }, 250);
}

function keepMenuOpen() {
  clearTimeout(timeoutId);
  hover.value = true;
  menuOpen.value = true;
}

const isCurrentRoute = (route) => {
  return router.currentRoute.value.path.includes(route);
};
</script>

<template>
  <q-btn
    no-caps
    rounded
    unelevated
    size="large"
    :ripple="false"
    :label="item.label"
    @mouseover="openMenu"
    @mouseleave="closeMenu"
    :flat="!isCurrentRoute(item.route)"
    :outline="isCurrentRoute(item.route)"
    class="header-btn-color"
  >
    <q-menu v-model="menuOpen">
      <q-list @mouseleave="closeMenu" @mouseover="keepMenuOpen">
        <q-item
          clickable
          class="q-pr-xl"
          :key="child.label"
          v-for="child in item.children"
        >
          <q-item-section>
            <router-link
              class="menu-items"
              :class="isCurrentRoute(child.route) && 'underline'"
              :to="child.route"
            >
              {{ child.label }}
            </router-link>
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<style scoped>
.header-btn-color {
  color: var(--q-fontColor);
}
.menu-items {
  color: var(--q-fontColor);
  text-decoration: inherit;
  color: inherit;
  font-size: 18px;
}
.underline {
  text-decoration: underline;
  text-underline-offset: 8px;
}
</style>
