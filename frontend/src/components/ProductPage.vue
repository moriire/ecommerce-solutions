<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  }
})
import ProductCard from "./ProductCard.vue"
//import { useProductStore } from '@/stores/products';
//const prod = useProductStore();
</script>

<template>
  <template v-for="product in products" v-bind:key="product.slug">
    <!--button @click="prod.addToCart(product)">Add({{ prod.cartItems.length }})</button-->
    <ProductCard  
      :name="product.name" 
      :price="product.new_price" 
      :costPrice="product.price"
      :discount="product.discount"
      @addCart = "prod.addToCart(product)"
    />
  </template>
</template>