<template>
    <swiper :slidesPerView="3" :grid="{
        rows: 2,
    }" :spaceBetween="30" :pagination="{
        clickable: true,
    }" :modules="modules" class="mySwiper">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Grid, Pagination],
        };
    },
};
</script>
<style scoped>
.swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: calc((100% - 30px) / 2) !important;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>