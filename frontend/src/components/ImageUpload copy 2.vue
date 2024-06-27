<template>
  <div class="upload-container">
    <file-pond
      ref="pond"
      name="file"
      label-idle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
      allow-multiple="false"
      :server="{
        process: {
          url: 'http://127.0.0.1:8000/api/thumbs',
          method: 'POST',
          headers: {
            'X-CSRFToken': getCsrfToken()
          }
        }
      }"
      @processfile="handleProcessFile"
    >
    </file-pond>
    <!--input v-model="caption" placeholder="Enter caption" class="caption-input"-->
    <button @click="uploadImage" class="upload-button">Upload</button>
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import axios from 'axios';

const FilePond = vueFilePond();

export default {
  components: {
    FilePond
  },
  data() {
    return {
      caption: '',
      file: null,
    };
  },
  methods: {
    getCsrfToken() {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        ?.split('=')[1];
      return cookieValue;
    },
    handleProcessFile(error, file) {
      if (error) {
        console.error('File processing failed:', error);
        return;
      }
      this.file = file.serverId;
    },
    uploadImage() {
      if (this.file) {
        const formData = new FormData();
        formData.append('img', this.file);
        formData.append('product', 8);

        axios
          .post('thumbs', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'X-CSRFToken': this.getCsrfToken()
            }
          })
          .then(response => {
            console.log('Image uploaded successfully:', response.data);
          })
          .catch(error => {
            console.error('Error uploading image:', error);
          });
      } else {
        alert('Please select a file and enter a caption.');
      }
    }
  }
};
</script>

<style scoped>
.upload-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.filepond--root {
  width: 100%;
  margin-bottom: 20px;
}
.caption-input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}
.upload-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.upload-button:hover {
  background-color: #0056b3;
}
</style>