<script setup lang="ts">
import { headerHeight, headerItems } from "../utils/constants";

const props = defineProps<{
  selected: string;
}>();

// Events
const emit = defineEmits<{
  (event: "selected-page-id", payload: { id: string }): void;
}>();

// Function handlers
const handleSelect = (id: string) => {
  emit("selected-page-id", { id });
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
        :class="props.selected === item.id && 'selected-btn'"
        @click="() => handleSelect(item.id)"
      />
    </div>
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
