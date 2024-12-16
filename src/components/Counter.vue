<script setup lang="ts">
import { ref } from "vue";

defineProps<{ buttonLabel: string }>();

const count = ref(0);
</script>

<template>
  <div class="text-h1">{{ count }}</div>
  <q-btn @click="count += 1">{{ buttonLabel }}</q-btn>
</template>

<style scoped></style>
