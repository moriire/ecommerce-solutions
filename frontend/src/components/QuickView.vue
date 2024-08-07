<script setup>
import { ref } from 'vue';
import ProductSingle from "@/components/ProductSingle.vue"

defineProps({
    item: {
        type: Object,
        required: true
    },
    add_cart: {
        type: Function,
        required: true
    }
})
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

//import './style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Navigation, Thumbs]
</script>
<template>
    <!-- product quickview start -->
    <div class="modal fade" tabindex="-1" id="quickview-modal" v-if="item">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!--ProductSingle :product="item.product" :images="item.images" @addCart="add_cart" @addWish="wish.addWishlist(item.id)" /-->
                </div>
            </div>
        </div>
    </div>
    <!-- product quickview end -->
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

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 80% !important;
    width: 100%;
}

.mySwiper {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

;
</style>