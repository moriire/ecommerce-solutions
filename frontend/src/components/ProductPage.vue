<script setup>
defineProps({
  products: {
    type: Array,
    required: true
  },
  show: {
    type: Boolean,
    default: false,
  }
})
import PagesBase from "@/views/PagesBase.vue";
import ProductCard from "./ProductCard.vue"
import { useProductStore } from '@/stores/products';
const prod = useProductStore();
</script>

<template>
  <div class="collection-product-container">
    <div class="row">
      <template v-for="product in products" v-bind:key="product.slug">
        <!--button @click="prod.addToCart(product)">Add({{ prod.cartItems.length }})</button-->
        <ProductCard :name="product.name" :price="product.new_price" :costPrice="product.price"
          :discount="product.discount" :condition="product.condition" @addCart="prod.addToCart(product)" />
      </template>

      <div class="pagination justify-content-center mt-100" v-if="show">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button  class="page-link" aria-label="Previous"  @click="prod.prevPage" :disabled="!prod.hasPrev">
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li :class="`page-item ${i===prod.pages.offset+1 ? 'active' : ''}`" v-for="i in prod.pages.items()" v-bind:key="i"><a class="page-link" disabled>{{ i }}</a></li>
            <li class="page-item">
              <button class="page-link" aria-label="Next" @click="prod.nextPage" :disabled="!prod.hasNext">
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>