<template>
  <swiper :spaceBetween="10" :slidesPerView="3" :centeredSlides="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide class="product-card">Slide 1</swiper-slide>
    <swiper-slide>
      <div class=".product-card">
        <div class="product-card-img">
          <a class="hover-switch" href="collection-left-sidebar.html">
          <img class="primary-img" src="/src/assets/img/products/tools/2.jpg" alt="product-img">
          </a>
        </div>
       
      </div>

    </swiper-slide>
   
    <swiper-slide>
      <div class=".product-card">
        <div class="product-card-img">
          <a class="hover-switch" href="collection-left-sidebar.html">
          <img class="primary-img" src="/src/assets/img/products/tools/2.jpg" alt="product-img">
          </a>
        </div>
      </div>

    </swiper-slide>

    <swiper-slide>
      <div class=".product-card">
        <div class="product-card-img">
          <a class="hover-switch" href="collection-left-sidebar.html">
          <img class="primary-img" src="/src/assets/img/products/tools/2.jpg" alt="product-img">
          </a>
        </div>
       
      </div>

    </swiper-slide>

    <swiper-slide>
      <div class=".product-card">
        <div class="product-card-img d-flex justify-content-center align-items-center h-100">
          <a class="hover-switch" href="collection-left-sidebar.html">
          <img class="primary-img" src="/src/assets/img/products/tools/2.jpg" alt="product-img">
          </a>
        </div>
       
      </div>

    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style>
.swiper {
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
</style>