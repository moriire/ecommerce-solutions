<script setup>
import Uploader from "vue-media-upload";
import { useProductcrudStore } from '@/stores/product-crud';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
const packages = ref([])
const media = ref([])
const changeMedia = async (media)=>{
  media.value = media
}
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
  <div class="checkout-page mt-100">
    <div class="container">
      <div class="checkout-page-wrapper">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12 col-12">
            <div class="section-header mb-3">
              <h2 class="section-heading">Add New Product</h2>
            </div>
            <div>
              <Uploader server="products" @change="changeMedia" max="2"/>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12 col-12">
            <table class="table table-striped table-hovered .table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>

                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in prodcrud.registeredProducts" v-bind:key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>