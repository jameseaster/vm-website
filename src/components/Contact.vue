<script setup lang="ts">
import ContactForm from "../components/ContactForm.vue";
import AnimatedItem from "../components/AnimatedItem.vue";
</script>

<template>
  <div
    id="contact"
    class="flex column items-center q-py-xl"
    style="margin-top: 15vh; margin-bottom: 5vh"
  >
    <div style="width: 100%; max-width: 700px">
      <AnimatedItem direction="below" :delay="50">
        <ContactForm />
      </AnimatedItem>
    </div>
  </div>
</template>

<style scoped></style>
