<template>
  <div class="upload-container" 
       :class="{'dragging': isDragging}"
       @dragover.prevent="onDragOver"
       @dragleave.prevent="onDragLeave"
       @drop.prevent="onDrop"
  >
    <input type="file" ref="fileInput" @change="onFileChange" hidden />
    <div class="upload-message" @click="triggerFileInput">
      <p v-if="!file">Drag and drop a file here or click to upload</p>
      <p v-else>{{ file.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDragging: false,
      file: null
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      this.$emit('file-uploaded', this.file);
    },
    onDragOver() {
      this.isDragging = true;
    },
    onDragLeave() {
      this.isDragging = false;
    },
    onDrop(event) {
      this.isDragging = false;
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        this.file = files[0];
        this.$emit('file-uploaded', this.file);
      }
    }
  }
};
</script>

<style scoped>
.upload-container {
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.upload-container.dragging {
  background-color: #f0f0f0;
}

.upload-message {
  font-size: 16px;
  color: #777;
}

.upload-container p {
  margin: 0;
}
</style>