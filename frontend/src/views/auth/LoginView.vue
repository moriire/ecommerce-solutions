<script setup>
import ProductCard from '@/components/ProductCard.vue';
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
  <div class="container-fluid m-0">
    <div class="row">
      <div class="col-12 col-md-6 bsb-tpl-bg-platinum">
        <div class="d-flex flex-column justify-content-between vh-100 p-3 p-md-4 p-xl-5">
          <h3 class="m-0">Welcome!</h3>
          <img class="img-fluid rounded mx-auto my-4" loading="lazy" src="./assets/img/bsb-logo.svg" width="245" height="80" alt="BootstrapBrain Logo">
          <p class="mb-0">Not a member yet? <a href="#!" class="link-secondary text-decoration-none">Register now</a></p>
        </div>
      </div>
      <div class="col-12 col-md-6 bsb-tpl-bg-lotion">
        <div class="p-3 p-md-4 p-xl-5">
          <div class="row">
            <div class="col-12">
              <div class="mb-5">
                <h3>Log in</h3>
              </div>
            </div>
          </div>
          <form action="#!">
            <div class="row gy-3 gy-md-4 overflow-hidden">
              <div class="col-12">
                <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
                <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required>
              </div>
              <div class="col-12">
                <label for="password" class="form-label">Password <span class="text-danger">*</span></label>
                <input type="password" class="form-control" name="password" id="password" value="" required>
              </div>
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me">
                  <label class="form-check-label text-secondary" for="remember_me">
                    Keep me logged in
                  </label>
                </div>
              </div>
              <div class="col-12">
                <div class="d-grid">
                  <button class="btn bsb-btn-xl btn-primary" type="submit">Log in now</button>
                </div>
              </div>
            </div>
          </form>
          <div class="row">
            <div class="col-12">
              <hr class="mt-5 mb-4 border-secondary-subtle">
              <div class="text-end">
                <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <p class="mt-5 mb-4">Or sign in with</p>
              <div class="d-flex gap-3 flex-column flex-xl-row">
                <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  <span class="ms-2 fs-6">Google</span>
                </a>
                <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                  <span class="ms-2 fs-6">Facebook</span>
                </a>
                <a href="#!" class="btn bsb-btn-xl btn-outline-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                  <span class="ms-2 fs-6">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!--Hero /-->
    <!--div class="container-fluid">
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

    </div-->

</template>
<style scoped>
.bsb-btn-xl{--bs-btn-padding-y:0.625rem;--bs-btn-padding-x:1.25rem;--bs-btn-font-size:calc(1.26rem + 0.12vw);--bs-btn-border-radius:var(--bs-border-radius-lg)}@media(min-width:1200px){.bsb-btn-xl{--bs-btn-font-size:1.35rem}}.bsb-btn-2xl{--bs-btn-padding-y:0.75rem;--bs-btn-padding-x:1.5rem;--bs-btn-font-size:calc(1.27rem + 0.24vw);--bs-btn-border-radius:var(--bs-border-radius-lg)}@media(min-width:1200px){.bsb-btn-2xl{--bs-btn-font-size:1.45rem}}.bsb-btn-3xl{--bs-btn-padding-y:0.875rem;--bs-btn-padding-x:1.75rem;--bs-btn-font-size:calc(1.28rem + 0.36vw);--bs-btn-border-radius:var(--bs-border-radius-lg)}@media(min-width:1200px){.bsb-btn-3xl{--bs-btn-font-size:1.55rem}}.bsb-btn-4xl{--bs-btn-padding-y:1rem;--bs-btn-padding-x:2rem;--bs-btn-font-size:calc(1.29rem + 0.48vw);--bs-btn-border-radius:var(--bs-border-radius-lg)}@media(min-width:1200px){.bsb-btn-4xl{--bs-btn-font-size:1.65rem}}.bsb-btn-5xl{--bs-btn-padding-y:1.125rem;--bs-btn-padding-x:2.25rem;--bs-btn-font-size:calc(1.3rem + 0.6vw);--bs-btn-border-radius:var(--bs-border-radius-lg)}@media(min-width:1200px){.bsb-btn-5xl{--bs-btn-font-size:1.75rem}}.bsb-tpl-bg-platinum{background:#e5e5e5!important}.bsb-tpl-bg-lotion{background:#fafafa!important}
</style>