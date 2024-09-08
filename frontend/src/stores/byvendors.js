import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import axiosInstance from '@/axios'

export const useByvendorsStore = defineStore('byvendors', () => {
  const count = ref(0)
  const vendorData = ref({})
  
  const getVendor = async ()=>{
    try{
      const res = await axiosInstance.get(`normal-product-with-images/get_profile`)
      vendorData.value = res.data
    } catch(e){
      console.log(e)
    } finally{
  
    }
  }
  return {
    count,
    vendorData,
    getVendor
  }
})
