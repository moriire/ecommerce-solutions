<template>
   <!--div class="container-fluid position-relative d-flex p-0"-->
               <!-- Sign In Start -->
        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;">
                <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <router-link to="/" class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>Kolo</h3>
                            </router-link>
                            <h3>Reset Password</h3>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required >
                            <label for="floatingInput">Email address</label>
                        </div>
                       
                        <button type="submit" class="btn btn-primary py-3 w-100 mb-4" @click="loginForm" >Sign In</button>
                        <p class="text-center mb-0">Don't have an Account? <router-link to="/account/register">Sign Up</router-link></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sign In End -->
    <!--/div-->

</template>

<script>
export default {
  name: 'LoginView', 
  inject: ["globals"],
  data() {
   return {
    email: ""
   }
  },
  methods: {
        async loginForm() { 
        await this.globals.resetPassword(this.email)
    }
                                  },
}
</script>

