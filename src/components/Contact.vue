<script setup lang="ts">
import ContactForm from "../components/ContactForm.vue";
import AnimatedItem from "../components/AnimatedItem.vue";
</script>

<template>
  <div
    id="contact"
    style="min-height: 82vh"
    class="flex column items-center q-py-xl"
  >
    <div style="width: 100%; max-width: 600px">
      <AnimatedItem direction="below" :delay="150">
        <ContactForm />
      </AnimatedItem>
    </div>
  </div>
</template>

<style scoped></style>
