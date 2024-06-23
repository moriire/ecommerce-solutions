<template>
  <swiper :breakpoints="{
    '602': {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    '768': {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    '1024': {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }" :loop="true" :spaceBetween="30" :centeredSlides="true" :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }" :navigation="true" :modules="modules" class="mySwiper">
    
    <swiper-slide v-for="(category, index) in cat.categories" v-bind:key="index">
      <a class="banner-item position-relative rounded" href="collection-left-sidebar.html">
        <img class="banner-img" src="/src/assets/img/banner/shoe-2.jpg" alt="banner-2">
        <div class="content-absolute content-slide">
          <div class="container height-inherit d-flex align-items-center">
            <div class="content-box banner-content p-4">
              <p class="heading_18 mb-3 text-white">Sports Shoes</p>
              <h2 class="heading_34 text-white">25% off for <br>sports women</h2>
            </div>
          </div>
        </div>
      </a>
    </swiper-slide>
  </swiper>
</template>
<script>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { useCategoryStore } from '@/stores/categories';
import { RouterLink } from 'vue-router';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const cat = useCategoryStore()
    return {
      modules: [Autoplay, Navigation],
      cat
    };
  },
};
</script>
<style>
.swiper-slide {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>