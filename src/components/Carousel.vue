<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";
import { galleryImages } from "../utils/constants.ts";

// refs
const slide = ref(0);
const autoplay = ref(5000);

// use hooks
const $q = useQuasar();
</script>

<template>
  <div class="q-pa-md">
    <q-card>
      <q-carousel
        v-model="slide"
        animated
        infinite
        navigation
        :autoplay="autoplay"
        :dark="$q.dark.isActive"
        style="height: 800px; max-height: 75vh"
        @mouseenter="autoplay = 0"
        @mouseleave="autoplay = 5000"
      >
        <q-carousel-slide
          v-for="(image, index) in galleryImages"
          :key="image"
          :name="index"
          :img-src="image"
        >
          <div
            class="absolute-bottom"
            style="
              width: 100%;
              height: 10%;
              background-color: rgba(0, 0, 0, 0.5);
            "
          ></div>
        </q-carousel-slide>
      </q-carousel>
    </q-card>
  </div>
</template>

<style scoped></style>
