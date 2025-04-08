<script setup lang="ts">
import { ref } from "vue";
import { galleryImages } from "../utils/constants.ts";

const slide = ref(0);
const autoplay = ref(3000);
</script>

<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      arrows
      animated
      navigation
      infinite
      :autoplay="autoplay"
      style="height: 800px; max-height: 75vh"
      @mouseenter="autoplay = 0"
      @mouseleave="autoplay = 3000"
    >
      <q-carousel-slide
        v-for="(image, index) in galleryImages"
        :key="image"
        :name="index"
        :img-src="image"
      />
    </q-carousel>
  </div>
</template>

<style scoped></style>
