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
import QuickView from "./QuickView.vue";
import ProductCard from "./ProductCard.vue"
import { ref } from "vue";
const item = ref({})
const modalShow = async (p) => {
  item.value = p
}

</script>

<template>
  <div class="collection-product-container">
  
    <div class="row">
      <template v-for="(product, index) in products" v-bind:key="product.product.product.slug">
        <div class="col-lg-3 col-md-4 col-6" sdata-aos="fade-up" :data-aos-duration="200 * (index + 1)">
          <button @click="prod.addToCart(product)">Add</button>
          <ProductCard :name="product.product.product.name" :price="product.product.product.new_price"
            :costPrice="product.product.product.price" :product_id="product.product.id" v-if="product.product.images.length"
            :image="'http://127.0.0.1:8000'+product.product.images[0].img" :discount="product.product.product.discount" :condition="product.product.condition"
            @addCart="prod.addToCart(product.id)" @addWish="wish.addWishlist(product.product.product.id)"
            @click="modalShow(product)" />
        </div>
      </template>

      <div class="pagination justify-content-center mt-100" v-if="show">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link" aria-label="Previous" @click="prod.prevPage" :disabled="!prod.hasPrev">
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            <li :class="`page-item ${i === prod.pages.offset + 1 ? 'active' : ''}`" v-for="i in prod.pages.items()"
              v-bind:key="i"><a class="page-link" disabled>{{ i }}</a></li>
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
  <!-- product quickview start -->
  <QuickView :item="item" @addCart="prod.addToCart(item)" @addWish="prod.addToCart(item.id)" />
  <!-- product quickview end -->
</template>