<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
//import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/parallax"

// import './style.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const modules = [Parallax, Pagination, Navigation]
</script>
<template>
  <swiper :style="{
    '--swiper-navigation-color': '#fff',
    '--swiper-pagination-color': '#fff',
  }" :speed="600" :parallax="true" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper">
    <div slot="container-start" class="parallax-bg" :style="{
      'background-image':
        'url(https://swiperjs.com/demos/images/nature-1.jpg)',
    }" data-swiper-parallax="-23%"></div>
    <swiper-slide class="d-flex justify-content-between text-dark">
      <div class="" data-swiper-parallax="-400">
        <h1 data-swiper-parallax="-300">Hey Title</h1>
        <h2 data-swiper-parallax="-200"> Subtitle</h2>
        <div class="text" data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
            Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
            velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
            libero. Aenean feugiat non eros quis feugiat.
          </p>
        </div>
      </div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="title d-block" data-swiper-parallax="-300">Slide 2</div>
      <div class="subtitle d-block" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="title" :data-swiper-parallax="-300">Slide 3</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text text-dark" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  background: #000;
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}
</style>