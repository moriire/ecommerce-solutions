<script setup>
import { useProductcrudStore } from '@/stores/product-crud';
import { RouterLink, RouterView, useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { usePackageStore } from '@/stores/packages';
import { useCategoryStore } from '@/stores/categories';
import axiosInstance from '@/axios';
import { useByvendorsStore } from '@/stores/byvendors';
const vendor = useByvendorsStore()
const pack = usePackageStore()
const cat = useCategoryStore()
onMounted(async () => {
  await vendor.getVendor()
})
const prodcrud = useProductcrudStore()
</script>
<template>
  <div class="container mt-100">
    <div class="row">
      <div class="checkout-user-area overflow-hidden d-flex align-items-center">
        <div class="checkout-user-img me-lg-4 col-md-2 col-sm-10 col-xs-12">
          <img src="/src/assets/img/checkout/user.jpg" alt="img" width="100%">
        </div>
        <div class=".checkout-user-details col-lg-8 col-md-5 col-12  d-flex align-items-center .justify-content-between w-100"
          v-if="vendor.vendorData.vendor">
          <div class="checkout-user-info col-lg-4">
            <h2 class="checkout-user-name">{{ vendor.vendorData.vendor.store_name }}</h2>
            <p class="checkout-user-address mb-0">{{ vendor.vendorData.vendor.address || "No Address Set Yet!!!" }}</p>
          </div>
          
          <RouterLink to="/vendors/profile" class="edit-user btn-secondary">EDIT PROFILE</RouterLink>
        </div>
      </div>
    </div>
    <div class="row">
      <RouterView />
      
    </div>
  </div>

</template>