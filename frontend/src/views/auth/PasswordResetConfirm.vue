<template>
    <div class="p-3 p-md-4 p-xl-5">
      <h2>Reset Password</h2>
      <form @submit.prevent="resetPassword">
        <div>
          <label for="new_password">New Password:</label>
          <input type="password" v-model="newPassword" required />
        </div>
        <div>
          <label for="re_new_password">Confirm New Password:</label>
          <input type="password" v-model="reNewPassword" required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const uid = ref('');
      const token = ref('');
      const newPassword = ref('');
      const reNewPassword = ref('');
      const message = ref('');
      onMounted(() => {
        uid.value = route.query.uid || '';
        token.value = route.query.token || '';
      });
  
      const resetPassword = async () => {
        try {
          await axios.post('auth/password/reset/confirm/', {
            uid: uid.value,
            token: token.value,
            new_password1: newPassword.value,
            new_password2: reNewPassword.value,
          });
          message.value = 'Password has been reset successfully.';
        } catch (error) {
          console.error('Error resetting password:', error);
          message.value = 'Failed to reset password.';
        }
      };
  
      return {
        newPassword,
        reNewPassword,
        message,
        resetPassword,
      };
    },
  };
  </script>  