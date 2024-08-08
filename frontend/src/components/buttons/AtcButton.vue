<script setup>
import { ref } from 'vue';
import { useProductStore } from "@/stores/products.js"
const prop = defineProps({
product_obj:{
  type: Object,
  required: true
}
})
const prod = useProductStore()
</script>
<template>
    <button  class="addtocart-btn btn-primary" type="button" @click="prod.addToCartLocal(prop.product_obj)" >ADD TO CART</button>
</template>