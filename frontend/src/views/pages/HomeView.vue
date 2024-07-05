<script setup>
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/categories';
import HomeSkeleton from "@/components/home/HomeSkeleton.vue"
import HeroSlide from "@/components/home/HeroSlide.vue"
//import Testimonial from "@/components/home/Testimonial.vue"
import ProductPage from "@/components/ProductPage.vue"
import { useProductStore } from '@/stores/products';
import CategoriesSlide from "@/components/home/CategoriesSlide.vue"
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
            <HeroSlide :boostedProducts="prod.products" v-if="prod.products.length" />
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
                <p class="text_16 text-white mb-3">Corporate clients and leisure travelers has been relying on
                  Groundlink for dependable, safe, and professional chauffeured car service in major cities across
                  World. Indeed, it has been more than one decade and five years that Groundlink.</p>
                <div class="view-all mt-4">
                  <a class="btn-secondary" href="collection-left-sidebar.html">SHOP TOOLS</a>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-12 align-self-center">
              <CategoriesSlide />

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
                            <ProductPage :products="prod.products" v-if="prod.products.length" />
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
            <div class="featured-collection mt-100 overflow-hidden">
                <div class="collection-tab-inner">
                    <div class="container">
                        <div class="section-header text-center">
                            <h2 class="section-heading">Discounted Products</h2>
                        </div>
                        <div class="row">
                            <DiscountedSlide :products="prod.products" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </HomeSkeleton>
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