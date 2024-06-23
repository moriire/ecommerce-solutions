<script setup>
import ProductCard from '@/components/ProductCard.vue';
import Hero from "@/components/Hero.vue"
import { useAuthStore } from '../../stores/auth.js';
import { reactive } from 'vue';
const userData = reactive({username:"", phone: "", email: "", password1: "", password2: "", vendor: false, store_name: ""})
const authStore = useAuthStore();
const onSubmit = async () => {
  try {
    await authStore.registerAction(userData);
    // Redirect to a protected route
  } catch (error) {
    console.error('Failed to login:', error);
  }
};
</script>

<template>
    <!--Hero /-->
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
           
            <form class="col-lg-4 col-sm-8 col-xs-10" @submit.prevent="onSubmit">
                <h2 class="text-center">SIGN UP</h2>
               <div class="form-group mb-3">
                <input v-model="userData.username" type="text" placeholder="Username" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="userData.email" type="email" placeholder="Email" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="userData.phone"  placeholder="Phone Number" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="userData.vendor"  class="form-check" type="checkbox">
               </div>
               <div class="form-group mb-3">
                <input v-model="userData.store_name"  placeholder="Store Name" class="form-control" >
               </div>
               <div class="form-group mb-3">
                <input v-model="userData.password1" type="password" placeholder="Password" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="userData.password2" type="password" placeholder="Verify Password" class="form-control">
               </div>
               <div class="form-group d-flex row">
                <p>Already have an account, <RouterLink to="/login">Login</RouterLink></p>
                <button type="submit" class="btn btn-black .btn-sm .float-end">Login</button>
               </div>
            </form>
        </div>

    </div>

</template>