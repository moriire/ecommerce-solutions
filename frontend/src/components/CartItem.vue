<script setup>
import { onMounted } from 'vue';
const emit = defineEmits(["removeCart"])

function removedCart(param) {
    emit("removeCart", param)
    console.log("hello")
};
defineProps({
    name: {
        type: Array,
        required: true
    },
    price: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <!-- minicart item -->
    <div class="minicart-item d-flex">
        <div class="mini-img-wrapper">
            <img class="mini-img" src="/src/assets/img/products/furniture/1.jpg" alt="img">
        </div>
        <div class="product-info">
            <h2 class="product-title"><a href="#">{{ name }}</a></h2>
            <p class="product-vendor">XS / Dove Gray</p>
            <div class="misc d-flex align-items-end justify-content-between">
                <div class="quantity d-flex align-items-center justify-content-between">
                    <button class="qty-btn dec-qty"><img src="/src/assets/img/icon/minus.svg" alt="minus"></button>
                    <input class="qty-input" type="number" name="qty" value="1" min="0">
                    <button class="qty-btn inc-qty"><img src="/src/assets/img/icon/plus.svg" alt="plus"></button>
                </div>
                <div class="product-remove-area d-flex flex-column align-items-end">
                    <div class="product-price">${{ price }}</div>
                    <a href="#" class="product-remove" @click="removedCart" type="button">Remove</a>
                </div>
            </div>
        </div>
    </div>
</template>