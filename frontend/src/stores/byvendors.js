import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
import axiosInstance from '@/axios'

export const useByvendorsStore = defineStore('byvendors', () => {
  const count = ref(0)
  const productsInVendor = ref([])
  const getProductsByVendor = async (Vendor_slug) => {
    try {
      const res = await axiosInstance.get(`profile?Vendor__slug=${Vendor_slug}`)
      productsInVendor.value = res.data.data
      console.log(res.data.data)
    } catch (e) {
      console.log(e)
    }
  }
  return {
    count,
    productsInVendor,
    getProductsByVendor
  }
})
