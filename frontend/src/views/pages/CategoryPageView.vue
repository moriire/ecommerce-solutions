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
import { useBycategoriesStore } from '@/stores/bycategories';
import router from '@/router';
const route = useRoute()
const cat = useBycategoriesStore()
const prod = useProductStore()
const home = useHomeStore()
const slideCat = useCategoryStore()
prod.pages.limit = 8
watch(
  async () => await cat.getProductsByCategory(route.params.categories_slug)
)
onMounted(async () => {
    await cat.getProductsByCategory(route.params.categories_slug),
        await home.getPromoted(),
        await home.getDiscounted(),
        await prod.getProducts()
})
</script>
<template>
    <HomeSkeleton>
       
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
                                    Discover a wide range of products on Tagbiz. Explore categories like electronics,
                                    fashion, home goods, beauty, sports, and more. Find everything you need in one
                                    convenient place with great deals and fast shipping.
                                </p>
                                <div class="view-all mt-4">
                                    <a class="btn-secondary" href="collection-left-sidebar.html">SHOP TOOLS</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-12 align-self-center">
                            <CategoriesSlide :items="slideCat.categories" />

                        </div>
                    </div>
                </div>
            </div>
            <!-- promotinal product end -->
        </template>
        <template v-slot:latest>
            <div class="collection mt-100">
                <div class="container">
                    <div class="row">
                        <!-- product area start -->
                        <div class="col-lg-12 col-md-12 col-12">
                            <div class="filter-sort-wrapper d-flex justify-content-between flex-wrap">
                                <div class="collection-title-wrap d-flex align-items-end">
                                    <h2 class="collection-title heading_24 mb-0">All products</h2>
                                    <p class="collection-counter text_16 mb-0 ms-2">({{ cat.productsInCategory.length }} items)
                                    </p>
                                </div>
                                <div class="filter-sorting">
                                    <div class="collection-sorting position-relative d-none d-lg-block">
                                        <div
                                            class="sorting-header text_16 d-flex align-items-center justify-content-end">
                                            <span class="sorting-title me-2">Sort by:</span>
                                            <span class="active-sorting">Featured</span>
                                            <span class="sorting-icon">
                                                <svg uclass="icon icon-down" xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" class="feather feather-chevron-down">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                            </span>
                                        </div>
                                        <ul class="sorting-lists list-unstyled m-0">
                                            <li><a href="#" class="text_14">Featured</a></li>
                                            <li><a href="#" class="text_14">Best Selling</a></li>
                                            <li><a href="#" class="text_14">Alphabetically, A-Z</a></li>
                                            <li><a href="#" class="text_14">Alphabetically, Z-A</a></li>
                                            <li><a href="#" class="text_14">Price, low to high</a></li>
                                            <li><a href="#" class="text_14">Price, high to low</a></li>
                                            <li><a href="#" class="text_14">Date, old to new</a></li>
                                            <li><a href="#" class="text_14">Date, new to old</a></li>
                                        </ul>
                                    </div>
                                    <div
                                        class="filter-drawer-trigger mobile-filter d-flex align-items-center d-lg-none">
                                        <span class="mobile-filter-icon me-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" class="icon icon-filter">
                                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                            </svg>
                                        </span>
                                        <span class="mobile-filter-heading">Sorting</span>
                                    </div>
                                </div>
                            </div>
                            <ProductPage :products="cat.productsInCategory" :show="!true" />
                        </div>
                        <!-- product area end -->

                        <!--ShopSidebar /-->
                    </div>
                </div>
            </div>

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