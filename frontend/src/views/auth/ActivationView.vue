<template>
    <div class="row align-items-center justify-content-center vh-100 m-0 p-0">
      <div class="col-lg-10 text-center">
        <h1 class="text-center">Account Activation</h1>
        <p v-if="successMessage" class="text-success">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
        <RouterLink to="/auth/login" class="btn btn-warning">Login</RouterLink>
      </div>
    </div>
</template>

<script>
import axiosInstance from '@/axios.js';
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      successMessage: '',
      errorMessage: '',
    };
  },
  mounted() {
    const route = useRoute();
    const uid = route.params.uid;
    const token = route.params.token;
    this.activateAccount(uid, token);
  },
  methods: {
    async activateAccount(uid, token) {
      try {
        const response = await axiosInstance.post('auth/users/activation/', {
          uid,
          token
        });

        this.successMessage = 'Account successfully activated! You can now log in.';
        this.errorMessage = '';
        console.log(token + "============" + uid)
      } catch (error) {
        console.log(error)
        this.errorMessage = 'Activation failed. The link may have expired.';
        this.successMessage = '';
      }
    },
  },
};
</script>