<template>
    <div>
        <swiper :slidesPerView="4" :grid="{
            rows: 1,
        }" :spaceBetween="15"
        :modules="modules" class="mySwiper">
            <swiper-slide v-for="prod in products">
                <img :src="prod.images[0].img" alt="" v-if="prod.images.length">
            </swiper-slide>
        </swiper>
</div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/grid';
//import 'swiper/css/pagination';

//import './style.css';

// import required modules
import { Grid, 
    //Pagination 
    } from 'swiper/modules';
const modules = [Grid, 
//Pagination
]
defineProps({
    products: {
        type: Array,
        required: true
    }
})
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