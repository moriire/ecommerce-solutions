import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import axiosInstance from '@/axios'
import { useRouter } from 'vue-router'

export const useProductcrudStore = defineStore('productcrud', () => {
  const auth = useAuthStore();
  const router = useRouter();
  const registeredProducts = ref([]);
  const productData = reactive({ package: "", description: "", name: "", category: "", price: 500, quantity: 1, profile: parseInt(auth.userInfo.pk), brand: "", discount: 5, condition: "" })
  const productImages = ref([]);
  const images = ref([]);
  const getUserProducts = async () => {
    try {
      const res = await axiosInstance.get(`product-with-images?product__profile__user__id=${auth.userInfo.pk}&limit=${8}`)
      registeredProducts.value = res.data.results
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  const handleFileUpload = async (file) => {
    console.log('Uploaded file:', file);
    const fd = new FormData();
    fd.append("img", file)//, file.image_url.name)
    fd.append("product", route.params.product)
    try {
      const res = await axiosInstance.post("thumbs", fd, headers = {
        "Content-Type": `multipart/form-data; boundary=${fd._boundary}`
      })
      console.log(res)
    } catch (e) {
      console.log(e.response)
    }
    // Handle the uploaded file, e.g., send it to a server
  }
  const addProduct = async () => {
    try {
      const res = await axiosInstance.post("product",
        productData
      )
      if (res.status === 201) {
        console.log(res)
        await uploadImages(res.data.id);
      }
      //products.value = res.data.data
      console.log(res.data)
      getUserProducts()
    } catch (e) {
      console.log(e)
    }
  }


  const showFileUpload = (event) => {
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
  const deleteProduct = async (productId) => {
    const res = await axiosInstance.delete(`product/${productId}`)
    console.log(res)
    if(res.data.status===204){
      await getUserProducts()
    }
  };
  const uploadImages = async (productID) => {
    for (let i = 0; i < images.value.length; i++) {
      const formData = new FormData();
      formData.append('product', productID);
      formData.append('img', images.value[i].file);
      try {
        const res = await axiosInstance.post('thumbs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (progressEvent) => {
            images.value[i].progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          }
        });
        setTimeout(()=> router.push(`/product/upload/${productID}`), 2000)
      } catch (error) {
        //router.push(`/product/upload/${productID}`)
        console.error('Error uploading image:', error);
      }
    }

  }

  return {
    productData,
    addProduct,
    registeredProducts,
    getUserProducts,
    uploadImages,
    images,
    productImages,
    showFileUpload,
    deleteProduct,
  }
})
