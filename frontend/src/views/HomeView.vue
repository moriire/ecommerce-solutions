<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCateoryStore } from '@/stores/categories';
import Banner from '@/components/Banner.vue';
import VendorSlide from "@/components/VendorSlide.vue"
import ProductPage from "@/components/ProductPage.vue"
import { useProductStore } from '@/stores/products';

const cat = useCateoryStore()
const prod = useProductStore()
</script>

<template>
   
    <div class="row">
        <div class="col-lg-2 d-lg-block d-none">
            <div class="list-group">
                <h5>Categories</h5>
                <a 
                href="#" 
                class="list-group-item list-group-item-action"
                v-for="(category, index) in cat.categories" v-bind:key="index"
                >
                    {{ category.category.name }}
                </a>
            </div>
        </div>
        <div class="col-lg-10 col-12">
            <VendorSlide />
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

    <!-- shop by category start -->
    <div class="shop-category mt-100 overflow-hidden">
        <div class="collection-tab-inner">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-heading">Shop By Category</h2>
                </div>
                <div class="grid-container shop-category-inner">
                    <a class="grid-item grid-item-1 position-relative rounded mt-0 d-flex"
                        href="collection-left-sidebar.html">
                        <img class="banner-img" src="/src/assets/img/banner/bag-3.jpg" alt="banner-1">
                        <div class="content-absolute content-slide">
                            <div class="container height-inherit d-flex">
                                <div class="content-box banner-content p-4">
                                    <p class="heading_16 m-0 primary-color">New Arrivals</p>
                                    <h2 class="heading_18">Women Beautiful Handbag</h2>
                                    <span class="text_12 mt-2 link-underline d-block">SHOP
                                        COLLECTION
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="grid-item grid-item-2 position-relative rounded mt-0 d-flex"
                        href="collection-left-sidebar.html">
                        <img class="banner-img" src="/src/assets/img/banner/bag-4.jpg" alt="banner-1">
                        <div class="content-absolute content-slide">
                            <div class="container height-inherit d-flex">
                                <div class="content-box banner-content p-4">
                                    <p class="heading_16 m-0 primary-color">New Arrivals</p>
                                    <h2 class="heading_18">Bag Bouquet</h2>
                                    <span class="text_12 mt-2 link-underline d-block">SHOP
                                        COLLECTION
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="grid-item grid-item-3 position-relative rounded mt-0 d-flex"
                        href="collection-left-sidebar.html">
                        <img class="banner-img" src="/src/assets/img/banner/bag-5.jpg" alt="banner-1">
                        <div class="content-absolute content-slide">
                            <div class="container height-inherit d-flex justify-content-end text-end">
                                <div class="content-box banner-content p-4">
                                    <p class="heading_16 m-0 primary-color">Quality Product</p>
                                    <h2 class="heading_18">Leather collection</h2>
                                    <span class="text_12 mt-2 link-underline d-block">SHOP
                                        COLLECTION
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="grid-item grid-item-4 position-relative rounded mt-0 d-flex"
                        href="collection-left-sidebar.html">
                        <img class="banner-img" src="/src/assets/img/banner/bag-6.jpg" alt="banner-1">
                        <div class="content-absolute content-slide">
                            <div class="container height-inherit d-flex">
                                <div class="content-box banner-content p-4">
                                    <p class="heading_16 m-0 primary-color">New Arrivals</p>
                                    <h2 class="heading_18">Office Carrier</h2>
                                    <span class="text_12 mt-2 link-underline d-block">SHOP
                                        COLLECTION
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a class="grid-item grid-item-5 position-relative rounded mt-0 d-flex"
                        href="collection-left-sidebar.html">
                        <img class="banner-img" src="/src/assets/img/banner/bag-7.jpg" alt="banner-1">
                        <div class="content-absolute content-slide">
                            <div class="container height-inherit d-flex">
                                <div class="content-box banner-content p-4">
                                    <p class="heading_16 m-0 primary-color">New Arrivals</p>
                                    <h2 class="heading_18">Travel The World</h2>
                                    <span class="text_12 mt-2 link-underline d-block">SHOP
                                        COLLECTION
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- shop by category end -->

    <!-- faq start -->
    <div class="faq-section mt-100 overflow-hidden">
        <div class="faq-inner">
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-heading">Frequently Asked Question</h2>
                    <p class="section-subheading">All your questions about Axion answered </p>
                </div>
                <div class="faq-container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="faq-item rounded">
                                <h2 class="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                    data-bs-toggle="collapse" data-bs-target="#faq1">
                                    Is Bisum a safe investment?
                                    <span class="faq-heading-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </h2>
                                <div id="faq1" class="accordion-collapse collapse">
                                    <p class="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                        Sit repellat
                                        quod facere illo esse cumque inventore veniam necessitatibus totam
                                        repudiandae. Hic rerum animi modi sed?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="faq-item rounded">
                                <h2 class="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                    data-bs-toggle="collapse" data-bs-target="#faq2">
                                    How do I set up a crypto wallet?
                                    <span class="faq-heading-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </h2>
                                <div id="faq2" class="accordion-collapse collapse">
                                    <p class="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                        Sit repellat
                                        quod facere illo esse cumque inventore veniam necessitatibus totam
                                        repudiandae. Hic rerum animi modi sed?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="faq-item rounded">
                                <h2 class="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                    data-bs-toggle="collapse" data-bs-target="#faq3">
                                    Where and how do I buy Bisum?
                                    <span class="faq-heading-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </h2>
                                <div id="faq3" class="accordion-collapse collapse">
                                    <p class="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                        Sit repellat
                                        quod facere illo esse cumque inventore veniam necessitatibus totam
                                        repudiandae. Hic rerum animi modi sed?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="faq-item rounded">
                                <h2 class="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                    data-bs-toggle="collapse" data-bs-target="#faq4">
                                    What often will results be reported?
                                    <span class="faq-heading-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </h2>
                                <div id="faq4" class="accordion-collapse collapse">
                                    <p class="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                        Sit repellat
                                        quod facere illo esse cumque inventore veniam necessitatibus totam
                                        repudiandae. Hic rerum animi modi sed?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="faq-item rounded">
                                <h2 class="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                    data-bs-toggle="collapse" data-bs-target="#faq5">
                                    How can I get support?
                                    <span class="faq-heading-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </h2>
                                <div id="faq5" class="accordion-collapse collapse">
                                    <p class="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                        Sit repellat
                                        quod facere illo esse cumque inventore veniam necessitatibus totam
                                        repudiandae. Hic rerum animi modi sed?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12">
                            <div class="faq-item rounded">
                                <h2 class="faq-heading heading_18 collapsed d-flex align-items-center justify-content-between"
                                    data-bs-toggle="collapse" data-bs-target="#faq6">
                                    Is Axion available on a major Product exchange?
                                    <span class="faq-heading-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="#F76B6A" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="icon icon-down">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </span>
                                </h2>
                                <div id="faq6" class="accordion-collapse collapse">
                                    <p class="faq-body text_14">Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit.
                                        Sit repellat
                                        quod facere illo esse cumque inventore veniam necessitatibus totam
                                        repudiandae. Hic rerum animi modi sed?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="view-all text-center" data-aos="fade-up" data-aos-duration="700">
                        <a class="btn-primary" href="faq.html">SEE MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- faq end -->

    <!-- brand logo start -->
    <div class="brand-logo-section mt-100">
        <div class="brand-logo-inner">
            <div class="container">
                <div class="brand-logo-container overflow-hidden">
                    <div class="scroll-horizontal row align-items-center flex-nowrap">
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" data-aos="fade-up"
                            data-aos-duration="700">
                            <a href="index.html" class="brand-logo d-flex align-items-center justify-content-center">
                                <img src="/src/assets/img/brand/1.png" alt="img">
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" data-aos="fade-up"
                            data-aos-duration="700">
                            <a href="index.html" class="brand-logo d-flex align-items-center justify-content-center">
                                <img src="/src/assets/img/brand/2.png" alt="img">
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" data-aos="fade-up"
                            data-aos-duration="700">
                            <a href="index.html" class="brand-logo d-flex align-items-center justify-content-center">
                                <img src="/src/assets/img/brand/3.png" alt="img">
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" data-aos="fade-up"
                            data-aos-duration="700">
                            <a href="index.html" class="brand-logo d-flex align-items-center justify-content-center">
                                <img src="/src/assets/img/brand/4.png" alt="img">
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" data-aos="fade-up"
                            data-aos-duration="700">
                            <a href="index.html" class="brand-logo d-flex align-items-center justify-content-center">
                                <img src="/src/assets/img/brand/5.png" alt="img">
                            </a>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" data-aos="fade-up"
                            data-aos-duration="700">
                            <a href="index.html" class="brand-logo d-flex align-items-center justify-content-center">
                                <img src="/src/assets/img/brand/6.png" alt="img">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- brand logo end -->

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