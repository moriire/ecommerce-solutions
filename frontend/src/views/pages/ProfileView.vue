<template>
    <div>
        <h1>User Details</h1>
        <div v-if="user">
            <p>Username: {{ user.username }}</p>
            <p>Email: {{ user.email }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { onMounted, ref } from 'vue';
const user = ref({})
const auth = useAuthStore()

onMounted(() => {
    user.value = auth.userdetail(auth.accessToken)
    console.log(auth.accessToken)
    console.log(user.value)
})
</script>