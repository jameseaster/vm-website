<script setup lang="ts">
import { ref } from "vue";

defineProps<{ buttonLabel: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count += 1">{{ buttonLabel }}</button>
</template>

<style scoped></style>
