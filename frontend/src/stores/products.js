import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useProductStore = defineStore('product', () => {
  const pages = reactive({
    limit: 1,
    offset: 0,
    total: 0,
    items: function(){
      return Math.ceil(this.total/this.limit)
    }
  })
  const hasPrev = computed(() =>
    pages.offset > 0
  );

  const hasNext = computed(() =>
    pages.offset + pages.limit < pages.total
);
const nextPage = () => {
  pages.offset += pages.limit;
  getProducts()
};
const prevPage = () => {
  if (pages.offset > 0) {
    pages.offset -= pages.limit;
    getProducts()
  }
};
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
    const res = await axios.get(`products?limit=${pages.limit}&offset=${pages.offset}`)
    products.value = res.data.results
    pages.total = res.data.count;
    //pages.items = pages.total/pages.limit;
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
  hasNext,
  hasPrev,
  pages,
  nextPage,
  prevPage,
  addToCart,
  deleteCart,
  getProducts,
}
})
