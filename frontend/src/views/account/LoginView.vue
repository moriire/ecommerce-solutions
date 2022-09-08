<template src="../../html/login.html">
</template>

<script>
export default {
  name: 'LoginView', 
  inject: ["globals"],
  data() {
   return {
    form: { email: "", password: ""}
   }
  },
  methods: {
        async loginForm() { 
        const { email, password } = this.form; 
        await this.globals.login(email, password)
    }
                                  },
}
</script>
<style src="../../html/sass/loginpage.css"></style>