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
import { useProductStore } from '@/stores/products';
import { useWishlistStore } from "@/stores/wishlist";
import { ref } from "vue";
import AtcButton from "./buttons/AtcButton.vue";
const prod = useProductStore();
const wish = useWishlistStore();
const item = ref({})
const modalShow = async (p) => {
  item.value = p
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-3 col-md-4 col-6" data-aos="fade-up"  :data-aos-duration="200 * (index + 1)" v-for="(product, index) in products" v-bind:key="product.product.slug" >
          <!--button @click="prod.addToCart(product)">Add({{ prod.cartItems.length }})</button-->
          <ProductCard :name="product.product.name" :price="product.product.new_price"
            :costPrice="product.product.price" :product_id="product.product.id" v-if="product.images.length"
            :image="product.images[0].img" :discount="product.product.discount" :condition="product.product.condition"
             @addWish="wish.addWishlist(product.product.id)"
             @addCart="prod.addToCart(product.product.id)"
            @click="modalShow(product)" />

        </div>

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
  <QuickView :item="item"  />
  <!-- product quickview end -->
</template>