<script setup>
import { useProductcrudStore } from '@/stores/product-crud';
import { RouterLink } from 'vue-router';
const prodcrud = useProductcrudStore()
</script>

<template>
  <div class="checkout-page mt-100">
    <div class="container">
      <div class="checkout-page-wrapper">
        <div class="row">
          <div class="col-xl-7 col-lg-6 col-md-12 col-12">
            <div class="section-header mb-3">
              <h2 class="section-heading">Check out</h2>
            </div>


            <div class="shipping-address-area">
              <h2 class="shipping-address-heading pb-1">Add Products</h2>
              <div class="shipping-address-form-wrapper">
                <form class="shipping-address-form common-form" @submit.prevent="prodcrud.addProduct">
                  <div class="row">
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Product Name</label>
                        <input v-model="prodcrud.productData.name" type="text" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Price</label>
                        <input v-model="prodcrud.productData.price" type="number" min="1"/>
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Quantity</label>
                        <input v-model="prodcrud.productData.quantity" type="number" min="0" />
                      </fieldset>
                    </div>
                    <div class="col-lg-6 col-md-12 col-12">
                      <fieldset>
                        <label class="label">Package</label>
                        <select class="form-select" v-model="prodcrud.productData.package">
                          <option selected >free</option>
                        </select>
                      </fieldset>
                    </div>
                   
                    <div class="col-lg-12 col-md-12 col-12">
                     
                      <fieldset>
                        <label class="label">Product Description</label>
                        <textarea v-model="prodcrud.productData.description" class="form-control"></textarea>
                      </fieldset>
                    </div>
                  </div>
                  <div class="text-center mt-4">
                       <button type="submit" class="btn btn-primary">Proceed</button>
                   </div>
                </form>
              </div>
            </div>

            
          </div>
          <div class="col-xl-3 col-lg-4 col-md-12 col-12">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>