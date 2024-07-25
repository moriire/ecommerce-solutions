<script setup>

import ProductCard from '../ProductCard.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
//import 'swiper/css/pagination';
import 'swiper/css/navigation';
//import 'swiper/css/effect-fade';
// import required modules
import {
    Autoplay,
    Navigation
    //EffectFade 
} from 'swiper/modules';

defineProps({
    products: {
        type: Array,
        required: true
    },
    title: {
        type: String
    },
    numSlide: {
        type: Number,
        default: 5
    }

})

const modules = [Autoplay,  Navigation]//, EffectFade],
</script>
<template>
    <swiper :slidesPerView="5" :spaceBetween="20" :navigation="true"
     :breakpoints="{
        '640': {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        '768': {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        '1024': {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }" :modules="modules" class=".container mySwiper">
        <template v-for="(product, index) in products" v-bind:key="index" >
            <swiper-slide  v-if="product.images.length" >
                <ProductCard :name="product.product.name" :price="product.product.new_price"
               
                    :costPrice="product.product.price" :product_id="product.product.id"
                    :image="product.images[0].img" :discount="product.product.discount"
                    :condition="product.product.condition" @addCart="prod.addToCart(product)"
                    @addWish="wish.addWishlist(product.id)" @click="modalShow(product)" />
                    </swiper-slide>
        </template>
        <!--div class="row bg-dark">
                <div class="col">
                    <div class="content-absolute content-slide">
                        <div class="container height-inherit d-flex align-items-center">
                            <div class="content-box banner-content p-4">
                                <p class="heading_18 mb-3 text-white">{{ product.product.category.name }}</p>
                                <h2 class="heading_34 text-white">{{ product.product.discount }}% off for <br>{{
                                    product.product.name }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <img class="banner-img" :src="product.images[0].img" alt="banner-1" width="1000" height="446"
                        style="width: 1000; height: 446;">
                </div>
            </div-->
    </swiper>
</template>

<style scoped>
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