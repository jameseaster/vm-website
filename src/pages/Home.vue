<script setup lang="ts">
import Page from "../components/Page.vue";
import Info from "../components/Info.vue";
import Contact from "../components/Contact.vue";
import Gallery from "../components/Gallery.vue";
import Services from "../components/Services.vue";
import HomeBanner from "../components/HomeBanner.vue";
</script>

<template>
  <Page>
    <HomeBanner />
    <Info />
    <Services />
    <Gallery />
    <Contact />
  </Page>
</template>

<style scoped></style>
