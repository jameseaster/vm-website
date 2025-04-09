<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";

const props = defineProps<{
  direction?: "left" | "right" | "above" | "below";
  delay?: number; // in milliseconds
}>();

const direction = props.direction ?? "left";
const delay = props.delay ?? 0;

const animatedItem = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const directionClass = computed(() => {
  switch (direction) {
    case "right":
      return "from-right";
    case "above":
      return "from-above";
    case "below":
      return "from-below";
    case "left":
    default:
      return "from-left";
  }
});

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        isVisible.value = true;
      }, delay);
      observer.disconnect();
    }
  });

  if (animatedItem.value) {
    observer.observe(animatedItem.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div
    ref="animatedItem"
    :class="['slide-fade-item', directionClass, { 'in-view': isVisible }]"
    :style="{ transitionDelay: `${delay}ms` }"
  >
    <slot />
  </div>
</template>

<style scoped>
.slide-fade-item {
  opacity: 0;
  transition: all 0.6s ease-out;
}

.from-left {
  transform: translateX(-50px);
}

.from-right {
  transform: translateX(50px);
}

.from-above {
  transform: translateY(-50px);
}

.from-below {
  transform: translateY(50px);
}

.in-view {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
