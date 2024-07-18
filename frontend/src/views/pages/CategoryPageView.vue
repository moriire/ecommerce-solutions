<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/categories';
import HomeSkeleton from "@/components/category/HomeSkeleton.vue"
import HeroSlide from "@/components/category/HeroSlide.vue"
//import Testimonial from "@/components/category/Testimonial.vue"
import ProductPage from "@/components/ProductPage.vue"
import { useProductStore } from '@/stores/products';
import CategoriesSlide from "@/components/category/CategoriesSlide.vue"
import VendorSlide from '@/components/VendorSlide.vue';
import DiscountedSlide from "@/components/category/DiscountedSlide.vue"
import { useHomeStore } from '@/stores/home';

const cat = useCategoryStore()
const prod = useProductStore()
const home = useHomeStore()
prod.pages.limit = 8
onMounted(async () => {
    await home.getLatest(),
        await home.getPromoted(),
        await home.getDiscounted(),
        await prod.getProducts()
})
</script>
<template>
    <HomeSkeleton>
        <template v-slot:header>
            <HeroSlide :boostedProducts="home.promotions" v-if="home.promotions.length" />
            <template v-else>
                <div class="vh-100 d-flex justify-content-center align-items-center">
                    <h2>No Products Uploaded yet</h2>
                </div>
            </template>
        </template>
        <template v-slot:categories>
            <!-- promotinal product start -->
            <div class="promotinal-product-section overlay-tools mt-100 overflow-hidden">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-12 d-flex align-items-center">
                            <div class="promotinal-product-content" data-aos="fade-up" data-aos-duration="700">
                                <p class="heading_18 primary-color mb-3">Navigate our various product categories</p>
                                <h2 class="heading_34 text-white mb-3">Products Categories</h2>
                                <p class="text_16 text-white mb-3">
                                    Discover a wide range of products on Tagbiz. Explore categories like electronics, fashion, home goods, beauty, sports, and more. Find everything you need in one convenient place with great deals and fast shipping.
                                </p>
                                <div class="view-all mt-4">
                                    <a class="btn-secondary" href="collection-left-sidebar.html">SHOP TOOLS</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-12 align-self-center">
                            <CategoriesSlide :items="cat.categories" />

                        </div>
                    </div>
                </div>
            </div>
            <!-- promotinal product end -->
        </template>
        <template v-slot:latest>
            <!-- collection start -->
            <div class="featured-collection mt-100 overflow-hidden">
                <div class="collection-tab-inner">
                    <div class="container">
                        <div class="section-header text-center">
                            <h2 class="section-heading">Latest Products</h2>
                        </div>
                        <div class="row">
                            <ProductPage :products="home.latests" v-if="home.latests.length" />
                            <template v-else>
                                <div class="vh-100 d-flex justify-content-center align-items-center">
                                    <h2>No Products Uploaded yet</h2>
                                </div>
                            </template>
                        </div>
                        <div class="view-all text-center" data-aos="fade-up" data-aos-duration="700">
                            <RouterLink class="btn-primary" to="/shop">VIEW ALL</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- collection end -->
        </template>
        <template v-slot:discounted>
            <div class="featured-collection-section mt-100 home-section overflow-hidden">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-heading">Highly Discounted Products</h2>
                    </div>
                    <DiscountedSlide :products="home.latests" :numSlide="4" />
                </div>
            </div>
        </template>
    </HomeSkeleton>
    <!--Testimonial /-->
    <!--div class="featured-collection mt-100 overflow-hidden">
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
    </div-->

</template>
<style scoped></style>