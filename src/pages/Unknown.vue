<script setup lang="ts">
import Page from "../components/Page.vue";
import HeroParallax from "../components/HeroParallax.vue";
</script>

<template>
  <Page>
    <HeroParallax>
      <div>
        <h1 class="gt-sm font-color">404 Uh Oh!</h1>
        <h2 class="lt-md font-color">404 Uh Oh!</h2>
        <q-btn
          no-caps
          rounded
          color="primary"
          label="Go Back To Home"
          style="width: 300px; height: 60px; font-size: 24px"
        />
      </div>
    </HeroParallax>
    <div class="flex column items-center q-pt-xl">
      <div class="text-h4 q-pq-xl"></div>
      <div class="text-h5 q-py-xl" style="width: 50vw">
        Looks like you landed on the wrong page!
      </div>
    </div>
  </Page>
</template>

<style scoped>
.font-color {
  color: var(--q-fontColor);
}
</style>
