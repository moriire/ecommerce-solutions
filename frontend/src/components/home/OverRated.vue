<template>
    <swiper :effect="'fade'" :slidesPerView="2" :spaceBetween="10" 
    :navigation="true"
     :breakpoints="{
        '640': {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        '1024': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }" :modules="modules" class="mySwiper px-4">
        <swiper-slide >
            <a class="banner-item position-relative rounded" href="collection-left-sidebar.html">
                <img class="banner-img" src="/src/assets/img/banner/shoe-1.jpg" alt="banner-1">
                <div class="content-absolute content-slide">
                    <div class="container height-inherit d-flex align-items-center">
                        <div class="content-box banner-content p-4">
                            <p class="heading_18 mb-3 text-white">Sports Shoes</p>
                            <h2 class="heading_34 text-white">1 25% off for <br>sports men</h2>
                        </div>
                    </div>
                </div>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a class="banner-item position-relative rounded" href="collection-left-sidebar.html">
                <img class="banner-img" src="/src/assets/img/banner/shoe-1.jpg" alt="banner-1">
                <div class="content-absolute content-slide">
                    <div class="container height-inherit d-flex align-items-center">
                        <div class="content-box banner-content p-4">
                            <p class="heading_18 mb-3 text-white">Sports Shoes</p>
                            <h2 class="heading_34 text-white">2 25% off for <br>sports men</h2>
                        </div>
                    </div>
                </div>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a class="banner-item position-relative rounded" href="collection-left-sidebar.html">
                <img class="banner-img" src="/src/assets/img/banner/shoe-1.jpg" alt="banner-1">
                <div class="content-absolute content-slide">
                    <div class="container height-inherit d-flex align-items-center">
                        <div class="content-box banner-content p-4">
                            <p class="heading_18 mb-3 text-white">Sports Shoes</p>
                            <h2 class="heading_34 text-white">25% off for <br>sports men</h2>
                        </div>
                    </div>
                </div>
            </a>
        </swiper-slide>
    </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade,  Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';

//import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import './style.css';

// import required modules
//import { Pagination, EffectFade } from 'swiper/modules';

const modules = [EffectFade,  Navigation]
        
</script>
<style scoped>.swiper {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
</style>