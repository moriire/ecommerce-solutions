import { reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import { useAuthStore } from './auth'

export const useProductcrudStore = defineStore('productcrud', () => {
  const auth = useAuthStore();
  const productData = reactive({ package: 1, description: "", name: "Amala", category: 1, price: 0, quantity: 1, profile: parseInt(auth.userInfo.pk) })

  const addProduct = async () => {
    console.log(productData)
    try {
      const res = await axios.post("products",
        productData
      )
      //products.value = res.data.data
      console.log(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }

  return {
    productData,
    addProduct
  }
})
