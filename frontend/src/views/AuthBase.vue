<script setup>
import { RouterView } from 'vue-router';

const x = 1
</script>

<template>
    <section class=".p-3 .p-md-4 .p-xl-5 m-0 p-0 vh-100">
        <div class="container-fluid m-0 vh-100 ">
            <div class="row">
                <div class="col-12 col-md-6 .bsb-tpl-bg-platinum" >
                    <div class="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5" sstyle="background-image: url(/src/assets/img/auth_bg.png); background-position: center; background-size: cover; background-repeat: no-repeat">
                        <h3 class="m-0">Welcome!</h3>
                        <h2 class="text-end">
                          Tag<span class="text-warning">Biz</span>
                        </h2>
                        <!--img class="img-fluid rounded mx-auto my-3" loading="lazy" src="/src/assets/img/auth_bg.png"
                            width="245" height="100%" alt="BootstrapBrain Logo"-->
                        <p class="mb-0">Not a member yet? <a href="#!"
                                class="link-secondary text-decoration-none">Register now</a></p>
                    </div>
                </div>
                <div class="col-12 col-md-6 bsb-tpl-bg-lotion">
                    <RouterView />    
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bsb-btn-xl {
  --bs-btn-padding-y: 0.625rem;
  --bs-btn-padding-x: 1.25rem;
  --bs-btn-font-size: calc(1.26rem + 0.12vw);
  --bs-btn-border-radius: var(--bs-border-radius-lg)
}

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