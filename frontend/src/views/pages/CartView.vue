<script setup>
import CartItem from '@/components/CartItem.vue';
import { useProductStore } from '@/stores/products';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
const prod = useProductStore()
onMounted(async () => {
  await prod.getCart(),
  await prod.getProducts()
})
</script>

<template>
  <!-- breadcrumb start -->
  <div class="breadcrumb">
    <div class="container">
      <ul class="list-unstyled d-flex align-items-center m-0">
        <li><a href="/">Home</a></li>
        <li>
          <svg class="icon icon-breadcrumb" width="64" height="64" viewBox="0 0 64 64" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.4">
              <path
                d="M25.9375 8.5625L23.0625 11.4375L43.625 32L23.0625 52.5625L25.9375 55.4375L47.9375 33.4375L49.3125 32L47.9375 30.5625L25.9375 8.5625Z"
                fill="#000" />
            </g>
          </svg>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  <!-- breadcrumb end -->
  <div class="cart-page mt-100">
    <div class="container">
      <div class="cart-page-wrapper">
        <div class="row">
          <div class="col-lg-7 col-md-12 col-12">
            <table class="cart-table w-100">
              <thead>
                <tr>
                  <th class="cart-caption heading_18">Product</th>
                  <th class="cart-caption heading_18"></th>
                  <th class="cart-caption text-center heading_18 d-none d-md-table-cell">Quantity</th>
                  <th class="cart-caption text-end heading_18">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr class="cart-item" v-for="(cart, index) in prod.cartItems" v-bind:key="index">
                  <td class="cart-item-media">
                    <div class="mini-img-wrapper">
                      <img class="mini-img" :src="cart.images[0].img.startsWith('/media') ? 'http://127.0.0.1:8000' + cart.images[0].img: cart.images[0].img" alt="img">
                    </div>
                  </td>
                  <td class="cart-item-details">
                    <h2 class="product-title"><RouterLink :to="{name: 'product-detail', params: { product: cart.product.id} }">{{ cart.product.name }}</RouterLink></h2>
                    <p class="product-vendor">{{ cart.product.profile.store_name || cart.product.profile.last_name  }}</p>
                  </td>
                  <td class="cart-item-quantity">
                    <div class="quantity d-flex align-items-center justify-content-between">
                      <button class="qty-btn dec-qty" @click="()=>cart.count -= 1" ><img src="/src/assets/img/icon/minus.svg" alt="minus"></button>
                      <input class="qty-input" type="number" v-model="cart.count"  :min="1" :max="12" >
                      <button class="qty-btn inc-qty" @click="()=>cart.count += 1" ><img src="/src/assets/img/icon/plus.svg" alt="plus"></button>
                    </div>
                    <a href="#" class="product-remove mt-2" @click="prod.deleteCartLocal(cart)">Remove</a>
                  </td>
                  <td class="cart-item-price text-end">
                    <div class="product-price">&#x20A6;{{ cart.product.price }}</div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <div class="col-lg-5 col-md-12 col-12">
            <div class="cart-total-area">
              <h3 class="cart-total-title d-none d-lg-block mb-0">Cart Totals</h3>
              <div class="cart-total-box mt-4">
                <div class="subtotal-item subtotal-box">
                  <h4 class="subtotal-title">Subtotals:</h4>
                  <p class="subtotal-value">&#x20A6;{{ prod.cartSubtotal }}</p>
                </div>
                <div class="subtotal-item shipping-box">
                  <h4 class="subtotal-title">Shipping:</h4>
                  <p class="subtotal-value">&#x20A6;0.00</p>
                </div>
                <div class="subtotal-item discount-box">
                  <h4 class="subtotal-title">Discount:</h4>
                  <p class="subtotal-value">&#x20A6;{{ prod.cartTotalDiscount }}</p>
                </div>
                <hr />
                <div class="subtotal-item discount-box">
                  <h4 class="subtotal-title">Total:</h4>
                  <p class="subtotal-value">&#x20A6;{{ prod.cartSubtotal - prod.cartTotalDiscount }}</p>
                </div>
                <p class="shipping_text">Shipping & taxes calculated at checkout</p>
                <div class="d-flex justify-content-center mt-4">
                  <RouterLink to="/checkout" class="position-relative btn-primary text-uppercase">
                    Procced to checkout
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>