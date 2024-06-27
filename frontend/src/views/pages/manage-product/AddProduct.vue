<script setup>
import { useProductcrudStore } from '@/stores/product-crud';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
const packages = ref([])
const categories = ref([])
const getPackages = async () => {
  try {
    const res = await axios.get("packages")
    packages.value = res.data
  } catch (e) {
    console.log(e)
  }

}
const getCategories = async () => {
  try {
    const res = await axios.get("categories")
    categories.value = res.data
  } catch (e) {
    console.log(e)
  }
}
onMounted(async () => {
  await prodcrud.getUserProducts()
  await getPackages()
  await getCategories()
})
const prodcrud = useProductcrudStore()
</script>
<template>

  <div class="section-header mb-3">
    <h2 class="section-heading">Add New Product</h2>
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
          <div class="col-lg-3 col-md-12 col-12">
            <fieldset>
              <label class="label">Price</label>
              <input v-model="prodcrud.productData.price" type="number" min="500" max="1000000" />
            </fieldset>
          </div>
          <div class="col-lg-3 col-md-12 col-12">
            <fieldset>
              <label class="label">Discount</label>
              <input v-model="prodcrud.productData.discount" type="number" min="5" max="50" />
            </fieldset>
          </div>
          <div class="col-lg-4 col-md-12 col-12">
            <fieldset>
              <label class="label">Quantity</label>
              <input v-model="prodcrud.productData.quantity" type="number" min="0" />
            </fieldset>
          </div>
          <div class="form-check col-lg-4 col-md-12 col-12">
            <fieldset class=".d-flex ">
              <label class="label">Condition</label>
              <div class="d-flex">

                <input v-model="prodcrud.productData.condition" id="used" type="radio" class="form-check"
                  value="used" />
                <label class="label" for="used">Used</label>
                <input v-model="prodcrud.productData.condition" id="new" type="radio" class="form-check" value="new" />
                <label class="label" for="new">New</label>
              </div>

            </fieldset>
          </div>
          <div class="col-lg-4 col-md-12 col-12">
            <fieldset>
              <label class="label">Product Category</label>
              <select class="form-select" v-model="prodcrud.productData.category">
                <option :selected="index == 0 ? 'selected' : ''" v-for="(cat, index) in categories" v-bind:key="index"
                  :value="cat.id">{{ cat.name }}</option>
              </select>
            </fieldset>
          </div>

          <div class="col-lg-12 col-md-12 col-12">

            <fieldset>
              <label class="label">Product Description</label>
              <textarea v-model="prodcrud.productData.description" class="form-control"></textarea>
            </fieldset>
          </div>
          <div class="col-lg-6 col-md-12 col-12">

            <fieldset>
              <label class="label">Product Brand</label>
              <input v-model="prodcrud.productData.brand" class="form-control">
            </fieldset>
          </div>
          <div class="col-lg-6 col-md-12 col-12">
            <fieldset>
              <label class="label">Package</label>
              <select class="form-select" v-model="prodcrud.productData.package">
                <option :selected="index == 0 ? 'selected' : ''" v-for="(pkg, index) in packages" v-bind:key="index"
                  :value="pkg.id">{{ pkg.name }}</option>
              </select>
            </fieldset>
          </div>
        </div>
        <div class="text-center mt-4">
          <button type="submit" class="btn btn-primary">Proceed</button>
        </div>
      </form>
    </div>
  </div>

</template>