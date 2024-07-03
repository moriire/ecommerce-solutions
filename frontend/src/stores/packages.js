import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"
export const usePackageStore = defineStore('package', () => {
  const packages = ref([])

  const getPackages = async () => {
    try{
      const res = await axios.get("packages")
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