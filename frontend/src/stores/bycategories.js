import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useBycategoriesStore = defineStore('bycategories', () => {
  const count = ref(0)
  const productsInCategory = ref([])
  const getProductsByCategory = async (category_slug) => {
    try {
      const res = await axios.get(`normal-product-with-images?product__category__slug=${category_slug}`)
      productsInCategory.value = res.data.data
      console.log(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }
  return {
    count,
    productsInCategory,
    getProductsByCategory
  }
})
