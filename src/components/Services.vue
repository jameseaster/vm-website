<script setup lang="ts">
import { reactive } from "vue";
import { services } from "../utils/constants.ts";
import AnimatedItem from "../components/AnimatedItem.vue";

const expanded = reactive({
  1: false,
  2: false,
  3: false,
});
</script>

<template>
  <div
    id="services"
    style="min-height: 100vh; margin-bottom: 10vh"
    class="flex column items-center justify-center"
  >
    <div class="text-h4 q-py-md">{{ services.title }}</div>
    <div class="row justify-center" style="max-width: 1200px">
      <div
        v-for="(card, index) in services.cards"
        :key="card.id"
        :id="card.id"
        class="q-pa-md col-sm-6 col-12"
      >
        <AnimatedItem direction="left" :delay="100">
          <q-card class="my-card">
            <q-img :src="card.img">
              <div class="absolute-bottom text-h5">{{ card.title }}</div>
            </q-img>
            <q-card-section>
              <div class="text-h6">
                {{ card.description }}
              </div>
            </q-card-section>
            <q-card-actions>
              <q-space />
              <q-btn
                flat
                dense
                color="grey"
                label="More Info"
                rounded
                no-caps
                :icon-right="
                  expanded[index] ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                "
                @click="expanded[index] = !expanded[index]"
              />
            </q-card-actions>
            <q-slide-transition>
              <div v-show="expanded[index]">
                <q-card-section class="text-subtitle2">
                  {{ card.moreDetails }}
                </q-card-section>
              </div>
            </q-slide-transition>
          </q-card>
        </AnimatedItem>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-card {
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}
</style>
