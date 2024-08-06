<script setup>
import { ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
defineProps({
  boostedProducts: {
    type: Array,
    required: true
  }
});
const progressCircle = ref(null);
const progressContent = ref(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty('--progress', 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};
const modules = [Autoplay, Pagination, Navigation]
</script>
<template>
  <swiper v-if="boostedProducts" :spaceBetween="30" :centeredSlides="true" :autoplay="{
    delay: 5000,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper">
    <swiper-slide v-for="(prod, index) in boostedProducts" v-bind:key="index">
      <div class="row  align-items-center">
        <div class="col-lg-7 text-dark text-align-center">
          <h1 class="text-start ">{{ prod.product.name }} <span class="text-start text-warning h5">{{ prod.product.category.name }}</span> </h1>
          <!--h2 class="text-start text-warning"> {{ prod.product.category.name }} </h2-->
          <p class="">
            {{ prod.product.description || 'no description' }}
          </p>
          <div class="row column py-3">
            <div class=" col d-grid gap-2">
              <button class="btn btn-primary">Contact Seller</button>
            </div>
            <div class="col d-grid gap-2">
              <button class="btn btn-warning">Chat Now</button>
            </div>
          </div>

        </div>
        <div :style="`background-image: url(${prod.images[0].img}); background-repeat: no-repeat; background-position:center; min-height:100%;`"
          class="min-height-100 col-5 mb-3 order-first order-lg-1" style="height:40vh">
        </div>

      </div>
    </swiper-slide>

    <template #container-end>
      <div class="autoplay-progress">
        <svg viewBox="0 0 48 48" ref="progressCircle">
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref="progressContent"></span>
      </div>
    </template>
  </swiper>
</template>
<style scoped>
.swiper{
  width: 100%;
  height: 72vh;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  /*display: flex;*/
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