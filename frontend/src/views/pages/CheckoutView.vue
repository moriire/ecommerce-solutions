<script setup>
import { useAuthStore } from '@/stores/auth';
import { useProductStore } from '@/stores/products';
import { useShippingStore } from '@/stores/shipping';
import { onBeforeMount, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
const prod = useProductStore()
const ship = useShippingStore()
const auth = useAuthStore()
const current = ref(!true)
onMounted(async () => {
  await ship.getShipping();
    await ship.getShippingCost()
})

</script>

<template>
  <div class="checkout-page mt-100">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 col-lg-8 col-md-12 col-12">
          <!--div class="section-header mb-3">
              <h2 class="section-heading">Check out</h2>
            </div-->

          <!--div class="checkout-progress overflow-hidden">
              <ol class="checkout-bar px-0">
                <li class="progress-step step-done"><a href="cart.html">Cart</a></li>
                <li class="progress-step step-active"><a href="checkout.html">Your Details</a></li>
                <li class="progress-step step-todo"><a href="checkout.html">Shipping</a></li>
                <li class="progress-step step-todo"><a href="checkout.html">Payment</a></li>
                <li class="progress-step step-todo"><a href="checkout.html">Review</a></li>
              </ol>
            </div-->

          <!--div class=".checkout-user-area overflow-hidden d-flex align-items-center border border-top p-3 text-dark">
              <div class="checkout-user-img me-4">
                <img src="/src/assets/img/checkout/user.jpg" alt="img">
              </div>
              <div class="checkout-user-details d-flex align-items-center justify-content-between w-100">
                <div class="checkout-user-info">
                  <h2 class=".checkout-user-name">{{ auth.userInfo.username }}</h2>
                  <p class=".checkout-user-address mb-0">2752 avenue Royale, Quebec, G1R 2B2, Canada</p>
                </div>

                <RouterLink to="/profile" class="edit-user btn-secondary">EDIT PROFILE</RouterLink>
              </div>
            </div-->
          <div class="header">
            <h2 class=".pb-1">Billing address</h2>
          </div>
          <div class="shipping-address-area">
            <h2 class="shipping-address-heading pb-1">Shipping address</h2>
            <div class=".shipping-address-form-wrapper">
              <form @submit.prevent="prod.addForShipping">
                <div class="row mb-3">
                  <div class="col-lg-6 col-md-12 col-12">
                    <label class="form-label" for="first_name">First name</label>
                    <input required id="first_name" class="form-control" v-model="ship.shippingDetail.first_name" />
                  </div>
                  <div class="col-lg-6 col-md-12 col-12">
                    <label class="form-label" for="last_name">Last name</label>
                    <input required id="last_name" class="form-control" v-model="ship.shippingDetail.last_name" />
                  </div>
                  <div class="col-lg-6 col-md-12 col-12">
                    <label class="form-label" for="email">Email address</label>
                    <input required id="email" class="form-control" type="email" v-model="ship.shippingDetail.email" />
                  </div>
                  <div class="col-lg-6 col-md-12 col-12">
                    <label class="form-label" for="phone">Phone number</label>
                    <input required id="phone" class="form-control" v-model="ship.shippingDetail.phone" />
                  </div>
                  <div class="col-lg-6 col-md-12 col-12">
                    <label class="form-label" for="country">Country</label>
                    <select required id="country" class="form-select" v-model="ship.shippingDetail.country">
                      <option selected value="Nigeria">Nigeria</option>
                    </select>
                  </div>
                  <div class="col-lg-6 col-md-12 col-12">
                    <label class="form-label" for="city">City</label>
                    <select required class="form-select" v-model="ship.shippingDetail.city">
                      <option selected value="city">Select City</option>
                      <option :value="loc.id" v-for="loc in ship.getShippingCostData">{{ loc.city }}</option>
                    </select>
                  </div>
                  <div class="col-md-12 col-12">
                    <label class="form-label" for="address">Address</label>
                    <input required id="address" class="form-control" v-model="ship.shippingDetail.address"
                      length="20" />
                  </div>
                </div>
                <div class="col-md-12 col-12">
                  <div class="d-flex align-items-center justify-content-between flex-wrap">
                    <RouterLink type="button" to="/cart" class="checkout-page-btn minicart-btn btn-secondary">BACK TO
                      CART
                    </RouterLink>
                    <input class="checkout-page-btn minicart-btn btn-primary" type="submit" value="CREATE ORDER">
                    <!--div class="input-group-text btn-primary" id="basic" v-show="loading" :disbled="disabled">
                  <span class="spinner-border spinner-border-sm" aria-hidden="true">
                  </span>
                </div-->
                  </div>

                </div>
              </form>
            </div>
          </div>
          
        </div>
        <div class="col-xl-3 col-lg-4 col-md-12 col-12">
          <div class="cart-total-area checkout-summary-area">
            <h3 class="d-none d-lg-block mb-0 text-center heading_24 mb-4">Order summary</h3>
            <div class="minicart-item d-flex" v-for="(cart, index) in prod.cartItems" v-bind:key="index">
              <div class="mini-img-wrapper">
                <img class="mini-img"
                  :src="cart.images[0].img.startsWith('/media') ? 'http://127.0.0.1:8000' + cart.images[0].img : cart.images[0].img"
                  alt="img">
              </div>
              <div class="product-info">
                <h2 class="product-title"><a href="#">{{ cart.product.name }}</a></h2>
                <p class="product-vendor">&#x20A6;{{ cart.product.new_price }} x {{ cart.count }}</p>
              </div>
            </div>

            <div class="cart-total-box mt-4 bg-transparent p-0">
              <div class="subtotal-item subtotal-box">
                <h4 class="subtotal-title">Subtotals:</h4>
                <p class="subtotal-value">&#x20A6;{{ prod.cartSubtotal }}</p>
              </div>
              <div class="subtotal-item shipping-box">
                <h4 class="subtotal-title">Shipping:</h4>
                <p class="subtotal-value" v-if="!ship.shippingCost[0]">loading</p>
                <p class="subtotal-value" v-else>&#x20A6;{{ ship.shippingCost[0].price || 0 }}</p>
              </div>
              <div class="subtotal-item discount-box">
                <h4 class="subtotal-title">Discount:</h4>
                <p class="subtotal-value">&#x20A6;{{ prod.cartTotalDiscount }}</p>
              </div>
              <hr />
              <div class="subtotal-item discount-box">
                <h4 class="subtotal-title">Total:</h4>
                <p class="subtotal-value" v-if="ship.shippingCost[0]">&#x20A6;{{ prod.cartSubtotal +
                  ship.shippingCost[0].price - prod.cartTotalDiscount }}</p>
              </div>
              <!--div class="mt-4 checkout-promo-code">
                    <input class="form-control" class="input-promo-code" type="text" placeholder="Promo code" />
                    <a href="checkout.html" class="btn-apply-code position-relative btn-secondary text-uppercase mt-3">
                      Apply Promo Code
                    </a>
                  </div-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>