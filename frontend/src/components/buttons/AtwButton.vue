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
    <a type="button" class="wishlist-btn card-wishlist" @click="wish.addWishlist(product_id)">
        <i class="far fa-heart fa-2x text-dark"></i>
    </a>
</template>