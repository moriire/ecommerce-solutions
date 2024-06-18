<script setup>
const emit = defineEmits("addCart")

function addedCart(param) {
  emit("addCart", param)
  window.console.log("hello")
}
defineProps({
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
  discount: {
    type: Number,
    required: true
  },

})
</script>
<template>
  <div class="col-lg-3 col-md-4 col-6" sdata-aos="fade-up" sdata-aos-duration="200">
    <div class="product-card">
      <div class="product-card-img">
        <a class="hover-switch" href="collection-left-sidebar.html">
          <div class="product-badge">
            <span class="badge-label badge-percentage rounded">-{{ discount }}%</span>
          </div>
          <img class="primary-img" src="/src/assets/img/products/bags/11.jpg" alt="product-img">
          <!--img class="primary-img" src="/src/assets/img/products/bags/1.jpg" alt="product-img"-->
        </a>

        <div class="product-card-action product-card-action-2">
          <a href="#quickview-modal" class="quickview-btn btn-primary" data-bs-toggle="modal">QUICKVIEW</a>
          <button  class="addtocart-btn btn-primary" type="button" @click="addedCart" >ADD TO CART</button>
        </div>

        <a href="wishlist.html" class="wishlist-btn card-wishlist">
          <svg class="icon icon-wishlist" width="26" height="22" viewBox="0 0 26 22" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.96429 0.000183105C3.12305 0.000183105 0 3.10686 0 6.84843C0 8.15388 0.602121 9.28455 1.16071 10.1014C1.71931 10.9181 2.29241 11.4425 2.29241 11.4425L12.3326 21.3439L13 22.0002L13.6674 21.3439L23.7076 11.4425C23.7076 11.4425 26 9.45576 26 6.84843C26 3.10686 22.877 0.000183105 19.0357 0.000183105C15.8474 0.000183105 13.7944 1.88702 13 2.68241C12.2056 1.88702 10.1526 0.000183105 6.96429 0.000183105ZM6.96429 1.82638C9.73912 1.82638 12.3036 4.48008 12.3036 4.48008L13 5.25051L13.6964 4.48008C13.6964 4.48008 16.2609 1.82638 19.0357 1.82638C21.8613 1.82638 24.1429 4.10557 24.1429 6.84843C24.1429 8.25732 22.4018 10.1584 22.4018 10.1584L13 19.4036L3.59821 10.1584C3.59821 10.1584 3.14844 9.73397 2.69866 9.07411C2.24888 8.41426 1.85714 7.55466 1.85714 6.84843C1.85714 4.10557 4.13867 1.82638 6.96429 1.82638Z"
              fill="black" />
          </svg>
        </a>
      </div>
      <div class="product-card-details text-center">
        <h3 class="product-card-title"><a href="collection-left-sidebar.html">{{ name }}</a>
        </h3>
        <div class="product-card-price">
          <span class="card-price-regular">&#x20A6;{{ price }}</span>
          <span class="card-price-compare text-decoration-line-through">&#x20A6;{{ costPrice }}</span>
        </div>
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
