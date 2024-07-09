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
const product = ref({})
const paginatedProducts = ref([])
const cartItems = ref([])
const cartSubtotal = ref(0)
const cartTotalDiscount = ref(0)
const getCartSubtotal = () => {
  let numbers = cartItems.value.map(x => x.product.price)
  const total = numbers.reduce((sum, num) => sum + num, 0);
  cartSubtotal.value = total
  //console.log(total)
}
const getCartTotalDiscount = () => {
  let numbers = cartItems.value.map(x => x.product.discounted_price)
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
    const res = await axios.get(`product-with-images?limit=${pages.limit}&offset=${pages.offset}`)
    products.value = res.data.results
    pages.total = res.data.count;
    //pages.items = pages.total/pages.limit;
    console.log(res.data)
  } catch (e) {
    console.log(e)
  }
}


const singeProduct = async (product_id) => {
  try {
    const res = await axios.get(`product-with-images/${product_id}`)
    product.value = res.data
    //pages.items = pages.total/pages.limit;
    console.log(res.data)
  } catch (e) {
    console.log(e)
  }
}

return {
  count,
  product,
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
  singeProduct,
}
})
