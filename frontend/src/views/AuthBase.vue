<script>
import { RouterView } from 'vue-router';
import axios from 'axios';

export default {
  methods: {
    async socialLogin(provider) {
      try {
        const response = await axios.get(`/dj-rest-auth/${provider}/`);
        window.location.href = response.data.authorization_url;
      } catch (error) {
        console.error('Error during social login:', error);
      }
    }
  }
};
</script>
<template>
  <RouterView />
</template>
<style scoped>
@media(min-width:1200px) {
  .bsb-btn-xl {
    --bs-btn-font-size: 1.35rem
  }
}

.bsb-btn-2xl {
  --bs-btn-padding-y: 0.75rem;
  --bs-btn-padding-x: 1.5rem;
  --bs-btn-font-size: calc(1.27rem + 0.24vw);
  --bs-btn-border-radius: var(--bs-border-radius-lg)
}

@media(min-width:1200px) {
  .bsb-btn-2xl {
    --bs-btn-font-size: 1.45rem
  }
}

.bsb-btn-3xl {
  --bs-btn-padding-y: 0.875rem;
  --bs-btn-padding-x: 1.75rem;
  --bs-btn-font-size: calc(1.28rem + 0.36vw);
  --bs-btn-border-radius: var(--bs-border-radius-lg)
}

@media(min-width:1200px) {
  .bsb-btn-3xl {
    --bs-btn-font-size: 1.55rem
  }
}

.bsb-btn-4xl {
  --bs-btn-padding-y: 1rem;
  --bs-btn-padding-x: 2rem;
  --bs-btn-font-size: calc(1.29rem + 0.48vw);
  --bs-btn-border-radius: var(--bs-border-radius-lg)
}

@media(min-width:1200px) {
  .bsb-btn-4xl {
    --bs-btn-font-size: 1.65rem
  }
}

.bsb-btn-5xl {
  --bs-btn-padding-y: 1.125rem;
  --bs-btn-padding-x: 2.25rem;
  --bs-btn-font-size: calc(1.3rem + 0.6vw);
  --bs-btn-border-radius: var(--bs-border-radius-lg)
}

@media(min-width:1200px) {
  .bsb-btn-5xl {
    --bs-btn-font-size: 1.75rem
  }
}

.bsb-tpl-bg-platinum {
  background: #e5e5e5 !important
}

.bsb-tpl-bg-lotion {
  background: #fafafa !important
}
</style>