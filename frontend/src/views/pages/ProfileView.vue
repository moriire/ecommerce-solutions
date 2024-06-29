<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
const auth = useAuthStore()
</script>
<template>
    {{ auth.userInfo }}
    <div class="container vh-100">
        <div class="row h-100 .bg-primary p-4">
            <div class="col-lg-3 p-3">
                <img src="#" class="img img-thumbnail img-responsive" width="400" height="400"
                    style="border-radius: 50%;" />
                <div class="my-4">
                    <div>Username:<span class="ms-4">{{ auth.userInfo.username }}</span></div>
                    <div>First Name:<span class="ms-4">{{ auth.userInfo.first_name }}</span></div>
                    <div>Last Name:<span class="ms-4">{{ auth.userInfo.last_name }}</span></div>

                </div>
            </div>
            <div class="col-lg-9 p-3">
                <div class="row">
                    <div class="col-6">gfgf</div>
                    <div class="col-6">gfgf</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>