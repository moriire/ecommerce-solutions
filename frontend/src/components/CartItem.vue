<script setup>
import { onMounted } from 'vue';
const emit = defineEmits(["addCount", "subCount", "removedCart"])

function AddToCount (param) {
    emit("addCount", param)
    console.log("hello")
};

function subFromCount(param) {
    emit("subCount", param)
    console.log("hello")
};

function removedCart(param) {
    emit("removeCart", param)
    console.log("hello")
};

defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <!-- minicart item -->
    <div class="minicart-item d-flex" v-if="item">
        {{ item }}
        <!--div class="mini-img-wrapper">
            <img class="mini-img" :src="'http://127.0.0.1:8000'+item.product.images[0].img" alt="img">
        </div>
        <div class="product-info">{{  item.count }}
            <h2 class="product-title"><a href="#">{{ item.product.name }}</a></h2>
            <p class="product-vendor">{{ item.product.product.profile.user.store_name || item.product.product.profile.user.username  }}</p>
            <div class="misc d-flex align-items-end justify-content-between">
                <div class="quantity d-flex align-items-center justify-content-between">
                    <button class="qty-btn dec-qty" @click="subFromCount" ><img src="/src/assets/img/icon/minus.svg" alt="minus"></button>
                    <input class="qty-input" type="number" v-model="item.count" min="1">
                    <button class="qty-btn inc-qty"  @click="AddToCount" ><img src="/src/assets/img/icon/plus.svg" alt="plus"></button>
                </div>
                <div class="product-remove-area d-flex flex-column align-items-end">
                    <div class="product-price">&#x20A6;{{ item.product.product.price }}</div>
                    <a href="#" class="product-remove" @click="removedCart" type="button">Remove</a>
                </div>
            </div>
        </div-->
    </div>
</template>