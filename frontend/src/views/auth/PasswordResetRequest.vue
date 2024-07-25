<template>
    <div class="row vh-100 p-3 p-md-4 p-xl-5">
      <h2>Reset Password</h2>
      <form @submit.prevent="requestPasswordReset">
        <label for="email">Email:</label>
        <div class="input-group mb-3">
          <span class="input-group-text"><i class="fa fa-envelope fa-2x"></i></span>
          <input type="email" v-model="email" required class="form-control" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        message: '',
      };
    },
    methods: {
      async requestPasswordReset() {
        try {
          const res = await axios.post('auth/password/reset/', { email: this.email });
          console.log(res)
          this.message = 'Password reset link has been sent to your email.';

        } catch (error) {
          console.error('Error requesting password reset:', error);
          this.message = 'Failed to request password reset.';
        }
      },
    },
  };
  </script>
  