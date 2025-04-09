<script setup lang="ts">
import Logo from "./Logo.vue";
import router from "../router/index.ts";
import ThemeToggle from "./ThemeToggle.vue";
import { headerItems } from "../utils/constants";

//  Implicitly bind the v-model from the parent
let dialogModel = defineModel({ default: false });

// Events
const emit = defineEmits<{
  (e: "update-route", value: string | undefined): void;
}>();

// Navigate to section
async function handleNavigation(route: string | undefined) {
  dialogModel.value = false;
  emit("update-route", route);
}

// Scroll to top on logo click
function scrollToTop() {
  router.push("/");
  window.scrollTo(0, 0);
}
</script>

<template>
  <div class="lt-md full-width row justify-between q-px-sm">
    <q-btn flat round @click="scrollToTop">
      <Logo />
    </q-btn>
    <q-btn flat round @click="dialogModel = true" icon="fa fa-bars" />
  </div>
  <q-dialog class="lt-md" v-model="dialogModel">
    <q-card
      flat
      bordered
      class="q-pb-xl text-center"
      style="width: 90%; max-width: 400px"
    >
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn flat round dense icon="close" @click="dialogModel = false" />
      </q-card-section>
      <q-card-section v-for="item in headerItems" :key="item.id">
        <q-btn
          no-caps
          rounded
          @click="() => handleNavigation(item.route)"
          :flat="item.route !== router.currentRoute.value.path"
          :outline="item.route === router.currentRoute.value.path"
        >
          {{ item.label }}
        </q-btn>
      </q-card-section>
      <div class="q-mt-sm">
        <ThemeToggle />
      </div>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.no-style-link {
  text-decoration: none;
  color: inherit;
}
</style>
