<template>
  <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
      clickable: true,
    }" :navigation="true" :modules="modules" @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper">
    <swiper-slide class="slide-item slide-item-bag">
      <img class="slide-img" src="/src/assets/img/slideshow/f1.jpg" alt="slide-1">
      <!--img class="slide-img d-md-none" src="/src/assets/img/slideshow/f1-m.jpg" alt="slide-1"-->
      <div class="content-absolute content-slide">
        <div class="container height-inherit d-flex align-items-center justify-content-end">
          <div class="content-box slide-content slide-content-1 py-4">
            <h2 class="slide-heading heading_72 animate__animated animate__fadeInUp"
              data-animation="animate__animated animate__fadeInUp">
              Discover The Best Furniture
            </h2>
            <p class="slide-subheading heading_24 animate__animated animate__fadeInUp"
              data-animation="animate__animated animate__fadeInUp">
              Look for your inspiration here
            </p>
            <a class="btn-primary slide-btn animate__animated animate__fadeInUp" href="collection-left-sidebar.html"
              data-animation="animate__animated animate__fadeInUp">SHOP
              NOW</a>
          </div>
        </div>
      </div>

    </swiper-slide>
    <swiper-slide class="slide-item">Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
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
<script>
import { ref } from 'vue';
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
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
<style>
.swiper,
.swiper-slide,
.row {
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