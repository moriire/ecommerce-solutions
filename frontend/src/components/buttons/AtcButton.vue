<script setup>
import { ref } from 'vue';
import { useProductStore } from "@/stores/products.js"
defineProps({
product_id:{
  type: Object,
  required: true
}
})
const prod = useProductStore()
</script>
<template>
    <button  class="addtocart-btn btn-primary" type="button" @click="prod.addToCartLocal(product_id)" >ADD TO CART</button>
</template>