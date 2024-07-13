<script setup>
import { ref } from 'vue';
import { useProductStore } from "@/stores/products.js"
defineProps({
product_id:{
  type: Number,
  required: true
}
})
const prod = useProductStore()
</script>
<template>
    <button  class="addtocart-btn btn-primary" type="button" @click="prod.addToCart(product_id)" >ADD TO CART 1</button>
</template>