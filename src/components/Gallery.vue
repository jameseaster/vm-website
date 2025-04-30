<script setup lang="ts">
import Carousel from "../components/Carousel.vue";
import AnimatedItem from "../components/AnimatedItem.vue";
</script>

<template>
  <div id="gallery" class="flex column items-center q-my-xl">
    <div class="text-h4 q-pq-xl">Project Gallery</div>
    <div style="width: 100%; max-width: 1200px">
      <AnimatedItem direction="right" :delay="50">
        <Carousel />
      </AnimatedItem>
    </div>
  </div>
</template>

<style scoped></style>
