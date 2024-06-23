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
    await products.getProducts()
    let prod = products.products
    const filteredArr= prod.filter((x, index) => {
      return (
        prod.findIndex((cat) => cat.category.name === x.category.name) === index
      );
    }) || [];
    categories.value = filteredArr
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
