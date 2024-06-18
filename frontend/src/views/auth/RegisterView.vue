<script setup>
import ProductCard from '@/components/ProductCard.vue';
import Hero from "@/components/Hero.vue"
import { useAuthStore } from '../../stores/auth.js';
import { ref } from 'vue';

const username = ref('');
const phone = ref('');
const email = ref('');
const password1 = ref('');
const password2 = ref('');

const authStore = useAuthStore();
const onSubmit = async () => {
  try {
    await authStore.registerAction(username.value, email.value, phone.value, password1.value, password2.value);
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
                <input v-model="username" type="text" placeholder="Username" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="email" type="email" placeholder="Email" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="phone"  placeholder="Phone Number" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="password1" type="password" placeholder="Password" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input v-model="password2" type="password" placeholder="Verify Password" class="form-control">
               </div>
               <div class="form-group d-flex row">
                <p>Already have an account, <RouterLink to="/login">Login</RouterLink></p>
                <button type="submit" class="btn btn-black .btn-sm .float-end">Login</button>
               </div>
            </form>
        </div>

    </div>

</template>