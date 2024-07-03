<script setup>
import { useProductcrudStore } from '@/stores/product-crud';
import { RouterLink, RouterView } from 'vue-router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { usePackageStore } from '@/stores/packages';
import { useCategoryStore } from '@/stores/categories';
const pack = usePackageStore()
const cat = useCategoryStore()
onMounted(async () => {
  await prodcrud.getUserProducts()
  await pack.getPackages()
  await cat.getCategories()
})
const prodcrud = useProductcrudStore()
</script>
<template>
  <div class="checkout-page mt-100">
    <div class="container">
      <div class="checkout-page-wrapper">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12 col-12">
            <RouterView />
          </div>
          <div class="col-xl-5 col-lg-6 col-md-12 col-12">
            <table class="table table-striped table-hovered .table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Status</th>

                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in prodcrud.registeredProducts" v-bind:key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.product.name }}</td>
                  <td>{{ item.product.price }}</td>
                  <td>{{ item.product.quantity }}</td>
                  <td>
                    <RouterLink :to="{name:'upload', params:{product: item.id}}">Upload</RouterLink>
                  </td>
                  <td>#</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>