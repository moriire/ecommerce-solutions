<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { RouterLink, useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth.js';
import alertify from 'alertifyjs';
const router = useRouter();
const route = useRoute();
const username = ref('');
const password = ref('');
const loading = ref(false);
const disabled = loading.value ? 'disabled' : ''
const authStore = useAuthStore();

const onSubmit = async () => {
  loading.value = true;
  try {
    const res = await authStore.loginAction(username.value, password.value);
    let nextPage = route.query;
    console.log()
    if (res.status === 200 && nextPage.next) {
      router.push(nextPage.next)
    } else {
      router.push("/shop")
    }
  } catch (error) {
    if (error.code === "ERR_BAD_REQUEST") {
      alertify.error("Incorrect Username or Password")
    }
    //console.error('Failed to login:', error);
  } finally {
    setTimeout(() => loading.value = false, 2000)
  }
};
</script>
<!--template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header text-center bg-primary text-white">
            <h3>Login to Your Account</h3>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template-->

<!--template>
  <div class="p-3 p-md-4 p-xl-5">
    <div class="row">
      <div class="col-12">
        <div class="mb-5">
          <h3>Log in</h3>
        </div>
      </div>
    </div>
    <form @submit.prevent="onSubmit">
      <div class="row g2-3 gy-md-3 overflow-hidden">
        <div class="col-12">
          <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
          <input class="form-control" v-model="username" id="email" placeholder="name@example.com" required>
        </div>
        <div class="col-12">
          <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
          <input type="password" class="form-control" v-model="password" id="password" value="" required>
        </div>
       

        <div class="col-12 input-group d-flex justify-content-center">
          <button class="btn btn-primary">Login Now</button>
          <div class="input-group-text btn-primary" id="basic" v-show="loading" :disbled="disabled">
            <span class="spinner-border spinner-border-sm" aria-hidden="true">
            </span>
          </div>
        </div>
      </div>
    </form>
    <div class="row">
      <div class="col-12">
        <hr class="mt-5 mb-4 border-secondary-subtle">
        <div class="d-flex justify-content-between">
          <RouterLink to="/auth/register" class="link-secondary text-decoration-none">Don't
            have account yet? Signup</RouterLink>
          <RouterLink :to="{ name: 'reset-password' }" class="link-secondary text-decoration-none">Forgot password
          </RouterLink>
        </div>
      </div>
    </div>
   
</template-->
<!--template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="card login-card p-4 shadow-lg">
      <h2 class="text-center mb-4 text-gold">Login</h2>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" v-model="username" placeholder="Enter email" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-primary w-100 btn-deep-purple">Login</button>
      </form>
      <div class="text-center mt-3 text-gold">
        <span>or login with</span>
      </div>
      <div class="d-flex justify-content-around mt-3">
        <button class="btn btn-outline-dark social-btn" @click="socialLogin('google')">
          <i class="bi bi-google"></i> Google
        </button>
        <button class="btn btn-outline-dark social-btn" @click="socialLogin('facebook')">
          <i class="bi bi-facebook"></i> Facebook
        </button>
        <button class="btn btn-outline-dark social-btn" @click="socialLogin('twitter')">
          <i class="bi bi-twitter"></i> Twitter
        </button>
      </div>
    </div>
  </div>
</template-->
<!--template>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
    <div class="card login-card shadow" style="width: 400px; background-color: #fff;">
      <div class="card-body p-4">
        <h3 class="card-title text-center mb-4" style="color: #4A148C;">Login</h3>

        
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label" style="color: #4A148C;">Email address</label>
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label" style="color: #4A148C;">Password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" class="btn btn-primary w-100" style="background-color: #4A148C; border-color: #4A148C;">Login</button>
        </form>

        
        <div class="text-center mt-4">
          <p class="text-muted">or login with</p>
          <button class="btn btn-outline-dark w-100 mb-2" @click="socialLogin('google')" style="color: #DB4437;">
            <i class="fab fa-google"></i> Google
          </button>
          <button class="btn btn-outline-dark w-100 mb-2" @click="socialLogin('facebook')" style="color: #3b5998;">
            <i class="fab fa-facebook-f"></i> Facebook
          </button>
          <button class="btn btn-outline-dark w-100" @click="socialLogin('twitter')" style="color: #1DA1F2;">
            <i class="fab fa-twitter"></i> Twitter
          </button>
        </div>

      
        <div class="text-center mt-3">
          <a href="#" class="text-muted">Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  </div>
</template-->
<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4">Login</h2>

      <!-- Username/Email Input -->
      <div class="form-floating mb-3 position-relative">
        <input type="email" v-model="username" class="form-control" id="emailInput" placeholder="name@example.com">
        <label for="emailInput">Email or Username</label>
        <i class="fas fa-envelope position-absolute end-0 top-50 translate-middle-y me-3"></i>
      </div>

      <!-- Password Input -->
      <div class="form-floating mb-3 position-relative">
        <input type="password" v-model="password" class="form-control" id="passwordInput" placeholder="Password">
        <label for="passwordInput">Password</label>
        <i class="fas fa-lock position-absolute end-0 top-50 translate-middle-y me-3"></i>
      </div>

      <!-- Submit Button -->
      <div class="d-grid">
        <button class="btn btn-primary btn-lg" @click="onSubmit">Login</button>
      </div>

      <!-- Social Logins -->
      <div class="text-center mt-4">
        <p>Or login with</p>
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
        <RouterLink to="/auth/register" class="text-muted">Don't have an account? Sign up</RouterLink>
        </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  border-radius: 10px;
}

i {
  pointer-events: none;
}
</style>