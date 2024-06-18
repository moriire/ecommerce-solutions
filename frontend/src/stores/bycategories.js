import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useBycategoriesStore = defineStore('bycategories', () => {
  const count = ref(0)
  const productsInCatgory = ref([])
  const getProductsByCategory = async (category_slug) => {
    try {
      const res = await axios.get(`products?category__slug=${category_slug}`)
      productsInCatgory.value = res.data.data
      console.log(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }
  return {
    count,
    productsInCatgory,
    getProductsByCategory
  }
})
