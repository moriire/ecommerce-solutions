<script setup>
import { useProductStore } from '@/stores/products';
import { RouterLink } from 'vue-router';
const prod = useProductStore()
</script>

<template>
  <div class="checkout-page mt-100">
    <div class="container">
      <div class="checkout-page-wrapper">
        <div class="row">
          <div class="col-xl-9 col-lg-8 col-md-12 col-12">
            <div class="section-header mb-3">
              <h2 class="section-heading">Check out</h2>
            </div>

            <div class="checkout-progress overflow-hidden">
              <ol class="checkout-bar px-0">
                <li class="progress-step step-done"><a href="cart.html">Cart</a></li>
                <li class="progress-step step-active"><a href="checkout.html">Your Details</a></li>
                <li class="progress-step step-todo"><a href="checkout.html">Shipping</a></li>
                <li class="progress-step step-todo"><a href="checkout.html">Payment</a></li>
                <li class="progress-step step-todo"><a href="checkout.html">Review</a></li>
              </ol>
            </div>

            <div class="checkout-user-area overflow-hidden d-flex align-items-center">
              <div class="checkout-user-img me-4">
                <img src="/src/assets/img/checkout/user.jpg" alt="img">
              </div>
              <div class="checkout-user-details d-flex align-items-center justify-content-between w-100">
                <div class="checkout-user-info">
                  <h2 class="checkout-user-name">Susan Gardner</h2>
                  <p class="checkout-user-address mb-0">2752 avenue Royale, Quebec, G1R 2B2, Canada</p>
                </div>

                <a href="#" class="edit-user btn-secondary">EDIT PROFILE</a>
              </div>
            </div>

            <div class="shipping-address-area">
              <h2 class="shipping-address-heading pb-1">Shipping address</h2>
              <div class="shipping-address-form-wrapper">
                <form action="#" class="shipping-address-form common-form">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">First name</label>
                        <input type="text" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Last name</label>
                        <input type="text" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Email address</label>
                        <input type="email" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Phone number</label>
                        <input type="text" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Company</label>
                        <input type="text" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Country</label>
                        <select class="form-select">
                          <option selected="ca">Canada</option>
                          <option value="us">USA</option>
                          <option value="au">Australia</option>
                          <option value="me">Mexico</option>
                        </select>
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">City</label>
                        <select class="form-select">
                          <option selected="ca">Toronto</option>
                          <option value="us">Quebec</option>
                          <option value="au">Windsor</option>
                          <option value="me">Calgary</option>
                        </select>
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Zip code</label>
                        <input type="text" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Address 1</label>
                        <input type="text" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Address 2</label>
                        <input type="text" />
                      </fieldset>
                    </div>
                  </div>

                </form>
              </div>
            </div>

            <div class="shipping-address-area billing-area">
              <h2 class="shipping-address-heading pb-1">Billing address</h2>
              <div class="form-checkbox d-flex align-items-center mt-4">
                <input class="form-check-input mt-0" type="checkbox">
                <label class="form-check-label ms-2">
                  Same as shipping address
                </label>
              </div>
            </div>
            <div class="shipping-address-area billing-area">
              <div class="minicart-btn-area d-flex align-items-center justify-content-between flex-wrap">
                <RouterLink to="/cart" class="checkout-page-btn minicart-btn btn-secondary">BACK TO CART</RouterLink>
                <a href="checkout.html" class="checkout-page-btn minicart-btn btn-primary">PROCEED TO SHIPPING</a>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-12 col-12">
            <div class="cart-total-area checkout-summary-area">
              <h3 class="d-none d-lg-block mb-0 text-center heading_24 mb-4">Order summary</h3>
                <div class="minicart-item d-flex" v-for="(cart, index) in prod.cartItems" v-bind:key="index">
                  <div class="mini-img-wrapper">
                    <img class="mini-img" src="/src/assets/img/products/furniture/2.jpg" alt="img">
                  </div>
                  <div class="product-info">
                    <h2 class="product-title"><a href="#">Eliot Reversible Sectional</a></h2>
                    <p class="product-vendor">&#x20A6;150 x 1</p>
                  </div>
                </div>

                <div class="cart-total-box mt-4 bg-transparent p-0">
                  <div class="subtotal-item subtotal-box">
                    <h4 class="subtotal-title">Subtotals:</h4>
                    <p class="subtotal-value">&#x20A6;{{ prod.cartSubtotal }}</p>
                  </div>
                  <div class="subtotal-item shipping-box">
                    <h4 class="subtotal-title">Shipping:</h4>
                    <p class="subtotal-value">&#x20A6;10.00</p>
                  </div>
                  <div class="subtotal-item discount-box">
                    <h4 class="subtotal-title">Discount:</h4>
                    <p class="subtotal-value">&#x20A6;{{ prod.cartTotalDiscount }}</p>
                  </div>
                  <hr />
                  <div class="subtotal-item discount-box">
                    <h4 class="subtotal-title">Total:</h4>
                    <p class="subtotal-value">&#x20A6;1000.00</p>
                  </div>


                  <div class="mt-4 checkout-promo-code">
                    <input class="input-promo-code" type="text" placeholder="Promo code" />
                    <a href="checkout.html" class="btn-apply-code position-relative btn-secondary text-uppercase mt-3">
                      Apply Promo Code
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>