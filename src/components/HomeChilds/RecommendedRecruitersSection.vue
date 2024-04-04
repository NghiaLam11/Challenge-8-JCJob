<template>
  <div class="recruiters">
    <h3>Recommended recruiters</h3>
    <Carousel :breakpoints="breakpoints">
      <Slide v-for="n in 10" :key="n">
        <div class="carousel__item recruiters-item">
          <img
            src="/src/images/goku-ultra-instinct-dragon-ball-thumb-1500x844.jpg"
            alt="recruiters avatar"
          />
          <h4>Lam Hien Nghia</h4>
          <button>Follow</button>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const breakpoints = {
  0: {
    itemsToShow: 2,
    snapAlign: "start",
    autoplay: 3000,
    wrapAround: true,
  },
  738: {
    itemsToShow: 3,
    snapAlign: "center",
    autoplay: 3000,
    wrapAround: true,
  },
};
</script>

<style scoped>
.recruiters {
  padding: 2rem;
}
.recruiters-item {
  text-align: center;
  border: 1px solid var(--shadow-color);
  width: 100%;
  margin: 0.5rem;
  padding: 1rem 0.5rem;
}
.recruiters-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto;
}
.recruiters-item h4 {
  padding: 0.3rem 0;
}
.recruiters-item button {
  cursor: pointer;
}
@media screen and (max-width: 576px) {
  .recruiters {
    padding: 1rem 0;
  }
}
</style>
