<template>
  <swiper :spaceBetween="10" :slidesPerView="3" :centeredSlides="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper">

    <swiper-slide>
            <img class=".primary-img .display-block img img-responsive img-thumb"  src="https://lcci.pk/wp-content/uploads/2021/03/With-The-Advent-Of-Summer-Electronics-Products-Became-Expensive.jpg">
    </swiper-slide>

    <swiper-slide>
            <img class=".primary-img" src="https://5.imimg.com/data5/SELLER/Default/2023/1/SM/GS/DW/44069440/acce-1000x1000.png" alt="product-img">
    </swiper-slide>

    <swiper-slide>
            <img class=".primary-img" src="/src/assets/img/products/tools/3.jpg" alt="product-img">
    </swiper-slide>

    <swiper-slide>
            <img class=".primary-img" src="/src/assets/img/products/tools/4.jpg" alt="product-img">
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