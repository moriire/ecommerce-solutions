<script setup>

// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import ImageUpload from "@/components/ImageUpload.vue"
// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import Uploader from "vue-media-upload";
import VueFilePond from "vue-filepond";
import { useProductcrudStore } from '@/stores/product-crud';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';




const packages = ref()
const media = ref([])
const changeMedia = (media) => {
  prodData.img = media
  onSubmit()
};
const onSubmit = ()=>{
  //this.isLoading = true
  axios.post('thumbs', prodData)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      if (error.response.data) {
        console.log(error.response.data.errors)
      }
      //this.isLoading = false
    })
};
//reactive({saved: [], added: [], removed: []})
const prodData = reactive({ product: 2, img: null })
const addMedia = (addedImage, addedMedia) => {
  media.added = addedMedia
};
const removeMedia = (removedImage, removedMedia) => {
  media.removed = removedMedia
};
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
onMounted(async () => {
  await prodcrud.getUserProducts()
  await getPackages()
  //await getCategories()
})
const prodcrud = useProductcrudStore()
</script>
<template>
  <div class="checkout-page mt-100">
    <div class="container">
      <div class="checkout-page-wrapper">
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12 col-12">
            <div class="section-header mb-3">
              <h2 class="section-heading">Add New Product</h2>
            </div>
            <ImageUpload />
          <div>
              <Uploader server="thumbs" @change="changeMedia" max="2" />
              <button @click="onSubmit">Submit</button>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12 col-12">
            <table class="table table-striped table-hovered .table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>

                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in prodcrud.registeredProducts" v-bind:key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ item.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>