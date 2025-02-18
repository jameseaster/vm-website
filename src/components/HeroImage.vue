<script setup lang="ts">
import { computed } from "vue";
import { headerItems } from "../utils/constants";

const props = defineProps<{
  selected: string;
}>();

const image = computed(() => {
  const item = headerItems.find((item) => item.id === props.selected);
  return item?.image || "";
});
</script>

<template>
  <div
    class="parallax flex column"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div
      class="text-white text-h1 text-bold"
      style="padding-top: 0.5rem; padding-bottom: 0.5rem; opacity: 0.7"
    >
      VM Fab & Welding
    </div>
    <slot />
  </div>
</template>

<style scoped>
.parallax {
  /* Set a specific height */
  min-height: 70vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
