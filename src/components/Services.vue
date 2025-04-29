<script setup lang="ts">
import { services } from "../utils/constants.ts";
import AnimatedItem from "../components/AnimatedItem.vue";
</script>

<template>
  <div
    id="services"
    style="min-height: 100vh; margin-bottom: 10vh"
    class="flex column items-center justify-center q-pa-xl"
  >
    <div class="text-h4 q-py-md">{{ services.title }}</div>
    <div class="row justify-center">
      <div
        v-for="card in services.cards"
        :key="card.id"
        :id="card.id"
        class="q-pa-md col-md-6 col-12"
      >
        <AnimatedItem direction="left" :delay="100">
          <q-card class="cursor-pointer q-hoverable">
            <q-img :src="card.img">
              <div class="absolute-bottom text-h5">{{ card.title }}</div>
            </q-img>
            <q-card-section>
              <div class="text-h6">
                {{ card.description }}
              </div>
            </q-card-section>
          </q-card>
        </AnimatedItem>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
