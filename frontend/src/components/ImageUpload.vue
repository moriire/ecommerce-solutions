<template>
    <div>
      <file-pond
        ref="pond"
        name="img"
        label-idle="Drag & Drop your image or <span class='filepond--label-action'>Browse</span>"
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
      <input v-model="product" placeholder="Enter product" type="number">
      <button @click="uploadImage">Upload</button>
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
        product: '',
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
        if (this.file && this.product) {
          const formData = new FormData();
          formData.append('img', this.file);
          formData.append('product', this.product);
  
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
          alert('Please select a file and enter a product.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .filepond--root {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  input {
    display: block;
    margin: 20px auto;
    padding: 10px;
    width: 100%;
    max-width: 500px;
  }
  button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
  }
  </style>
  