<script setup>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProductPage from "@/components/ProductPage.vue"
import { useProductStore } from '@/stores/products';
import { useFilterStore } from '@/stores/filter';
const prod = useProductStore()
const filter = useFilterStore()
const route = useRoute()

onMounted(async () =>
    await filter.doPagination()
);
//watch(route, ()=> prod.getProducts())
</script>

<template>
    <!--Hero /-->

    <main id="MainContent" class="content-for-layout">
        <div class="collection mt-100">
            <div class="container">
                <div class="row">
                    <!-- product area start -->
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="filter-sort-wrapper d-flex justify-content-between flex-wrap">
                            <div class="collection-title-wrap d-flex align-items-end">
                                <h2 class="collection-title heading_24 mb-0">All products</h2>
                                <p class="collection-counter text_16 mb-0 ms-2">({{ prod.products.length }} items)</p>
                            </div>
                            <div class="filter-sorting">
                                <div class="collection-sorting position-relative d-none d-lg-block">
                                    <div class="sorting-header text_16 d-flex align-items-center justify-content-end">
                                        <span class="sorting-title me-2">Sort by:</span>
                                        <span class="active-sorting">Featured</span>
                                        <span class="sorting-icon">
                                            <svg uclass="icon icon-down" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                class="feather feather-chevron-down">
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </span>
                                    </div>
                                    <ul class="sorting-lists list-unstyled m-0">
                                        <li><a href="#" class="text_14">Featured</a></li>
                                        <li><a href="#" class="text_14">Best Selling</a></li>
                                        <li><a href="#" class="text_14">Alphabetically, A-Z</a></li>
                                        <li><a href="#" class="text_14">Alphabetically, Z-A</a></li>
                                        <li><a href="#" class="text_14">Price, low to high</a></li>
                                        <li><a href="#" class="text_14">Price, high to low</a></li>
                                        <li><a href="#" class="text_14">Date, old to new</a></li>
                                        <li><a href="#" class="text_14">Date, new to old</a></li>
                                    </ul>
                                </div>
                                <div class="filter-drawer-trigger mobile-filter d-flex align-items-center d-lg-none">
                                    <span class="mobile-filter-icon me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="icon icon-filter">
                                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                        </svg>
                                    </span>
                                    <span class="mobile-filter-heading">Sorting</span>
                                </div>
                            </div>
                        </div>
                        <div class="collection-product-container">
                            <div class="row">

                                <ProductPage :products="filter.filtered" />

                            </div>
                        </div>
                        <div class="pagination justify-content-center mt-100">
                            <nav>
                                <ul class="pagination pagination-md">
                                    <li class="page-item">
                                        <a class="link" @click="filter.doPagination()">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" class="icon icon-left">
                                                <polyline points="15 18 9 12 15 6"></polyline>
                                            </svg>
                                        </a>
                                    </li>
                                    <li :class="`page-item ${filter.page.pageCount === i? 'active' : ''}`" v-for="(i, j) in filter.page.totalPages" v-bind:key="j">
                                        <a class="page-link" href="#">{{ i }}</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="link" type="button" @click="filter.doPagination()">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" class="icon icon-right">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            
                        </div>
                    </div>
                    <!-- product area end -->

                    <!--ShopSidebar /-->
                </div>
            </div>
        </div>
    </main>


</template>