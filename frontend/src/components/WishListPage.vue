<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  },
  show: {
    type: Boolean,
    default: false,
  }
})
import QuickView from "./QuickView.vue";
import ProductCard from "./ProductCard.vue"
import { ref } from "vue";
import { useProductStore } from "@/stores/products";
import { useWishlistStore } from "@/stores/wishlist";
const item = ref({})
const modalShow = async (p) => {
  item.value = p
}
const prod = useProductStore()
const wish = useWishlistStore()
</script>

<template>
  <div class="collection-product-container">
    <div class="row">
      <template v-for="(product, index) in products" v-bind:key="product.product.product.slug" >
        <div class="col-lg-3 col-md-4 col-6" data-aos="fade-up" :data-aos-duration="200 * (index + 1)">
          
          <ProductCard :product="product.product"
            :image="'http://127.0.0.1:8000'+product.product.images[0].img" 
            @click="modalShow(product.product)" cta="remove" :del-object-id="product.id" />

        </div>
      </template>

    </div>
  </div>
  <!-- product quickview start -->
  
  <QuickView :item="item" @addCart="prod.addToCart(item.product.id)" @addWish="wish.addWishlist(item.product.id)" />
  <!-- product quickview end -->
</template>