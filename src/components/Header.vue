<script setup lang="ts">
import { ref, onMounted } from "vue";
import router from "../router/index.ts";
import ThemeToggle from "./ThemeToggle.vue";
import { headerHeight, headerItems } from "../utils/constants";

// Refs
const selected = ref("");

// Lifecycle hooks
onMounted(() => {
  selected.value = router.currentRoute.value.path;
});

// Events
const emit = defineEmits<{
  (event: "page-select", payload: { id: string }): void;
}>();

// Function handlers
const handleSelect = (id: string) => {
  emit("page-select", { id });
};
</script>

<template>
  <div
    class="row full-width justify-center header-container"
    :style="`height: ${headerHeight}px`"
  >
    <div v-for="item in headerItems" :key="item.id" class="q-ma-sm">
      <q-btn
        flat
        no-caps
        rounded
        unelevated
        size="large"
        :ripple="false"
        color="white"
        :label="item.label"
        :class="selected === item.route && 'selected-btn'"
        @click="() => handleSelect(item.id)"
      />
    </div>

    <ThemeToggle />
  </div>
</template>

<style scoped>
.selected-btn {
  border: 1px solid #aaaaaa;
}
.header-container {
  background-color: rgba(40, 40, 40, 0.8);
  z-index: 1;
}
</style>
