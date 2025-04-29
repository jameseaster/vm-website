<script setup lang="ts">
function openWindow(url: "facebook" | "instagram") {
  const urls = {
    facebook: "https://www.facebook.com/profile.php?id=100072490594696",
    instagram: "https://www.instagram.com/vmweldingandfab/",
  };
  window.open(urls[url]);
}
</script>

<template>
  <div
    class="justify-center items-center full-width q-mt-xl q-mb-md"
    style="height: 10vh; margin-bottom: 100px"
  >
    <div class="q-mb-md">
      <q-btn
        round
        class="q-mx-sm q-pa-sm glossy"
        @click="() => openWindow('facebook')"
      >
        <font-awesome-icon class="social-icon" icon="fa-brands fa-facebook" />
      </q-btn>
      <q-btn
        round
        class="q-mx-sm q-pa-sm glossy"
        @click="() => openWindow('instagram')"
      >
        <font-awesome-icon class="social-icon" icon="fa-brands fa-instagram" />
      </q-btn>
    </div>
    <div>Copyright {{ new Date().getFullYear() }}</div>
  </div>
</template>

<style scoped>
.social-icon {
  width: 2rem;
  height: 2rem;
}
</style>
