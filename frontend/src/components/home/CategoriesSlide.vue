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
  <swiper :spaceBetween="10" :slidesPerView="3" :centeredSlides="true" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :pagination="{
    clickable: true,
  }" :navigation="true" :modules="modules" class="mySwiper">

    <swiper-slide
    v-for="(item, index) in items" v-bind:key="index" class="h-100 py-4 card d-block" style="height: 18rem !important;">
      <div class="card-body bg-dark py-4 mx-3">
            <h2>{{ item.name }}</h2>
      </div>
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