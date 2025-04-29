<script setup lang="ts">
import Page from "../components/Page.vue";
import Reviews from "../components/Reviews.vue";
import Contact from "../components/Contact.vue";
import Gallery from "../components/Gallery.vue";
import Services from "../components/Services.vue";
import HomeBanner from "../components/HomeBanner.vue";
</script>

<template>
  <Page>
    <HomeBanner />
    <Services />
    <Gallery />
    <Reviews />
    <Contact />
  </Page>
</template>

<style scoped></style>
