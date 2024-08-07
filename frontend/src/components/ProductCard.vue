<script setup>
import { useWishlistStore } from '@/stores/wishlist';
import { RouterLink } from 'vue-router';
import AtcButton from "./buttons/AtcButton.vue"
import AtwButton from './buttons/AtwButton.vue';

defineProps({
  product: {
    type: Object,
    required: true
  },
  image: {
    type: String,
    required: true
  },
})
</script>
<template>
   {{  product  }}
  <div class="product-card">
   
      <div class="product-card-img">
        <RouterLink class="hover-switch" :to="{name: 'product-detail', params:{product: product.id}}">
          <div class="product-badge">
            <span class="badge-label badge-percentage rounded">{{ product.discount > 0 ? `-${product.discount}%` : product.condition }}</span>
          </div>
          <img class="primary-img" :src="image.startsWith('/media')? 'http://127.0.0.1:8000'+ image:image" alt="product-img">
          </RouterLink>

        <div class="product-card-action product-card-action-2">
          <a href="#quickview-modal" class="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
          
              <AtcButton :product="product" />
        </div>
        <AtwButton :product="product.id" />
      </div>
      <div class="product-card-details text-center">
        <h3 class="product-card-title"><a href="collection-left-sidebar.html">{{ product.name }}</a>
        </h3>
        <div class="product-card-product.price">
          <span class="card-product.price-regular">&#x20A6;{{ product.price }}</span>
          <span class="card-product.price-compare text-decoration-line-through" v-if="product.discount>0">&#x20A6;{{ product.new_price }}</span>
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
