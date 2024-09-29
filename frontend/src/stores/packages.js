import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from '@/axios'
export const usePackageStore = defineStore('package', () => {
  const packages = ref([])

  const getPackages = async () => {
    try{
      const res = await axiosInstance.get("packages")
      packages.value = res.data
      console.log(res.data)
    } catch(e){
      console.log(e)
    }
    
  }
  return {
    packages,
    getPackages
  }
})