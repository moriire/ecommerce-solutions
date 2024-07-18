<script setup>
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
defineProps({
  items: Array,
  required: true
})
const modules = [Autoplay, Pagination, Navigation]
</script>
<template>
  <swiper :spaceBetween="10" :slidesPerView="3" :autoplay="{
    delay: 3000,
    disableOnInteraction: false,
  }"
  :breakpoints="{
      '602': {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '1024': {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }" 
  :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper">

    <swiper-slide  :style="`background-image: url(${item.img}); background-position: center;background-repeat: no-repeat; background-size: cover; height: 18rem !important;`"
    v-for="(item, index) in items" v-bind:key="index" class=" py-4 card d-block d-flex align-items-center">
    <RouterLink :to="{name: 'categories', params: {categories_slug: item.slug}}">
            <h3 class="text-dark bg-light m-2 py-2 px-3 rounded">{{ item.name }}</h3>
     </RouterLink>
    </swiper-slide>

  </swiper>
</template>
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

.box-part{
    background:#FFF;
    border-radius:0;
    padding:60px 10px;
    margin:30px 0px;
}
.text{
    margin:20px 0px;
}

.fa{
     color:#4183D7;
}
</style>