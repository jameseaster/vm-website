<script setup lang="ts">
import { text } from "../utils/constants.ts";
import Reviews from "../components/Reviews.vue";
import AnimatedItem from "../components/AnimatedItem.vue";
</script>

<template>
  <div
    id="intro"
    class="flex column items-center q-pt-xl"
    style="min-height: 100vh"
  >
    <div class="text-h4 q-pq-xl">Who We Are</div>
    <div class="text-body1 q-py-xl" style="width: 50vw">
      <AnimatedItem direction="right" :delay="50">
        <q-card style="min-height: 400px">
          <q-card-section
            v-for="content in text.homeInfo.paragraphs"
            :key="content"
          >
            <div class="q-my-md text-h6">
              {{ content }}
            </div>
          </q-card-section>
        </q-card>
      </AnimatedItem>
    </div>
    <Reviews />
  </div>
</template>

<style scoped></style>
