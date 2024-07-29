import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
//import axios from "axios"
import axiosInstance from '@/axios'

export const useHomeStore = defineStore('home', () => {
    const latests = ref([])
    const discounteds = ref([])
    const promotions = ref([])
    const getLatest = async () => {
        try {
            const res = await axiosInstance.get(`normal-product-with-images?count=8`)
            latests.value = res.data.data
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getDiscounted = async () => {
        try {
            const res = await axiosInstance.get(`normal-product-with-images?discount=50`)
            discounteds.value = res.data.data
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    const getPromoted = async () => {
        try {
            const res = await axiosInstance.get(`normal-product-with-images`)
            promotions.value = res.data
            console.log(res.data)
        } catch (e) {
            console.log(e)
        }
    }

    
    return {
        getLatest,
        latests,
        getDiscounted,
        discounteds,
        getPromoted,
        promotions

    }
})