<script setup>
    defineProps({
        loading:{
            type: Boolean,
            required: true
        }
    })
</script>
<template>
    <div class="loading-overlay" v-if="loading">
        <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>
<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0a021de7;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}
</style>