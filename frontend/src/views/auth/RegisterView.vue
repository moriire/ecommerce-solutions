<script setup>
import { ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import { useAuthStore } from '../../stores/auth.js';
import { reactive } from 'vue';
const userData = reactive({username:"", phone: "", email: "", password1: "", password2: "", vendor: false, store_name: ""})
const authStore = useAuthStore();
const loading = ref(false)
const disabled = loading.value? 'disabled': ''


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
    <div class="p-3 p-md-4 p-xl-5">
    <div class="row">
      <div class="col-12">
        <div class="mb-5">
          <h3>Sign Up</h3>
        </div>
      </div>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="row g2-3 gy-md-3 overflow-hidden">
        <div class="col-12">
          <!--label for="email" class="form-label">Email <span class="text-danger">*</span></label-->
          <input type="email" class="form-control" v-model="userData.email" id="email" placeholder="name@example.com"
            required>
        </div>
        <div class="col-12 col-md-6">
          <!--label for="username" class="form-label">Username <span class="text-danger">*</span></label-->
          <input class="form-control" v-model="userData.username" id="username" placeholder="@Mobolaji124"
            required>
        </div>
        <div class="col-12 col-md-6">
          <!--label for="phone" class="form-label">Phone Number <span class="text-danger">*</span></label-->
          <input class="form-control" v-model="userData.phone" id="phone" placeholder="08012345678"
            required>
        </div>
        <div class="col-12 col-md-6">
          <label for="password1" class="form-label">Password <span class="text-danger">*</span></label>
          <input type="password" class="form-control" v-model="userData.password1" id="password1" required>
        </div>
        <div class="col-12 col-md-6">
          <label for="password" class="form-label">Confirm Password <span class="text-danger">*</span></label>
          <input type="password" class="form-control" v-model="userData.password2" id="password2" value="" required>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input v-model="userData.vendor" class="form-check-input" type="checkbox" id="vendor">
            <label class="form-check-label text-secondary" for="vendor">
             Are you a vendor? {{ userData.vendor }}
            </label>
          </div>
        </div>
        <div class="col-12" v-show="userData.vendor">
          <!--label for="store" class="form-label">Store Name / Business Name <span class="text-danger">*</span></label-->
          <input class="form-control" v-model="userData.store_name" id="store" placeholder="Acsolot Store"
            required>
        </div>
        <div class="col-12 input-group d-grid">
          <button class="btn btn-primary d-block btn-block">Sign Up</button>
          <div class="input-group-text btn-primary" id="basic" v-show="loading" :disbled="disabled" >
            <span class="spinner-border spinner-border-sm" aria-hidden="true">
            </span>
          </div>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-12">
        <hr class="mt-4 mb-3 border-secondary-subtle">
        <div class="d-flex justify-content-between">
          <RouterLink to="/auth/login" class="link-secondary text-decoration-none">Don't
            Already signed up? Login</RouterLink>
          <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <p class="mt-4 mb-3">Or sign in with</p>
        <div class="d-flex gap-3 flex-column flex-xl-row">
          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google"
              viewBox="0 0 16 16">
              <path
                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
            <span class="ms-2 fs-6">Google</span>
          </a>
          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook"
              viewBox="0 0 16 16">
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <span class="ms-2 fs-6">Facebook</span>
          </a>
          <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter"
              viewBox="0 0 16 16">
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
            <span class="ms-2 fs-6">Twitter</span>
          </a>
        </div>
      </div>
    </div>
  </div>
    <!--Hero /-->
    <!--div class="container">
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

    </div-->

</template>