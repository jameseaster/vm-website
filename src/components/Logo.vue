<script setup lang="ts">
const Logo = new URL("../assets/Logo.png", import.meta.url).href;
</script>

<template>
  <q-img :src="Logo" style="width: 40px" />
</template>

<style></style>
