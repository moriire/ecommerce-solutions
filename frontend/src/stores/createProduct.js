import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useProductStore = defineStore('product', () => {
  const formData = reactive({
    package: {

    },
    category: {

    },
    profile: {

    },
    name:"",
    description: "",
    price: 0,
    quantity: 0,
    
  })
  
  return {
    count,
    products,
    cartItems,
    cartSubtotal,
    cartTotalDiscount,
    addToCart,
    deleteCart,
    getProducts,
  }
})
