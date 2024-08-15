import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import { useAuthStore } from './auth'
import axiosInstance from '@/axios'
import alertify from 'alertifyjs'

export const useWishlistStore = defineStore('wishlist', () => {
  const auth = useAuthStore();
  const wishes = ref([]);
  const registeredProducts = ref([])
  const productData = reactive({ package: null, description: "", name: "", category: null, price: 500, quantity: 1, profile: parseInt(auth.userInfo.pk), brand: "", discount: 5, condition: "new" })
  const getUserProducts = async () => {
    try {
      const res = await axiosInstance.get(`product-with-images?product__profile__user__id=${auth.userInfo.pk}&limit=${8}`)
      registeredProducts.value = res.data.results
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }
  }
  const wishesCount = computed(() => wishes.value.length || 0)
  const wishesIds = computed(() => wishes.value.map(x => x.id))
  const getWishList = async () => {
    try {
      const res = await axiosInstance.get(`wishlist?user=${auth.userInfo.pk}`)
      wishes.value = res.data.data
      console.log(res)

    } catch (e) {
      console.log(e.response)
    }
  }

  const addWishlist = async (product) => {
    await getWishList()
    if (wishesIds.value.includes(product)) {
      alertify.error("already in cart")
    } else {
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
