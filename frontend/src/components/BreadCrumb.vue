<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
defineProps({
    loc: {
        type: String
    }
})
</script>
<template>
    <!--Teleport to="#breadcrumb"-->
    <div class="breadcrumb py-5 bg-warning m-0" id="breadcrumb" v-if="route.meta.loafs" >
        <div class="container .d-flex .justify-content-between text-center">
            <h2 class="text-center">WishList</h2>
            <ul class="list-unstyled m-0 breadcrumb text-center">
                <li v-for="k in Object.keys(route.meta.loafs)" class="breadcrumb-item">
                    <RouterLink :to="route.meta.loafs[k]">{{ k }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>