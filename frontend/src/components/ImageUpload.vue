<template>
  <div class="image-uploader">
    <input type="file" @change="onFileChange" />
    <button @click="uploadImage">Upload Image</button>
    <div v-if="imageUrl">
      <h3>Uploaded Image:</h3>
      <img :src="imageUrl" alt="Uploaded Image" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      imageUrl: null,
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    async uploadImage() {
      if (!this.file) {
        alert("Please select a file first!");
        return;
      }

      const formData = new FormData();
      formData.append('img', this.file);
      formData.append('product', 10);


      try {
        const response = await axios.post('thumbs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        this.imageUrl = response.data.imageUrl; // Adjust according to your API response
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    },
  },
};
</script>

<style scoped>
.image-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

input[type="file"] {
  margin-bottom: 10px;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>
