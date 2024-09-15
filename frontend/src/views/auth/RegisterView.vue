<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth.js';
const userData = ref({ email: "", username: "", password: "", vendor: false, store_name: "" })
const authStore = useAuthStore();
const loading = ref(false)
const errorMessage = ref("");
const successMessage = ref("");
const disabled = loading.value ? 'disabled' : ''
var isPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible = !isPasswordVisible;
};

const onSubmit = async () => {
  //userData.value.username = userData.value.email.split("@")[0]
  try {
    const res = await authStore.registerAction(userData.value);
    //console.log(res.data)
    successMessage.value = 'Registration successful! Please check your email to activate your account.';
    errorMessage.value = '';
  } catch (error) {
    console.error('Failed to login:', error.response);
    errorMessage.value = error.response.data.email[0] || error.response.data.username[0] || 'Registration failed';
    successMessage.value = '';
  }
};
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4">Sign Up</h2>
      <form @submit.prevent="onSubmit">
        <!-- Username/Email Input -->
        <div class="form-floating mb-3 position-relative">
          <input required v-model="userData.email" class="form-control" id="emailInput" placeholder="name@example.com">
          <label for="emailInput">Email or Username</label>
          <i class="fas fa-envelope position-absolute end-0 top-50 translate-middle-y me-3"></i>
        </div>

        <!-- Password Input -->
        <div class="form-floating mb-3 position-relative">
          <input required type="password" v-model="userData.password" class="form-control" id="passwordInput"
            placeholder="Password">
          <label for="passwordInput">Password</label>
          <i class="fas fa-lock position-absolute end-0 top-50 translate-middle-y me-3"></i>
        </div>

        <!-- Password Input -->
        <div class=".form-floating form-check mb-3 .position-relative">
          <input type="checkbox" v-model="userData.vendor" class="form-check-input" id="vendorInput">
          <label for="vendorInput" class="form-check-label">Are you a vendor?</label>
          <!--i class="fas fa-lock position-absolute end-0 top-50 translate-middle-y me-3"></i-->
        </div>

        <!-- Password Input -->
        <div class="form-floating mb-3 position-relative" v-if="userData.vendor">
          <input :required="userData.vendor" v-model="store_name" class="form-control" id="storenameInput"
            placeholder="Business or Store Name">
          <label for="passwordInput">Business/Store Name</label>
          <i class="fas fa-lock position-absolute end-0 top-50 translate-middle-y me-3"></i>
        </div>
        <!-- Submit Button -->
        <div class="d-grid">
          <button class="btn btn-primary btn-lg" type="submit">Register</button>
        </div>
        <div>
          <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
          <p v-if="successMessage" class="text-success mt-2">{{ successMessage }}</p>
        </div>
      </form>
      <!-- Social Logins -->
      <div class="text-center mt-4">
        <p>Or register with</p>
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