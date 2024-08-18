import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from "@/axios"
import { useAuthStore } from './auth'
import router from '@/router'
import alertify from '@/services/alertify'
import { useRouter } from 'vue-router'
import { useShippingStore } from './shipping'


export const useProductStore = defineStore('product', () => {
  const auth = useAuthStore();
  const shipping = useShippingStore();
  const router = useRouter()
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
const cartItemsReview = ref([])
const cartItems = ref(JSON.parse(localStorage.getItem("userCart")) || []); //ref([])
const cartItemsCount = reactive(JSON.parse(localStorage.getItem("userCartCounter")) || {})
//const cartSubtotal = ref(0)
//const cartTotalDiscount = ref(0)

const cartSubtotalReview = computed(() => {
  console.log(cartItemsReview.value)
  let numbers = cartItemsReview.value.map(x => x.cost);
  return numbers.reduce((sum, num) => sum + num, 0);
})

const cartSubtotal = computed(() => {
  console.log(cartItems.value)
  let numbers = cartItems.value.map(x => x.product.price * x.count);
  return numbers.reduce((sum, num) => sum + num, 0);
})

const cartTotalDiscount = computed(()=>{
  let numbers = cartItems.value.map(x => x.product.discounted_price * x.count);
  return numbers.reduce((sum, num) => sum + num, 0)
})

const getCart = async ()=>{
  try {
    const res = await axiosInstance.get(`cart?user=${auth.userInfo.pk}`)
    cartItemsReview.value = res.data.data
  } catch(e){
    console.log("Error", e)
  }
}

const addToCartLocal =  (product_obj) => {
    if (cartItems.value.map(x => x.id).includes(product_obj.id)){
      alert("Already in cart");
      return
    } else {
    product_obj["count"] = 1
    cartItems.value.push(product_obj)
    const cartArray = JSON.stringify(cartItems.value)
    localStorage.setItem("userCart", cartArray);
    //getCart()
    return 
    }
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

const deleteCartLocal = async (item) => {
  cartItems.value.pop(item);
  const cartArray = JSON.stringify(cartItems.value);
  localStorage.setItem("userCart", cartArray);
  getCart()
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

const incCartLocal = async () => {
  getCart();
  //product_obj.count = val;
  console.log(cartItemsCount)
  const cartArray = JSON.stringify(cartItems.value)
    localStorage.setItem("userCart", cartArray);
  getCart()
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
};
const addCartForShipping = async (user, product, count) => {
  try {
    const res = await axiosInstance.post(`cart`,
      {
          user: auth.userInfo.pk,
          product: product,
          count: count
      }
    )
    //cartContents.value = res.data
    //cartContents.value = res.data
    console.log(res.status)
    //getUserProducts()
  } catch (e) {
    console.log(e)
  }
};

const cartObj = (product, count, user) => {product:product, user=user, count=count}

const cartForShipping = computed(() => {
  return cartItems.value.map(x => 
    {
      return {product: x.id, user: auth.userInfo.pk, count: x.count}
    })
})

const addForShipping = async () => {
  shipping.saveOrder()
  try {
    const res = await axiosInstance.post('cart/bulk_cart', cartForShipping.value)
    //cartContents.value = res.data
    //cartContents.value = res.data
    console.log(res)
    console.log(res.data)
    localStorage.removeItem("userCart")
    window.location.href="/orders"
    //getUserProducts()
  } catch (e) {
    console.log(e)
  }
};
return {
  count,
  product,
  products,
  cartItems,
  cartItemsReview,
  cartSubtotal,
  cartTotalDiscount,
  cartSubtotalReview,
  hasNext,
  hasPrev,
  pages,
  nextPage,
  prevPage,
  //getCartSubtotal,
  //getCartTotalDiscount,
  addForShipping,
  addToCart,
  deleteCart,
  deleteCartLocal,
  getProducts,
  singeProduct,
  getCart,
  incCart,
  incCartLocal,
  decCart,
  addToCartLocal,
}
})
