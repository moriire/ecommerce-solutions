<script setup>
import { onMounted, watch } from 'vue';
import { useRoute, onBeforeRouteUpdate, RouterView } from 'vue-router';
import CategorySlide from "@/components/CategorySlide.vue"
import { useBycategoriesStore } from '@/stores/bycategories';
import { useCategoryStore } from '@/stores/categories';
const route = useRoute()
const bycat = useBycategoriesStore()
onMounted(async () => await bycat.getProductsByCategory(route.params.categories_slug));
onBeforeRouteUpdate(async (to, from) => {
    console.log(to.params)
    await bycat.getProductsByCategory(to.params.categories_slug)
})
const cat = useCategoryStore()
</script>

<template>
     <!-- banner start -->
     <div class="banner-section mt-100 overflow-hidden">
                <div class="banner-section-inner">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1200">
                                <a class="banner-item position-relative rounded" href="collection-left-sidebar.html">
                                    <img class="banner-img" src="/src/assets/img/banner/shoe-1.jpg" alt="banner-1">
                                    <div class="content-absolute content-slide">
                                        <div class="container height-inherit d-flex align-items-center">
                                            <div class="content-box banner-content p-4">
                                                <p class="heading_18 mb-3 text-white">Sports Shoes</p>
                                                <h2 class="heading_34 text-white">25% off for <br>sports men</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-6 col-md-6 col-12" data-aos="fade-left" data-aos-duration="1200">
                                <a class="banner-item position-relative rounded" href="collection-left-sidebar.html">
                                    <img class="banner-img" src="/src/assets/img/banner/shoe-2.jpg" alt="banner-2">
                                    <div class="content-absolute content-slide">
                                        <div class="container height-inherit d-flex align-items-center">
                                            <div class="content-box banner-content p-4">
                                                <p class="heading_18 mb-3 text-white">Sports Shoes</p>
                                                <h2 class="heading_34 text-white">25% off for <br>sports women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- banner end -->
    <RouterView />
</template>