<script setup>
import { onMounted, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/categories';
import Banner from '@/components/Banner.vue';
import HeroSlide from "@/components/HeroSlide.vue"
import ProductPage from "@/components/ProductPage.vue"
import { useProductStore } from '@/stores/products';

const cat = useCategoryStore()
const prod = useProductStore()
</script>

<template>

    <div class="row">
        <div class="col-lg-12 col-12 slideshow-section position-relative">
            <HeroSlide />
        </div>

    </div>

    <!-- slideshow start -->
    <!--div class="slideshow-section position-relative">
            <div class="slideshow-active activate-slider" data-slick='{
                    "slidesToShow": 1, 
                    "slidesToScroll": 1, 
                    "dots": true,
                    "arrows": true,
                    "responsive": [
                        {
                            "breakpoint": 768,
                            "settings": {
                                "arrows": false
                            }
                        }
                    ]
                }'>
                <div class="slide-item slide-item-bag position-relative">
                    <img class="slide-img d-none d-md-block" src="/src/assets/img/slideshow/b1.jpg" alt="slide-1">
                    <img class="slide-img d-md-none" src="/src/assets/img/slideshow/b1-m.jpg" alt="slide-1">
                    <div class="content-absolute content-slide">
                        <div class="container height-inherit d-flex align-items-center justify-content-end">
                            <div class="content-box slide-content py-4">
                                <p class="slide-text heading_24 animate__animated animate__fadeInUp"
                                    data-animation="animate__animated animate__fadeInUp">
                                    Top Branded
                                </p>
                                <h2 class="slide-heading heading_72 animate__animated animate__fadeInUp"
                                    data-animation="animate__animated animate__fadeInUp">
                                    Best Bags 2022
                                </h2>
                                <a class="btn-primary slide-btn animate__animated animate__fadeInUp"
                                    href="collection-left-sidebar.html"
                                    data-animation="animate__animated animate__fadeInUp">SHOP
                                    NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide-item position-relative">
                    <img class="slide-img d-none d-md-block" src="/src/assets/img/slideshow/b2.jpg" alt="slide-2">
                    <img class="slide-img d-md-none" src="/src/assets/img/slideshow/b2-m.jpg" alt="slide-2">
                    <div class="content-absolute content-slide">
                        <div class="container height-inherit d-flex align-items-center">
                            <div class="content-box slide-content py-4">
                                <p class="slide-text heading_24 animate__animated animate__fadeInUp"
                                    data-animation="animate__animated animate__fadeInUp">
                                    Top Branded
                                </p>
                                <h2 class="slide-heading heading_72 animate__animated animate__fadeInUp"
                                    data-animation="animate__animated animate__fadeInUp">
                                    Best Bags 2022
                                </h2>
                                <a class="btn-primary slide-btn animate__animated animate__fadeInUp"
                                    href="collection-left-sidebar.html"
                                    data-animation="animate__animated animate__fadeInUp">SHOP
                                    NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide-item position-relative">
                    <img class="slide-img d-none d-md-block" src="/src/assets/img/slideshow/b3.jpg" alt="slide-3">
                    <img class="slide-img d-md-none" src="/src/assets/img/slideshow/b3-m.jpg" alt="slide-3">
                    <div class="content-absolute content-slide">
                        <div class="container height-inherit d-flex align-items-center justify-content-end">
                            <div class="content-box slide-content py-4">
                                <p class="slide-text heading_24 animate__animated animate__fadeInUp"
                                    data-animation="animate__animated animate__fadeInUp">
                                    Top Branded
                                </p>
                                <h2 class="slide-heading heading_72 animate__animated animate__fadeInUp"
                                    data-animation="animate__animated animate__fadeInUp">
                                    Best Bags 2022
                                </h2>
                                <a class="btn-primary slide-btn animate__animated animate__fadeInUp"
                                    href="collection-left-sidebar.html"
                                    data-animation="animate__animated animate__fadeInUp">SHOP
                                    NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="activate-arrows"></div>
            <div class="activate-dots dot-tools"></div>
        </div-->
    <!-- slideshow end -->
    <!--Banner /-->


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
            </div>
        </div>
    </div>
    <!-- collection end -->
    
    <!-- Start Product Section -->
    <!--div class="product-section">
        <div class="container">
            <div class="row">

                <-- Start Column 1 -->
    <!--div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="shop.html" class="btn">Explore</a></p>
					</div>
                <End Column 1 >

                <ProductPage :products="prod.products" />



            </div>
        </div>
    </div-->
    <!-- End Product Section -->

    
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