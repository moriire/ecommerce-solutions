<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { onBeforeUpdate, onMounted, reactive, ref, watch } from 'vue';
import ImageUpload from '@/components/ImageUpload.vue';
const route = useRoute()
const tabs = [
  { id: 'front', label: 'Front View' },
  { id: 'back', label: 'Back View' },
  { id: 'rear', label: 'Rear View' },
];

const handleFileUpload = async (file) => {
  console.log('Uploaded file:', file);
  const fd = new FormData();
  fd.append("img", file)//, file.image_url.name)
  fd.append("product", route.params.product)
  try {
    const res = await axios.post("thumbs", fd, headers = {
      "Content-Type": `multipart/form-data; boundary=${fd._boundary}`
    })
    console.log(res)
  } catch (e) {
    console.log(e.response)
  }
  // Handle the uploaded file, e.g., send it to a server
}
const productImages = ref([])
const getImages = async (product_id) => {
  try {
    const res = await axios.get(`thumbs?product=${product_id}`)
    productImages.value = res.data.data
    console.log(res.data.data)
  } catch (e) {
    console.log(e)
  }
}
watch(
  async () => await getImages(route.params.product)
)
onMounted(async () => await getImages(route.params.product))
</script>
<template>
  <div class="container mt-5">
    <div class="row">
      <div v-if="productImages.length" class="col-lg-4 p-2" v-for="img in productImages" v-bind:key="img.id">
        <img :src="img.img" alt="">
      </div>
      <div class="col-12" v-else>
        <h3>No Product Image Uploaded Yet!!</h3>
      </div>
    </div>
    <div class="row">
      <ImageUpload :productID="route.params.product" />
    </div>
  </div>
</template>