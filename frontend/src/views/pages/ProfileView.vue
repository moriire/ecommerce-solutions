<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted } from 'vue';
const auth = useAuthStore()

onMounted(async () => {
    await auth.getProfile()
})
</script>
<template>
    <div class="container ">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <form @submit.prevent="javascript(0)">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group form-input my-3">
                                <input type="email" class="form-control" v-model="auth.user.email" placeholder="Email" readonly>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xs-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="auth.user.username" placeholder="Username">
                            </div>
                        </div>
                        <div class="col-lg-4 col-xs-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="auth.user.first_name" placeholder="First Name">
                            </div>
                        </div>
                        <div class="col-lg-4 col-xs-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="auth.user.last_name" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="auth.user.profile.merchandise" placeholder="Merchandise">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="auth.user.profile.store_name" placeholder="Store name">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="auth.user.profile.state" placeholder="State">
                            </div>
                        </div>
                        
                        <div class="col-lg-12">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="auth.user.profile.address"
                                    placeholder="Address">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="url" class="form-control" v-model="auth.user.profile.facebook"
                                    placeholder="Facebook Profile">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="url" class="form-control" v-model="auth.user.profile.twitter"
                                    placeholder="Twitter Profile">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="url" class="form-control" v-model="auth.user.profile.twitter"
                                    placeholder="Instagram Profile">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="file" accept="image/*" class="form-control" @change="auth.user.profile.img" >
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group form-input my-3">
                                <input type="submit" class="btn btn-primary d-block">
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
            <div class="col-lg-6">
                ddd
            </div>
        </div>
    </div>

    <!--div>
        <h1>User Details</h1>
        <div v-if="auth.user"> {{ auth.user.get_full_name }}
            <p>Username: {{ auth.user.username }}</p>
            <p>Email: {{ auth.user.email }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div-->
</template>