<script setup>
import { useWishlistStore } from '@/stores/wishlist';
import { RouterLink } from 'vue-router';


const emit = defineEmits(["addCart", "addWish"])

function addedCart(param) {
  emit("addCart", param)
  window.console.log("hello")
}

//const wishEmit = defineEmits("addWish")

function addedWish(param) {
  emit("addWish", param)
  window.console.log("hello")
}

defineProps({
  product_id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    //required: true,
    default: "Something"
  },
  costPrice: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  condition: {
    type: String,
    required: true
  },

})
</script>
<template>
  <div class="product-card">
      <div class="product-card-img">
        <RouterLink class="hover-switch" :to="{name: 'product-detail', params:{product: product_id}}">
          <div class="product-badge">
            <span class="badge-label badge-percentage rounded">{{ discount > 0 ? `-${discount}%` : condition }}</span>
          </div>
          <img class="primary-img" :src="image" alt="product-img">
          <!--img class="primary-img" src="/src/assets/img/products/bags/1.jpg" alt="product-img"-->
        </RouterLink>

        <div class="product-card-action product-card-action-2">
          <a href="#quickview-modal" class="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
          <button  class="addtocart-btn btn-primary" type="button" @click="addedCart" >ADD TO CART</button>
        </div>

        <a type="button" class="wishlist-btn card-wishlist"  @click="addedWish">
          <i class="far fa-heart fa-2x text-dark"></i>
        </a>
      </div>
      <div class="product-card-details text-center">
        <h3 class="product-card-title"><a href="collection-left-sidebar.html">{{ name }}</a>
        </h3>
        <div class="product-card-price">
          <span class="card-price-regular">&#x20A6;{{ price }}</span>
          <span class="card-price-compare text-decoration-line-through" v-if="discount>0">&#x20A6;{{ costPrice }}</span>
        </div>
      </div>
    </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
