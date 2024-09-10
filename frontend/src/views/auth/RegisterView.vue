<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth.js';
import alertify from 'alertifyjs';
const userData = ref({ username: "", phone: "", email: "", password1: "", password2: "", vendor: false, store_name: "" })
const authStore = useAuthStore();
const loading = ref(false)
const disabled = loading.value ? 'disabled' : ''
const isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible = !isPasswordVisible;
};

const onSubmit = async () => {
  try {
    const res = await authStore.registerAction(userData.value);
    console.log(res)
    alertify.success("Login Successful... Welcome!!")
  } catch (error) {
    console.error('Failed to login:', error);
  }
};
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4" style="max-width: 600px; width: 100%;">
      <h2 class="text-center mb-4">Sign Up</h2>
      <!-- Username/Email Input -->

      <div class="row mb-3">
        <div class="col-lg-6 mb-xs-5">

          <div class="form-floating mb-3 position-relative">
            <input v-model="userData.first_name" class="form-control" id="firstName" placeholder="name@example.com">
            <label for="firstName">First Name</label>
            <i class="fas fa-envelope position-absolute end-0 top-50 translate-middle-y me-3"></i>
          </div>
        </div>
        <div class="col-lg-6 mb-xs-5">

          <div class="form-floating mb-3 position-relative">
            <input v-model="userData.last_name" class="form-control" id="lastName" placeholder="name@example.com">
            <label for="lastName">Last Name</label>
            <i class="fas fa-envelope position-absolute end-0 top-50 translate-middle-y me-3"></i>
          </div>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col-lg-6 mb-xs-5">
          <div class="form-floating mb-3 position-relative">
            <input type="email" v-model="userData.username" class="form-control" id="emailInput"
              placeholder="name@example.com">
            <label for="emailInput">Email</label>
            <i class="fas fa-envelope position-absolute end-0 top-50 translate-middle-y me-3"></i>
          </div>
        </div>
        <div class="col-lg-6 mb-xs-5">
          <div class="form-floating position-relative">
            <input :type="isPasswordVisible ? 'text' : 'password'" v-model="userData.password1" class="form-control"
              id="passwordInput" placeholder="Password">
            <label for="passwordInput">Password</label>
            <i :class="isPasswordVisible ? 'fas fa-eye-slash' : 'fas fa-eye'"
              class="position-absolute end-0 top-50 translate-middle-y me-3" @click="togglePasswordVisibility"
              style="cursor: pointer;"></i>
            <!--i class="fas fa-lock position-absolute end-0 top-50 translate-middle-y me-3"></i-->
          </div>
        </div>
      </div>
      <div class="row mb-3">

        <div class="col-lg-12 mb-xs-5" >
          <div class="form-check">
            <input v-model="userData.vendor" class="form-check-input" type="checkbox" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
              Are you a vendor?
            </label>
          </div>
          <div class="form-floating mb-3 position-relative" v-if="userData.vendor">
            <input v-model="userData.store_name" class="form-control" id="emailInput" placeholder="name@example.com">
            <label for="emailInput">Store Name</label>
            <i class="fas fa-envelope position-absolute end-0 top-50 translate-middle-y me-3"></i>
          </div>
        </div>
      </div>
      <!-- Submit Button -->
      <div class="d-grid">
        <button class="btn btn-primary btn-lg" @click="onSubmit">Register</button>
      </div>

      <!-- Social Logins -->
      <div class="text-center mt-4">
        <p>Or signup with</p>
        <button class="btn btn-outline-danger me-2" @click="socialLogin('google')">
          <i class="fab fa-google"></i> Google
        </button>
        <button class="btn btn-outline-primary me-2" @click="socialLogin('facebook')">
          <i class="fab fa-facebook-f"></i> Facebook
        </button>
        <button class="btn btn-outline-info" @click="socialLogin('twitter')">
          <i class="fab fa-twitter"></i> Twitter
        </button>
      </div>
      <div class="text-center mt-3">
        <RouterLink to="/auth/login" class="text-muted">Already have an account? Login</RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* Adjustments to ensure the icon is clickable */
i {
  pointer-events: auto;
}
</style>