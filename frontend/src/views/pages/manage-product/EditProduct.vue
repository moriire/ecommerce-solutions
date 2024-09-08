<script setup>
import axiosInstance from '@/axios';
import { useCategoryStore } from '@/stores/categories';
import { usePackageStore } from '@/stores/packages';
import { useProductcrudStore } from '@/stores/product-crud';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const prodcrud = useProductcrudStore()
const cat = useCategoryStore()
const pack = usePackageStore()
const productID = ref(null);
const productDetails = ref({})
const getImages = async (product_id) => {
  try {
    const res = await axiosInstance.get(`normal-product-with-images/${product_id}/edit_single`)
    productDetails.value = res.data.data
    console.log(res.data.data)
  } catch (e) {
    console.log(e)
  }
}
onMounted(()=>{
  getImages(route.params.product)
})
</script>
<template>
    <h2 class="pb-1">Edit Products</h2>
      <form  @submit.prevent="prodcrud.addProduct" v-if="productDetails.images">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-12 my-2">
              <label class="label">Product Name</label>
              <input class="form-control" required v-model="productDetails.product.name" />
          </div>
          <div class="col-lg-3 col-md-12 col-12 my-2">
            <label class="label">Price</label>
            <div class="input-group">
              <span class="input-group-text" id="inputGroup-sizing-default">&#x20A6;</span>
              <input required class="form-control" v-model="productDetails.product.price" type="number" min="500" max="1000000" />

            </div>
          </div>
          <div class="col-lg-3 col-md-12 col-12 my-2">
              <label class="label">Discount</label>
              <div class="input-group">
                <input class="form-control" required v-model="productDetails.product.discount" type="number" min="5" max="50" />
                <span class="input-group-text" id="inputGroup-sizing-default">%</span>
              </div>
          </div>
          <div class="col-lg-3 col-md-12 col-12 my-2">
              <label class="label">Quantity</label>
              <input class="form-control" required v-model="productDetails.product.quantity" type="number" min="0" />
          </div>
          <div class="col-lg-5 col-md-12 col-12 my-2">
              <label class="label">Condition</label>
              <select required v-model="productDetails.product.condition" class="form-select form-control" >
                <option selected value="" disabled>Product Condition</option>
                <option value="used">Used</option>
                <option value="new">New</option>
              </select>
          </div>
          
          <div class="col-lg-4 col-md-12 col-12 my-2">
            <fieldset>
              <label class="label" id="category">Product Category</label>
              <select for="category" required class="form-select" v-model="productDetails.product.category">
                <option selected value=""  disabled >Product Category</option>
                <option :selected="index == 0 ? 'selected' : ''" v-for="(cat, index) in cat.categories"
                  v-bind:key="index" :value="cat.id">{{ cat.name }}</option>
              </select>
            </fieldset>
          </div>
          <div class="col-lg-6 col-md-12 col-12 my-2">
              <label class="label">Product Brand</label>
              <input required v-model="productDetails.product.brand" class="form-control">
          </div>
          <div class="col-lg-6 col-md-12 col-12 my-2">
              <label class="label">Package</label>
              <select required class="form-select" v-model="productDetails.product.package">
                {{ pack }}
                <option :selected="index == 0 ? 'selected' : ''" v-for="(pkg, index) in pack.packages"
                  v-bind:key="index" :value="pkg.id">{{ pkg.name }}</option>
              </select>
          </div>
          <div class="col-lg-12 col-md-12 col-12 my-2">
              <label class="label">Product Description</label>
              <textarea required v-model="productDetails.product.description" class="form-control"></textarea>
          </div>
        </div>
        <div class="row">
          <div v-if="prodcrud.productImages.length" class="col-lg-4 p-2" v-for="img in prodcrud.productImages" v-bind:key="img.id">
            <img :src="img.img" alt="">
          </div>
          <div class="col-12 my-2" v-else>
            <h3>Click to Change Image</h3>
          </div>
        </div>
        <div class="row">
          <div class="container mt-4">
            <div class="mb-3">
              <label for="imageUpload" class="form-label">Upload Images</label>
              <input required type="file" class="form-control" id="imageUpload" multiple @change="prodcrud.showFileUpload">
            </div>
            <div v-if="productDetails.images.length > 0">
              <div class="row">
                <div class="col-md-4" v-for="(image, index) in productDetails.images" :key="index">
                  <div class="card">
                    <img :src="image.img" class="card-img-top" alt="Image Preview">
                    <!--div class="card-body">
                      <p class="card-text">Progress: {{ image.progress }}%</p>
                      <div class="progress">
                        <div class="progress-bar" :style="{ width: image.progress + '%' }" role="progressbar"></div>
                      </div>
                    </div-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-primary mt-3" type="submit">Upload</button>
          <!--button type="submit" class="btn btn-primary">Proceed</button-->
        </div>
      </form>
</template>