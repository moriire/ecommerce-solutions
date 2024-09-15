<template>
    <div class="container mt-5">
      <h1>Account Activation</h1>
      <p v-if="successMessage" class="text-success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
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
          const response = await axios.post('http://localhost:8000/auth/users/activation/', {
            uid,
            token
          });
  
          this.successMessage = 'Account successfully activated! You can now log in.';
          this.errorMessage = '';
        } catch (error) {
          this.errorMessage = 'Activation failed. The link may have expired.';
          this.successMessage = '';
        }
      },
    },
  };
  </script>  