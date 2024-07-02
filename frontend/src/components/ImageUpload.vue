<!-- src/components/UploadComponent.vue -->
<template>
  <div>
      <input type="text" v-model="title" placeholder="Image Title" />
      <file-pond
          ref="pond"
          name="img"
          label-idle="Drag & Drop your files or <span class='filepond--label-action'>Browse</span>"
          allow-multiple="true"
          @processfile="handleProcessFile"
      ></file-pond>
      <button @click="submit">Upload</button>
  </div>
</template>

<script>
import vueFilePond from 'vue-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond/dist/filepond.min.css';
import axios from 'axios';

const FilePond = vueFilePond(FilePondPluginImagePreview);

export default {
  components: {
      FilePond
  },
  data() {
      return {
          title: '',
          files: []
      };
  },
  methods: {
      handleProcessFile(error, file) {
          if (!error) {
              this.files.push(file);
          }
      },
      async submit() {
          const formData = new FormData();
          this.files.forEach((file) => {
            formData.append('product', this.title);
              formData.append('img', file);
          });

          try {
              const response = await axios.post('thumbs', formData, {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
              });
              console.log(response.data);
          } catch (error) {
              console.error(error);
          }
      }
  }
};
</script>