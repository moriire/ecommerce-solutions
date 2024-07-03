<template>
  <div class="container mt-4">
    <div class="mb-3">
      <label for="imageUpload" class="form-label">Upload Images</label>
      <input type="file" class="form-control" id="imageUpload" multiple @change="handleFileUpload">
    </div>
    <div v-if="images.length > 0" >
      <div class="row">
        <div class="col-md-3" v-for="(image, index) in images" :key="index">
          <div class="card">
            <img :src="image.preview" class="card-img-top" alt="Image Preview">
            <div class="card-body">
              <p class="card-text">Progress: {{ image.progress }}%</p>
              <div class="progress">
                <div class="progress-bar" :style="{ width: image.progress + '%' }" role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary mt-3" @click="uploadImages">Upload</button>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const images = ref([]);
const router = useRouter()
const prop = defineProps({
  productID: {
    type: Number
  }
})
const handleFileUpload = (event) => {
  const files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = (e) => {
      images.value.push({
        file: files[i],
        preview: e.target.result,
        progress: 0
      });
    };
    reader.readAsDataURL(files[i]);
  }
};
const uploadImages = async () => {
  for (let i = 0; i < images.value.length; i++) {
    const formData = new FormData();
    formData.append('product', prop.productID);
    formData.append('img', images.value[i].file);

    try {
      const res = await axios.post('thumbs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          images.value[i].progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        }
      });
      console.log(res)
      router.push(`/product/upload/${prop.productID}`)
    } catch (error) {
      router.push(`/product/upload/${prop.productID}`)
      console.error('Error uploading image:', error);
    }
  }
  
}
</script>

<style scoped>
.card-img-top {
  height: 150px;
  object-fit: cover;
}
</style>
