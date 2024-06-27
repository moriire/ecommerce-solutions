<script setup>
import { RouterLink, useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { onBeforeUpdate, onMounted, reactive, ref, watch } from 'vue';
import Tabs from '@/components/Tabs.vue';
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
  fd.append("product", router.params.product)
  try{
    const res = await axios.post("thumbs", fd, headers= {
            "Content-Type": `multipart/form-data; boundary=${fd._boundary}`
        })
    console.log(res)
  } catch(e){
    console.log(e.response)
  }
  // Handle the uploaded file, e.g., send it to a server
}
const productImages = ref([])
const getImages = async (product_id)=>{
  try{
    const res = await axios.get(`thumbs?product=${product_id}`)
    productImages.value = res.data.data
    console.log(res.data.data)
  } catch(e){
    console.log(e)
  }
}
watch(
  async () => await getImages(route.params.product)
)
onMounted(async ()=> await getImages(route.params.product))
</script>
<template>
  <div class="container mt-5">
   <div v-for="img in productImages" v-bind:key="img.id">
    <img :src="img.img" alt="">
   </div>
    <Tabs :tabs="tabs">
      <template v-slot:front>
        <h1>Front View</h1>
        <p>This is the home tab content.</p>
        
      </template>
      <template v-slot:back>
        <h1>Back View</h1>
        <p>This is the profile tab content.</p>
      </template>
      <template v-slot:rear>
        <h1>Rear View</h1>
        <p>This is the contact tab content.</p>
        
        <ImageUpload :productID="route.params.product" />
      </template>
    </Tabs>
  </div>
</template>