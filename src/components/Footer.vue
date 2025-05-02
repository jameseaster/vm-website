<script setup lang="ts">
import { contactInfo, links } from "../utils/constants";
import { useQuasar } from "quasar";

// Use functions
const $q = useQuasar();

function openWindow(url: "facebook" | "instagram" | "google") {
  window.open(links[url]);
}
</script>

<template>
  <div
    class="justify-center items-center full-width q-mt-xl q-mb-md"
    style="height: 225px"
  >
    <div class="q-mb-md">
      <q-btn
        round
        size="large"
        class="q-mx-sm q-pa-sm"
        :outline="$q.dark.isActive"
        :color="$q.dark.isActive ? 'white' : 'dark'"
        @click="() => openWindow('facebook')"
      >
        <font-awesome-icon class="social-icon" icon="fa-brands fa-facebook" />
      </q-btn>
      <q-btn
        round
        size="large"
        class="q-mx-sm q-pa-sm"
        :outline="$q.dark.isActive"
        :color="$q.dark.isActive ? 'white' : 'dark'"
        @click="() => openWindow('instagram')"
      >
        <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" />
      </q-btn>
      <q-btn
        round
        size="large"
        class="q-mx-sm q-pa-sm"
        :outline="$q.dark.isActive"
        :color="$q.dark.isActive ? 'white' : 'dark'"
        @click="() => openWindow('google')"
      >
        <font-awesome-icon class="social-icon" icon="fa-brands fa-google" />
      </q-btn>
    </div>
    <div class="text-body1 q-mt-lg q-mb-xs">{{ contactInfo.hours }}</div>
    <div class="text-body1 q-my-xs">{{ contactInfo.phone }}</div>
    <div class="text-body1 q-my-xs">{{ contactInfo.email }}</div>
    <div class="text-body1 q-mt-lg copyright">
      <i>Copyright {{ new Date().getFullYear() }}</i>
    </div>
  </div>
</template>

<style scoped>
.social-icon {
  width: 2rem;
  height: 2rem;
}
.copyright {
  color: var(--q-fontColorSecondary);
}
</style>
