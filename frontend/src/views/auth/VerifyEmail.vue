<template>
    <div>
        <h2>Email Verification</h2>
        <p v-if="verified">Your email has been verified successfully!</p>
        <p v-else>Verifying your email...</p>
    </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const verified = ref(false);

        onMounted(async () => {
            try {
                const key = route.query.key;
                await axios.post('auth/registration/verify-email/', { key });
                verified.value = true;
            } catch (error) {
                console.error('Error during email verification:', error);
            }
        });

        return { verified };
    },
};
</script>
