<script setup lang="ts">
import { useQuasar } from "quasar";

// Use functions
const $q = useQuasar();

// Toggle theme mode
function toggleMode() {
  if ($q.dark.isActive) {
    window.localStorage.setItem("darkMode", "false");
  } else {
    window.localStorage.setItem("darkMode", "true");
  }
  $q.dark.toggle();
}
</script>

<template>
  <q-btn
    flat
    round
    class="absolute-right"
    style="height: 40px; width: 40px"
    :icon="$q.dark.isActive ? 'sunny' : 'fa fa-moon'"
    @click="toggleMode"
  />
</template>

<style></style>
