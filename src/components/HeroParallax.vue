<script setup lang="ts">
// import router from "../router/index.ts";
// import { headerItems } from "../utils/constants.ts";
import { ref, onMounted, onUnmounted /* computed */ } from "vue";

// Refs
const background = ref<HTMLElement | null>(null);
const foreground = ref<HTMLElement | null>(null);

// Change image based on current path
// const backgroundUrl = computed(() => {
//   const path = router.currentRoute.value.path;
//   const allItems = [
//     ...headerItems,
//     ...headerItems.flatMap((item) => item.children),
//   ];
//   const item = allItems.find(({ route }) => route === path);
//   return (
//     item?.image || new URL("../assets/movie.MOV", import.meta.url).href
//     // For Images
//     // new URL("../assets/mock-welding-photo.jpeg", import.meta.url).href
//   );
// });

const handleScroll = () => {
  const scrollPosition = window.scrollY;

  // Parallax effect strength
  const backgroundSpeed = 0.6;
  const foregroundSpeed = 0.15;

  // Update element positions
  if (background.value) {
    background.value.style.transform = `translateY(${
      scrollPosition * backgroundSpeed
    }px)`;
  }
  if (foreground.value) {
    foreground.value.style.transform = `translateY(${
      scrollPosition * foregroundSpeed
    }px)`;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="parallax-container">
    <!-- For Images -->
    <!-- <div
      ref="background"
      class="parallax-layer background"
      :style="{ '--background-url': `url('${backgroundUrl}')` }"
    /> -->
    <video
      muted
      loop
      autoplay
      playsinline
      ref="background"
      class="parallax-layer background"
    >
      <source src="../assets/movie.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="parallax-layer foreground" ref="foreground">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.parallax-container {
  position: relative;
  height: 100vh;
  min-height: 700px;
  overflow-x: hidden;
  overflow-y: hidden;
  perspective: 1px;
  transform-style: preserve-3d;
}
.parallax-layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.background {
  user-select: none;
  background-image: var(--background-url);
  width: 100vw;
  object-fit: contain;
  transform: translateZ(-1px) scale(2);
}
.foreground {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 700px;
  z-index: 1;
  color: white;
}
</style>
