import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useProductStore = defineStore('product', () => {
  const count = ref(0)
  const products = ref([])
  const paginatedProducts = ref([])
  const cartItems = ref([])
  const cartSubtotal = ref(0)
  const cartTotalDiscount = ref(0)
  const getCartSubtotal = () => {
    let numbers = cartItems.value.map(x => x.price)
    const total = numbers.reduce((sum, num) => sum + num, 0);
    cartSubtotal.value = total
    //console.log(total)
  }

  const getCartTotalDiscount = () => {
    let numbers = cartItems.value.map(x => x.discounted_price)
    const total = numbers.reduce((sum, num) => sum + num, 0);
    cartTotalDiscount.value = total
    //console.log(total)
  }

  const addToCart = (item) => {
    cartItems.value.push(item)
    alert("Already in cart" + item.name)
    getCartSubtotal()
    getCartTotalDiscount()
  }
  const deleteCart = async (item) => {
    await cartItems.value.pop(item)
    getCartSubtotal()
    getCartTotalDiscount()
  }
  const getProducts = async () => {
    try {
      const res = await axios.get("products")
      products.value = res.data.data
      console.log(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }
  
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
