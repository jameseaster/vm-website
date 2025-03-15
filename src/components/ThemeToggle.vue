<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useQuasar } from "quasar";

// Use functions
const $q = useQuasar();

// Refs
const darkMode = ref(false);

// Toggle theme mode
function toggleMode() {
  darkMode.value = !$q.dark.isActive;
  if ($q.dark.isActive) {
    window.localStorage.setItem("darkMode", "false");
  } else {
    window.localStorage.setItem("darkMode", "true");
  }
  $q.dark.toggle();
}

onMounted(() => {
  const modeIsDark = window.localStorage.getItem("darkMode");
  $q.dark.set(modeIsDark === "true");
  darkMode.value = modeIsDark === "true";
});
</script>

<template>
  <q-toggle
    size="3rem"
    left-label
    color="grey"
    v-model="darkMode"
    @click="toggleMode"
    :icon="$q.dark.isActive ? 'fa fa-moon' : 'fa fa-sun'"
  />
</template>

<style></style>
