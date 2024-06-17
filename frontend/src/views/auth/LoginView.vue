<script setup>
import ProductCard from '@/components/ProductCard.vue';
import Hero from "@/components/Hero.vue"
import { RouterLink } from 'vue-router';

import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth.js';

const username = ref('');
const password = ref('');

const authStore = useAuthStore();

const onSubmit = async () => {
  try {
    await authStore.loginAction(username.value, password.value);
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
                <h2 class="text-center">LOGIN</h2>
               <div class="form-group mb-3">
                <input  v-model="username" autocomplete="email" type="text" placeholder="Email or Username" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="password" type="password" autocomplete="current-password" placeholder="Password" class="form-control">
               </div>
               <div class="form-group d-flex row">
                <p>Don't have an account yet,<RouterLink to="/register">Sign Up</RouterLink></p>
                <button type="submit" class="btn btn-black .btn-sm .float-end">Login</button>
               </div>
            </form>
        </div>

    </div>

</template>