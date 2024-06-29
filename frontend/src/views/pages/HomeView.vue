<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/categories';
import HomeSkeleton from "@/components/home/HomeSkeleton.vue"
import HeroSlide from "@/components/home/HeroSlide.vue"
//import Testimonial from "@/components/home/Testimonial.vue"
import ProductPage from "@/components/ProductPage.vue"
import { useProductStore } from '@/stores/products';
import VendorSlide from '@/components/VendorSlide.vue';
import DiscountedSlide from "@/components/home/DiscountedSlide.vue"
const cat = useCategoryStore()
const prod = useProductStore()
prod.pages.limit = 8
onMounted(async () => {
    await prod.getProducts()
})
</script>
<template>
    <HomeSkeleton>
        <template v-slot:header>
            <HeroSlide :boostedProducts="prod.products" />
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
                            <ProductPage :products="prod.products" />
                        </div>
                        <div class="view-all text-center" data-aos="fade-up" data-aos-duration="700">
                            <RouterLink class="btn-primary" to="/shop">VIEW ALL</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <!-- collection end -->
        </template>
        <template v-slot:popular>
            <div class="featured-collection mt-100 overflow-hidden">
                <div class="collection-tab-inner">
                    <div class="container">
                        <div class="section-header text-center">
                            <h2 class="section-heading">Popular Products</h2>
                        </div>
                        <div class="row">
                            <DiscountedSlide :products="prod.products" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </HomeSkeleton>
<i class="far fa-heart"></i>
    <Testimonial />
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