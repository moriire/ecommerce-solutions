<script setup>
import { onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/categories';
import HeroSlide from "@/components/HeroSlide.vue"
import Testimonial from "@/components/Testimonial.vue"
import ProductPage from "@/components/ProductPage.vue"
import { useProductStore } from '@/stores/products';
import VendorSlide from '@/components/VendorSlide.vue';
const cat = useCategoryStore()
const prod = useProductStore()
prod.pages.limit = 12
</script>

<template>

    <div class="row">
        <div class="col-lg-12 col-12 slideshow-section position-relative">
            <HeroSlide :boostedProducts="prod.products" />
        </div>

    </div>

    <!-- trusted badge start -->
    <div class="trusted-section mt-100 overflow-hidden">
        <div class="trusted-section-inner">
            <div class="container">
                <div class="row justify-content-center trusted-row">
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="trusted-badge rounded p-0">
                            <div class="trusted-icon">
                                <img class="icon-trusted" src="/src/assets/img/trusted/1.png" alt="icon-1">
                            </div>
                            <div class="trusted-content">
                                <h2 class="heading_18 trusted-heading">Free Shipping & Return</h2>
                                <p class="text_16 trusted-subheading trusted-subheading-2">On all order over
                                    $99.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="trusted-badge rounded p-0">
                            <div class="trusted-icon">
                                <img class="icon-trusted" src="/src/assets/img/trusted/2.png" alt="icon-2">
                            </div>
                            <div class="trusted-content">
                                <h2 class="heading_18 trusted-heading">Customer Support 24/7</h2>
                                <p class="text_16 trusted-subheading trusted-subheading-2">Instant access to
                                    support</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="trusted-badge rounded p-0">
                            <div class="trusted-icon">
                                <img class="icon-trusted" src="/src/assets/img/trusted/3.png" alt="icon-3">
                            </div>
                            <div class="trusted-content">
                                <h2 class="heading_18 trusted-heading">100% Secure Payment</h2>
                                <p class="text_16 trusted-subheading trusted-subheading-2">We ensure secure
                                    payment!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- trusted badge end -->

    <!-- collection start -->
    <div class="featured-collection mt-100 overflow-hidden">
        <div class="collection-tab-inner">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-heading">Popular Products</h2>
                </div>
                <div class="row">
                    <ProductPage :products="prod.products" />

                </div>
                <div class="view-all text-center" data-aos="fade-up" data-aos-duration="700">
                    <RouterLink class="btn-primary" to="/shop">VIEW ALL</RouterLink>
                </div>
            </div>
        </div>
    </div>
    <!-- collection end -->

    <Testimonial />
    <div class="featured-collection mt-100 overflow-hidden">
        <div class="collection-tab-inner">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-heading">Verified Vendors</h2>
                </div>
                <div class="row">
                    <VendorSlide />
                </div>
            </div>
        </div>
    </div>

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