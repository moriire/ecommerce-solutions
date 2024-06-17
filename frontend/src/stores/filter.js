import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './products'
export const useFilterStore = defineStore('filter', () => {
  const products = useProductStore()
  const filtered = ref(products.products)
  const page = reactive({pageCount: 1, totalPages: products.products.length, start: 0, next:function(){ return this.pageSize*this.pageCount}, pageSize: 1, fstate: "", pstate: "disabled"})
  const filterProductsByCategory = (e) => {
    console.log(e.target.value)
    if (e.target.value === "all") {
      filtered.value = products.products
    } else {
      let res = products.products.filter(x => x.category.name === e.target.value)
      filtered.value = res
    }
  }
  const filterProductsByAvailability = (e) => {

    if (e.target.value < 1) {
      filtered.value = products.products.filter(x => x.quantity == 0)
      console.log(filtered.value)
    }
    if (e.target.value > 0) {
      let res = products.products.filter(x => x.quantity > 0)
      filtered.value = res
    }
  }
  const doPagination = async () => {
    let v = products.products.slice(page.start, page.next())
    console.log(page.next())
    filtered.value = v
    if (page.pageCount < (page.totalPages / page.pageSize)){
      page.pageCount += 1
      page.start += page.pageSize
    } else {
      page.pageCount -= 1
      page.start -= page.pageSize
    }
  }
  return {
    filtered,
    page,
    filterProductsByCategory,
    filterProductsByAvailability,
    doPagination
  }
})
