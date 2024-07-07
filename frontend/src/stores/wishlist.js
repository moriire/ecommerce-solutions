import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import { useAuthStore } from './auth'

export const useWishlistStore = defineStore('wishlist', () => {
  const auth = useAuthStore();
  const registeredProducts = ref([])
  const productData = reactive({ package: null, description: "", name: "", category: null, price: 500, quantity: 1, profile: parseInt(auth.userInfo.pk), brand: "", discount: 5, condition: "new" })
  const getUserProducts = async () => {
    try {
      const res = await axios.get(`product-with-images?product__profile__user__id=${auth.userInfo.pk}&limit=${8}`)
      registeredProducts.value = res.data.results
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
  }
  const addWishlist = async (product) => {
    console.log(auth.userInfo)
    try {
      const res = await axios.post("wishlist",
        {
            user: auth.userInfo,
            product: product
        }
      )
      //products.value = res.data.data
      console.log(res.data)
      //getUserProducts()
    } catch (e) {
      console.log(e)
    }
  }

  return {
    productData,
    addWishlist,
    registeredProducts,
    getUserProducts
  }
})
