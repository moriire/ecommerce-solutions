<script setup>
import QuickView from '@/components/QuickView.vue';
import { useProductStore } from '@/stores/products';
import { useWishlistStore } from "@/stores/wishlist";
import { onMounted, ref, watch, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import ProductSingle from '@/components/ProductSingle.vue';
import DiscountedSlide from '@/components/home/DiscountedSlide.vue';
const prod = useProductStore();
const wish = useWishlistStore();
const route = useRoute()
watchEffect(
    async () => await prod.singeProduct(route.params.product)
)
onMounted(async () => await prod.singeProduct(route.params.product))

</script>
<template>
    <div class="product-page mt-100">
        <div class="container">
            <div class="row">
                <!-- product quickview start -->
                <ProductSingle :images="prod.product.images" :product="prod.product" @addCart="prod.addToCart(prod.product)"
                    @addWish="prod.addToCart(prod.product.id)" />
                <!-- product quickview end -->
            </div>
        </div>
    </div>

    <!-- you may also like start -->
    <div class="featured-collection-section mt-100 home-section overflow-hidden">
        <div class="container">
            <div class="section-header">
                <h2 class="section-heading">You may also like</h2>
            </div>

           <DiscountedSlide title="You May Also Like" :products="prod.products" />
        </div>
    </div>
    <!-- you may also lik end -->
</template>