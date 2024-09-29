<script setup>
import { ref } from 'vue';
import { useWishlistStore } from '@/stores/wishlist';
defineProps({
    product_id: {
        type: Number,
        required: true
    }
})
const wish = useWishlistStore()
</script>
<template>
    <a type="button" class="wishlist-btn card-wishlist" @click="wish.deleteWish(product_id)">
        <i class="fa fa-times fa-2x text-dark"></i>
    </a>
</template>