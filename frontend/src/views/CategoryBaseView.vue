<script setup>
import { onMounted, watch } from 'vue';
import { useRoute, onBeforeRouteUpdate, RouterView } from 'vue-router';
import CategorySlide from "@/components/CategorySlide.vue"
import { useBycategoriesStore } from '@/stores/bycategories';
import { useCategoryStore } from '@/stores/categories';
const route = useRoute()
const bycat = useBycategoriesStore()
onMounted(async () => await bycat.getProductsByCategory(route.params.categories_slug));
onBeforeRouteUpdate(async (to, from) => {
    console.log(to.params)
    await bycat.getProductsByCategory(to.params.categories_slug)
})
const cat = useCategoryStore()
</script>

<template>
    <CategorySlide />
    <RouterView />
</template>