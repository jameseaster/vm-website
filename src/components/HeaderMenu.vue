<script setup lang="ts">
import { ref } from "vue";
import router from "../router/index.ts";

// Props
const props = defineProps({
  item: {
    type: Object,
    default: () => {},
  },
});

// Refs
const hover = ref(false);
const menuOpen = ref(false);
const timeoutId = ref<NodeJS.Timeout | undefined>(undefined);

// Helper functions
function openMenu() {
  clearTimeout(timeoutId.value);
  hover.value = true;
  menuOpen.value = true;
}

function closeMenu() {
  hover.value = false;
  timeoutId.value = setTimeout(() => {
    menuOpen.value = false;
  }, 250);
}

function keepMenuOpen() {
  clearTimeout(timeoutId.value);
  hover.value = true;
  menuOpen.value = true;
}

const isCurrentRoute = (route: string) => {
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
    @mouseover="openMenu"
    @mouseleave="closeMenu"
    class="header-btn-color"
    :label="props.item.label"
    @click="router.push(item.route)"
    :flat="!isCurrentRoute(props.item.route)"
    :outline="isCurrentRoute(props.item.route)"
  >
    <q-menu v-model="menuOpen">
      <q-list @mouseleave="closeMenu" @mouseover="keepMenuOpen">
        <router-link
          v-for="child in props.item.children"
          :key="child.label"
          class="menu-items"
          :to="child.route"
          :class="isCurrentRoute(child.route) && 'underline'"
        >
          <q-item clickable class="q-pr-xl">
            {{ child.label }}
          </q-item>
        </router-link>
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
