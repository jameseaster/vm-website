<script setup lang="ts">
import Logo from "./Logo.vue";
import router from "../router/index.ts";
import { headerItems } from "../utils/constants";

// Props
const props = defineProps({
  mobileMenu: {
    type: Boolean,
    required: true,
  },
});

// Events
const emit = defineEmits<{
  (event: "toggle-menu"): void;
}>();
</script>

<template>
  <div class="lt-md q-ml-auto q-mr-sm">
    <q-btn flat round @click="emit('toggle-menu')">
      <Logo />
    </q-btn>
  </div>
  <q-dialog class="lt-md" v-model="props.mobileMenu">
    <q-card class="q-pb-xl text-center" style="width: 90%; max-width: 400px">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" flat round dense @click="emit('toggle-menu')" />
      </q-card-section>
      <q-card-section v-for="item in headerItems" :key="item.id">
        <router-link class="no-style-link" :to="item.route">
          <q-btn
            no-caps
            rounded
            :flat="item.route !== router.currentRoute.value.path"
            :outline="item.route === router.currentRoute.value.path"
          >
            {{ item.label }}
          </q-btn>
        </router-link>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.no-style-link {
  text-decoration: none;
  color: inherit;
}
</style>
