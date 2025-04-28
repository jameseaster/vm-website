<script setup lang="ts">
import Carousel from "../components/Carousel.vue";
import AnimatedItem from "../components/AnimatedItem.vue";
</script>

<template>
  <div
    id="gallery"
    style="min-height: 100vh"
    class="flex column items-center q-py-xl"
  >
    <div class="text-h4 q-pq-xl">Gallery</div>
    <div style="width: 100%; max-width: 1000px">
      <AnimatedItem direction="below" :delay="175">
        <Carousel />
      </AnimatedItem>
    </div>
  </div>
</template>

<style scoped></style>
