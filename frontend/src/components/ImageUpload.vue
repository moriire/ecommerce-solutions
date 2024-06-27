<template>
  <div class="drop-container"
       @dragover.prevent="handleDragOver"
       @dragenter.prevent="handleDragEnter"
       @dragleave.prevent="handleDragLeave"
       @drop.prevent="handleDrop">

    <input type="file"
           ref="fileInput"
           style="display: none"
           @change="handleFileChange">

    <div class="drop-message"
         :class="{ 'drag-over': isDragging }"
         @click="openFilePicker">

      <p v-if="!imageUrl">Drag & Drop your image here or click to select one.</p>

      <img v-else :src="imageUrl" alt="Uploaded Image" class="preview-image" />

    </div>

    <button v-if="imageUrl" @click="uploadImage" class="submit-button">Submit Image</button>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
const route = useRoute()
const props = defineProps({
    productID: {
        type: Number,
        required: true
    }
})

    const fileInput = ref(null)
    const imageUrl = ref(null);
    let selectedFile = null;
    const isDragging = ref(false);

    const handleDragOver = (event) => {
      event.preventDefault();
      isDragging.value = true;
    };

    const handleDragEnter = (event) => {
      event.preventDefault();
      isDragging.value = true;
    };

    const handleDragLeave = () => {
      isDragging.value = false;
    };

    const handleDrop = (event) => {
      event.preventDefault();
      isDragging.value = false;
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        selectedFile = files[0];
        previewImage();
      }
    };

    const handleFileChange = (event) => {
      const files = event.target.files;
      if (files.length > 0) {
        selectedFile = files[0];
        previewImage();
      }
    };

    const previewImage = () => {
      const reader = new FileReader();
      reader.onload = () => {
        imageUrl.value = reader.result;
      };
      reader.readAsDataURL(selectedFile);
    };

    const openFilePicker = () => {
      const fileInput = fileInput.value;
      if (fileInput.value) {
        fileInput.click();
      }
    };

    const uploadImage = async () => {
      try {
        const formData = new FormData();
        formData.append('img', selectedFile);
        formData.append('product', parseInt(props.productID));
        // Replace with your API endpoint
        const response = await axios.post('thumbs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // Handle success response
        console.log('Image uploaded successfully:', response.data);
        // Optionally reset the component state after successful upload
        imageUrl.value = null;
        selectedFile = null;

      } catch (error) {
        // Handle error
        console.error('Error uploading image:', error);
      }
    };
</script>

<style scoped>
.drop-container {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.drop-message {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.drag-over {
  background-color: #f0f0f0;
}

.preview-image {
  max-width: 100%;
}

.submit-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
