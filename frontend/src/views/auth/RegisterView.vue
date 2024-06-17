<script setup>
import ProductCard from '@/components/ProductCard.vue';
import Hero from "@/components/Hero.vue"
</script>

<template>
    <!--Hero /-->
    <div class="container">
        <div class="row justify-content-center align-items-center vh-100">
           
            <form class="col-lg-4 col-sm-8 col-xs-10" method="post">
                <h2 class="text-center">SIGN UP</h2>
               <div class="form-group mb-3">
                <input type="text" placeholder="Username" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input type="email" placeholder="Email" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input type="password" placeholder="Password" class="form-control">
               </div>
               <div class="form-group mb-3">
                <input type="password" placeholder="Verify Password" class="form-control">
               </div>
               <div class="form-group d-flex row">
                <p>Already have an account, <RouterLink to="/login">Login</RouterLink></p>
                <button type="submit" class="btn btn-black .btn-sm .float-end">Login</button>
               </div>
            </form>
        </div>

    </div>

</template>