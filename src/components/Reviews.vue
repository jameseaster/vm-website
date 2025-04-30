<script lang="ts" setup>
import { reviews } from "../utils/constants";
const googleLogo = new URL("../assets/google-logo.png", import.meta.url).href;

// Duplicate the reviews to make the loop seamless
const duplicatedReviews = [...reviews, ...reviews];
</script>
<template>
  <div
    id="reviews"
    class="carousel-wrapper"
    style="margin-top: 20vh; margin-bottom: 20vh"
  >
    <div class="carousel-track">
      <q-card
        class="carousel-slide"
        flat
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
