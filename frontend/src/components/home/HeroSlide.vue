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
      <div class="row align-items-center justify-content-between vh-100 w-100">
        <div class="col-lg-6 col-md-6 col-12 text-dark">
          <h1 class="text-start ">{{ prod.product.name }} <sup class="text-light bg-dark p-2 rounded-circle" style="vertical-align: super;font-size: 0.4em;">New</sup><span class="text-start text-warning h5">{{ prod.product.category.name }}</span> </h1>
          <h1 class="text-start text-warning"> 	&#8358; {{ prod.product.new_price }} 
            
              <span style="text-decoration-line: line-through;" class="fs-5 text-dark"> &#8358; {{ prod.product.price }}</span> 
            
          </h1>
          <p class="d-none d-md-block d-lg-block">
            {{ prod.product.description || 'no description' }}
          </p>
          <div class="row py-3">
            <div class="col d-grid gap-2">
              <button class="btn btn-primary">Contact Seller</button>
            </div>
            <div class="col d-grid gap-2">
              <button class="btn btn-warning">Chat Now</button>
            </div>
          </div>
        </div>
        
        <div :style="`background-image: url(${prod.images[0].img}); background-repeat: no-repeat; background-position:center; min-height:100%`+';'"
          class="h-100 col-lg-5 col-md-5 col-12 mb-3 .order-sm-first order-sm-0 rounded-circle" style="height:60vh">
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
  height: 80vh;
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