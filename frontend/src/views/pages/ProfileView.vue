<script setup>
import axiosInstance from '@/axios';
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
const auth = useAuthStore()
const vendorData = ref({
        "user": {
            username: "",
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            img: null,
            vendor: false,
            subscribe: true
        },
        "img": null,
        "store_name": "",
        "address": null,
        "merchandise": null,
        "facebook": "",
        "instagram": "",
        "twitter": "",
        "location": null,
        "viewed_by": []
    })
const getVendorProfile = async ()=>{
    try {
        const res = await axiosInstance.get(`profile/${auth.userInfo.id}`);
        vendorData.value = res.data.data
        console.log(res)
    } catch(e){
        console.log(e)
    }
}
onMounted(() => {
    getVendorProfile()
})
const updateVendor = async () =>{
    const res = await axiosInstance.put(`profile/${auth.userInfo.id}`, vendorData.value)
}
</script>
<template>
    <div class="container ">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <form @submit.prevent="updateVendor()">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group form-input my-3">
                                <input type="email" class="form-control" v-model="vendorData.user.email" placeholder="Email" readonly>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xs-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="vendorData.user.username" placeholder="Username">
                            </div>
                        </div>
                        <div class="col-lg-4 col-xs-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="vendorData.user.first_name" placeholder="First Name">
                            </div>
                        </div>
                        <div class="col-lg-4 col-xs-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="vendorData.user.last_name" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="vendorData.merchandise" placeholder="Merchandise">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="vendorData.store_name" placeholder="Store name">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="vendorData.state" placeholder="State">
                            </div>
                        </div>
                        
                        <div class="col-lg-12">
                            <div class="form-group form-input my-3">
                                <input type="text" class="form-control" v-model="vendorData.address"
                                    placeholder="Address">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="url" class="form-control" v-model="vendorData.facebook"
                                    placeholder="Facebook Profile">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="url" class="form-control" v-model="vendorData.twitter"
                                    placeholder="Twitter Profile">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="url" class="form-control" v-model="vendorData.instagram"
                                    placeholder="Instagram Profile">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group form-input my-3">
                                <input type="file" accept="image/*" class="form-control" @change="vendorData.img" >
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
        <div v-if="vendorData.user"> {{ vendorData.user.get_full_name }}
            <p>Username: {{ vendorData.user.username }}</p>
            <p>Email: {{ vendorData.user.email }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div-->
</template>