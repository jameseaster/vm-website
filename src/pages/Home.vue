<script setup lang="ts">
import Page from "../components/Page.vue";
import Carousel from "../components/Carousel.vue";
import ContactForm from "../components/ContactForm.vue";
import HeroParallax from "../components/HeroParallax.vue";

const service1 = new URL("../assets/gate.png", import.meta.url).href;
const service2 = new URL("../assets/house.png", import.meta.url).href;
const service3 = new URL("../assets/deck.png", import.meta.url).href;
</script>

<template>
  <Page>
    <HeroParallax>
      <div class="gt-sm">
        <h1 style="font-weight: 400">VM Fab & Welding</h1>
        <h4 style="max-width: 700px; font-weight: 500">
          Commercial & Residential Welders Serving <br />
          Colorado Springs - Denver - Pueblo
        </h4>
      </div>
      <div class="lt-md">
        <h2 style="font-weight: 500">VM Fab & Welding</h2>
        <h4 style="max-width: 700px; font-weight: 500">
          - Serving - <br />
          Colorado Springs <br />
          Denver <br />
          Pueblo
        </h4>
      </div>
    </HeroParallax>
    <div
      id="intro"
      class="flex column items-center q-pt-xl"
      style="min-height: 100vh"
    >
      <div class="text-h4 q-pq-xl">Intro Paragraph</div>
      <div class="text-body1 q-py-xl" style="width: 50vw">
        Add a card here for intro stuff
      </div>
    </div>

    <div
      id="services"
      style="min-height: 100vh"
      class="flex column items-center justify-center q-pa-xl"
    >
      <div class="text-h4 q-pq-xl">Welding & Fabrication Services</div>
      <div class="row justify-center">
        <div id="residential-welding" class="q-pa-md col-md-6 col-12">
          <q-card class="cursor-pointer q-hoverable">
            <q-img :src="service3">
              <div class="absolute-bottom text-h6">Residential Welding</div>
            </q-img>

            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
        <div id="equipment-repair" class="q-pa-md col-md-6 col-12">
          <q-card class="cursor-pointer q-hoverable">
            <q-img :src="service2">
              <div class="absolute-bottom text-h6">Equipment Repair</div>
            </q-img>

            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
        <div id="custom-fabrication" class="q-pa-md col-md-6 col-12">
          <q-card class="cursor-pointer q-hoverable">
            <q-img :src="service1">
              <div class="absolute-bottom text-h6">Custom Fabrication</div>
            </q-img>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div
      id="gallery"
      style="min-height: 100vh"
      class="flex column items-center q-py-xl"
    >
      <div class="text-h4 q-pq-xl">Gallery</div>
      <div style="width: 100%; max-width: 900px">
        <Carousel />
      </div>
    </div>

    <div
      id="contact"
      style="min-height: 82vh"
      class="flex column items-center q-py-xl"
    >
      <div style="width: 100%; max-width: 600px">
        <ContactForm />
      </div>
    </div>
  </Page>
</template>

<style scoped></style>
