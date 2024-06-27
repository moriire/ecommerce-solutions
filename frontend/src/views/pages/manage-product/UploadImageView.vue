<script setup>
import { useProductcrudStore } from '@/stores/product-crud';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import Tabs from '@/components/Tabs.vue';
import ImageUpload from '@/components/ImageUpload.vue';
const route = useRoute()
const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'profile', label: 'Profile' },
  { id: 'contact', label: 'Contact' },
];

const packages = ref()
const getPackages = async () => {
  try {
    const res = await axios.get("packages")
    packages.value = res.data
  } catch (e) {
    console.log(e)
  }

}/*
const getCategories = async () => {
  try {
    const res = await axios.get("categories")
    categories.value = res.data
  } catch (e) {
    console.log(e)
  }
}*/
const handleFileUpload = (file) => {
  console.log('Uploaded file:', file);
  // Handle the uploaded file, e.g., send it to a server
}
onMounted(async () => {
  await prodcrud.getUserProducts()
  await getPackages()
  //await getCategories()
})
const prodcrud = useProductcrudStore()
</script>
<template>
  <div class="container mt-5">
    <Tabs :tabs="tabs">
      <template v-slot:home>
        <h1>Front View</h1>
        <p>This is the home tab content.</p>
      </template>
      <template v-slot:profile>
        <h1>Back View</h1>
        <p>This is the profile tab content.</p>
      </template>
      <template v-slot:contact>
        <h1>Rear View</h1>
        <p>This is the contact tab content.</p>
        <ImageUpload @file-uploaded="handleFileUpload" />
      </template>
    </Tabs>
  </div>
</template>