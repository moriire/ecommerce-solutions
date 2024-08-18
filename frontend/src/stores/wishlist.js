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
  const wishesIds = computed(() => wishes.value.map(x => x.product.id))
  const getWishList = async () => {
    try {
      const res = await axiosInstance.get(`wishlist?user=${auth.userInfo.pk}`)
      wishes.value = res.data.data
      console.log(res)

    } catch (e) {
      console.log(e.response)
    }
  }


  const deleteWish = async (item_id) => {
    try {
      const res = await axiosInstance.delete(`wishlist/${item_id}`)
      //.value = res.data.data
      console.log(res)
      getWishList()
    } catch (e) {
      console.log(e)
    }
  }

  const addWishlist = async (product) => {
    await getWishList()
    console.log(wishesIds.value)
    console.log(product)
    if (wishesIds.value.includes(product)) {
      alertify.error("already in cart")
    } else if (!auth.accessToken) {
      return router.push("/auth/login")
    
  }else {
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
  addWishlist,
  registeredProducts,
  getUserProducts,
  getWishList,
  addWishlist,
  deleteWish,
  wishes,
  wishesCount
}
})
