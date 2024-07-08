import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import { useAuthStore } from './auth'

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

  const getWishList = async () => {
    try {
      const res = await axios.get(`wishlist/${auth.userInfo.pk}`)
      wishes.value = res.data
    } catch(e){
      console.log(e.response)
    }
  }

  const addWishlist = async (product) => {
    console.log(auth.userInfo)
    await getWishList()
    alert([...wishes.value, product])
    try {
      const res = await axios.patch(`wishlist/${auth.userInfo.pk}`,
        {
            //user: auth.userInfo.pk,
            products: [...wishes.value, product]
        }
      )
      wData = []
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
    getUserProducts
  }
})
