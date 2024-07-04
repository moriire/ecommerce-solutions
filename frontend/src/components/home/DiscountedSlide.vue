<template>
    <swiper :effect="'fade'" :slidesPerView="2" :spaceBetween="10" 
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
     :breakpoints="{
        '640': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '1024': {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }" :modules="modules" class="container mySwiper">

        <swiper-slide v-for="(product, index) in products" v-bind:key="index">
            <a class="banner-item rounded" href="collection-left-sidebar.html">
                <img class="banner-img" :src="product.images[0].img" alt="banner-1" width="1000" height="446" style="width: 1000; height: 446;">
                <div class="content-absolute content-slide">
                    <div class="container height-inherit d-flex align-items-center">
                        <div class="content-box banner-content p-4">
                            <p class="heading_18 mb-3 text-white">{{ product.product.category.name }}</p>
                            <h2 class="heading_34 text-white">{{ product.product.discount }}% off for <br>{{ product.product.name }}</h2>
                        </div>
                    </div>
                </div>
            </a>
        </swiper-slide>
        <swiper-slide>
            <a class="banner-item rounded" href="collection-left-sidebar.html">
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
            <a class="banner-item rounded" href="collection-left-sidebar.html">
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

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';
  // import required modules
  import { Pagination
    //EffectFade 
    } from 'swiper/modules';


defineProps({
    products: {
        type: Array,
        required: true
    }
})
  
const modules = [Pagination]//, EffectFade],
     
</script>

<style scoped>
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
  /*display: block;
  width: 100%;
  height: 100%;*/
  object-fit: cover;
}
</style>