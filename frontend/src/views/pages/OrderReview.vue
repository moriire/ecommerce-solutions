<script setup>
import CartItem from '@/components/CartItem.vue';
import { usePaymentStore } from '@/stores/payment';
import { useProductStore } from '@/stores/products';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import axiosInstance from '@/axios';
import { useAuthStore } from '@/stores/auth';
const user = useAuthStore()
const prod = useProductStore();
const pay = usePaymentStore();
//const payment = pay.doPayment(prod.orders.created_by.email, 20000, {
//    "cart_id": prod.id})

onMounted(async () => {
  await prod.getCart(),
  await prod.getOrders()
})
</script>

<template>
  <div class="cart-page mt-100">
    <div class="container">
      <div class="cart-page-wrapper">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-12">
            <table class=".cart-table .w-100 table align-middle  table-hover .table-striped">
              <thead>
                <tr>
                  <th class="cart-caption heading_18">Product</th>
                  <th class="cart-caption heading_18"></th>
                  <th class="cart-caption text-center heading_18 d-none d-md-table-cell">Quantity</th>
                  <th class="cart-caption text-end heading_18">Price</th>
                </tr>
              </thead>
              <tbody v-if="prod.orders.carts">
               <tr class="cart-item" v-for="(cart, index) in prod.orders.carts" v-bind:key="index">
                  <td class="cart-item-media">
                    <div class="mini-img-wrapper" v-if="cart.product.images">
                      <img class="mini-img" :src="cart.product.images[0].img.startsWith('/media') ? 'http://127.0.0.1:8000' + cart.product.images[0].img: cart.product.images[0].img" alt="img">
                    </div>
                  </td>
                  <td class="cart-item-details">
                    <h2 class="product-title"><RouterLink :to="{name: 'product-detail', params: { product: cart.product.product.id} }">{{ cart.product.product.name }}</RouterLink></h2>
                    <!--p class="product-vendor">{{ cart.product.product.profile.user.store_name || cart.product.product.profile.user.last_name  }}</p-->
                    <p class="product-vendor">{{ cart.product.product.discount }}% discount of {{ cart.product.product.price  }}</p>
                  </td>
                  <td class="cart-item-quantity">
                    <div class="quantity d-flex align-items-center justify-content-between">
                      <button class="qty-btn dec-qty" @click="()=>prod.decCart(cart.id, cart.count - 1)" ><img src="/src/assets/img/icon/minus.svg" alt="minus"></button>
                      <input class="qty-input" type="number" v-model="cart.count"  :min="1" :max="12" >
                      <button class="qty-btn inc-qty" @click="()=>prod.incCart(cart.id, cart.count + 1)" ><img src="/src/assets/img/icon/plus.svg" alt="plus"></button>
                    </div>
                    <a href="#" class="product-remove mt-2" @click="prod.deleteCart(cart.id)">Remove</a>
                  </td>
                  <td class="cart-item-price text-end">
                    <div class="product-price">&#x20A6;{{ cart.product.product.new_price }}</div>
                  </td>
                </tr>

              </tbody>
              <div v-else>
                <h2>No Item Ordered !!!</h2>
                <p>
                  Return to <RouterLink to="/">home</RouterLink> to add product to cart
                </p>
              </div>
            </table>
          </div>
          <div class="col-lg-6 col-md-12 col-12">
            <div class="cart-total-area">
              <!--h3 class="cart-total-title d-none d-lg-block mb-0">Cart Totals</h3-->
              <div class="cart-total-box mt-4">
                <div class="subtotal-item subtotal-box">
                  <h4 class="subtotal-title">Subtotals:</h4>
                  <p class="subtotal-value">&#x20A6;{{ prod.cartSubtotalReview }}</p>
                </div>
                <div class="subtotal-item shipping-box">
                  <h4 class="subtotal-title">Shipping:</h4>
                  <p class="subtotal-value">&#x20A6;10.00</p>
                </div>
                <hr />
                <div class="subtotal-item discount-box">
                  <h4 class="subtotal-title">Total:</h4>
                  <p class="subtotal-value">&#x20A6;{{ prod.cartSubtotal - prod.cartTotalDiscount }}</p>
                </div>
                <p class="shipping_text">Shipping & taxes calculated at checkout</p>
                <div class="d-flex justify-content-center mt-4">
                  <button class="btn btn-secondary" @click="pay.doPayment(prod.orders.created_by.email, 20000, {
                    'cart_id': prod.orders.id,
                    'cancel_action': 'http://127.0.0.1:8000/transaction/cancelled'})">Pay</button>
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