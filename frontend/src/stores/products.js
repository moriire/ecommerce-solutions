import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from "@/axios"
import { useAuthStore } from './auth'
import router from '@/router'
import alertify from '@/services/alertify'

export const useProductStore = defineStore('product', () => {
  const auth = useAuthStore();
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
const cartItems = ref(JSON.parse(localStorage.getItem("userCart")) || []); //ref([])
//const cartSubtotal = ref(0)
//const cartTotalDiscount = ref(0)

const cartSubtotal = computed(() => {
  console.log(cartItems.value)
  let numbers = cartItems.value.map(x => x.product.price * 2);
  return numbers.reduce((sum, num) => sum + num, 0);
  //cartSubtotal.value = total
  //console.log(total)
})

const cartTotalDiscount = computed(()=>{
  let numbers = cartItems.value.map(x => x.product.discounted_price * 2);
  return numbers.reduce((sum, num) => sum + num, 0)
  //cartTotalDiscount.value = total
  //console.log(total)
})

const getCart = ()=>{
  console.log("hello")
  
}


const productStore = ref(JSON.parse(localStorage.getItem("userCart")) || [])

const addToCartLocal =  (product_obj) => {
  console.log(product_obj)
    cartItems.value.push(product_obj)
    const cartArray = JSON.stringify(cartItems.value)
    localStorage.setItem("userCart", cartArray);
    console.log(cartArray);
    getCart()
     // getCartSubtotal()
      //getCartTotalDiscount()
  
    //cartItems.value.push(item)
    //alertify.notify("yes", 'success', 10)// ("Already in cart" + product_id)
  //getCartSubtotal()
  //getCartTotalDiscount()
  
}


const addToCart = async (product_id) => {
  if (!auth.accessToken){
    return router.push("/auth/login")
  } else {
    try{
      const res = await axiosInstance.post('cart',
        {
          user: auth.userInfo.pk,
          product: product_id
        }
      )
      alertify.alert("yes")
      //console.log(res.data)
      getCart()
     // getCartSubtotal()
      //getCartTotalDiscount()
    } catch(e){
      console.log(e)
    }
    //cartItems.value.push(item)
    alertify.notify("yes", 'success', 10)// ("Already in cart" + product_id)
  //getCartSubtotal()
  //getCartTotalDiscount()
  }
}

const deleteCart = async (item_id) => {
  try{
    const res = await axiosInstance.delete(`cart/${item_id}`)
    //.value = res.data.data
    console.log(res)
    getCart()
  } catch(e){
    console.log(e)
  }
}

const incCart = async (item_id, val) => {
  getCart()
  try{
    const res = await axiosInstance.patch(`cart/${item_id}`, 
      {
        count: val
      }
    )
    //.value = res.data.data
    console.log(res)
    getCart()
  } catch(e){
    console.log(e)
  }
}


const decCart = async (item_id, val) => {
  try{
    const res = await axiosInstance.patch(`cart/${item_id}`, 
      {
        count: val
      }
    )
    //.value = res.data.data
    console.log(res)
    getCart()
  } catch(e){
    console.log(e)
  }
}

const getProducts = async () => {
  try {
    const res = await axiosInstance.get(`product-with-images?limit=${pages.limit}&offset=${pages.offset}`)
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
    const res = await axiosInstance.get(`product-with-images/${product_id}`)
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
  //getCartSubtotal,
  //getCartTotalDiscount,
  addToCart,
  deleteCart,
  getProducts,
  singeProduct,
  getCart,
  incCart,
  decCart,
  addToCartLocal,
}
})
