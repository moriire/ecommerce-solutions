import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import { useAuthStore } from './auth'
import axiosInstance from '@/axios'

export const useWishlistStore = defineStore('wishlist', () => {
  const auth = useAuthStore();
  const wishes = ref([]);
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
  const wishesCount = computed(()=> wishes.value.length)
  const getWishList = async () => {
    try {
      const res = await axios.get(`wishlist?user=${auth.userInfo.pk}`)
      wishes.value = res.data.data
    } catch(e){
      console.log(e.response)
    }
  }

  const addWishlist = async (product) => {
    await getWishList()
    //alert([...wishes.value, product])
    try {
      const res = await axiosInstance.post('wishlist',
        {
            user: auth.userInfo.pk,
            product: product
        }
      )
      //wishes.value = res.data
      //wishes.value = res.data
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
    getUserProducts,
    getWishList,
    addWishlist,
    wishes,
    wishesCount
  }
})
