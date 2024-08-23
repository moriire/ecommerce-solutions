import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import axiosInstance from '@/axios'

export const useShippingStore = defineStore('Shipping', () => {
  const auth = useAuthStore();
  const shippingCost = computed( ()=>{
    let data = getShippingCostData.value.filter(x => x.id === shippingDetail.value.city);
    return data
})
  const getShippingCostData = ref([])
  const shippingDetail = ref({
    first_name: "",
    last_name: "",
    city: null,
    email: "",
    country: "Nigeria",
    address: "",
    created_by: null,
  });

  const getShipping = async () => {
    try {
      const res = await axiosInstance.post('shipping/shipping_address', { created_by: auth.userInfo.pk })
      shippingDetail.value = res.data.data
      //shippingDetail.value.city = res.data.data.city
      //console.log(shippingDetail)
    } catch (e) {
      console.log(e.response)
    }
  }
  const getShippingCost = async () => {
    try {
      const res = await axiosInstance.get('shipping-cost')
      getShippingCostData.value = res.data
    } catch (e) {
      console.log(e.response)
    }
  };
  const saveOrder = async () => {
    try {
      const res = await axiosInstance.patch(`shipping/${shippingDetail.value.id}`, shippingDetail.value)
      //getShippingCostData.value = res.data
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  const addShipping = async (product) => {
    await getShipping()
    //alert([...wishes.value, product])
    try {
      const res = await axiosInstance.post(`shipping`,
        {
          user: auth.userInfo.pk,
          product: product
        }
      )
      //wishes.value = res.data
      //wishes.value = res.data
      console.log(res.data)
      //getUserProducts()
    } catch (e) {
      console.log(e)
    }
  }

  return {
    shippingDetail,
    shippingCost,
    getShippingCostData,
    saveOrder,
    getShippingCost,
    getShipping,
  }
})
