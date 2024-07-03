import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import { useProductStore } from './products'
export const useCategoryStore = defineStore('category', () => {
  const products = useProductStore()
  const count = ref(0)
  const categories = ref([])
  const cartItems = ref([])
  const cartSubtotal = ref(0)
  const cartTotalDiscount = ref(0)

  const getCategories = async () => {
    try{
      const res = await axios.get("categories")
      categories.value = res.data
      console.log(res.data)
    } catch(e){
      console.log(e)
    }
    
  }
  return {
    count,
    categories,
    cartItems,
    cartSubtotal,
    cartTotalDiscount,
    getCategories
  }
})
