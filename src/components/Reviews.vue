<script lang="ts" setup>
import { useQuasar } from "quasar";
import { aboutUs } from "../utils/constants";
import AnimatedItem from "../components/AnimatedItem.vue";

// Duplicate the reviews to make the loop seamless
const duplicatedReviews = [...aboutUs.reviews, ...aboutUs.reviews];

const googleLogo = new URL("../assets/google-logo.png", import.meta.url).href;

// use functions
const $q = useQuasar();
</script>

<template>
  <div
    id="reviews"
    class="flex column items-center q-py-xl"
    style="margin-top: 13vh"
  >
    <AnimatedItem direction="below" :delay="50">
      <div class="text-h6" style="width: 80vw; max-width: 900px">
        <q-card
          class="q-pa-xl"
          :flat="$q.screen.lt.md"
          :style="
            $q.screen.lt.md ? { 'background-color': 'var(--q-background)' } : {}
          "
        >
          {{ aboutUs.text }}
        </q-card>
      </div>
    </AnimatedItem>
  </div>
  <div class="carousel-wrapper" style="margin-bottom: 20vh">
    <div class="carousel-track">
      <q-card
        class="carousel-slide"
        v-for="(review, index) in duplicatedReviews"
        :key="index"
      >
        <div class="slide-content">
          <div>
            <q-img :src="googleLogo" style="width: 25px" />
          </div>
          <q-rating
            v-model="review.stars"
            max="5"
            size="2em"
            readonly
            color="amber-5"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
          />
          <p v-if="review.text" class="quote">"{{ review.text }}"</p>
          <p class="author">— {{ review.author }}</p>
        </div>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.carousel-wrapper {
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  width: fit-content;
  animation: scroll 40s linear infinite;
}

.carousel-slide {
  flex: 0 0 auto;
  width: 350px;
  padding: 1rem;
  text-align: center;
  margin: 1rem 1rem 1rem 0;
}

.slide-content {
  width: 100%;
}

.quote {
  font-size: 1rem;
  font-style: italic;
  color: var(--q-fontColor);
}

.author {
  margin-top: 20px;
  font-weight: bold;
  color: var(--q-fontColorSecondary);
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
