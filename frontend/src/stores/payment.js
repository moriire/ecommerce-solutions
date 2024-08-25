import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from './auth'
import { useRouter } from 'vue-router'
import axios from 'axios'

const SECRET_KEY = "sk_test_7164d1189677d87342acd24cc906407eaaba17e8"
export const usePaymentStore = defineStore('payment', () => {
  const auth = useAuthStore();
  const router = useRouter();
  const paymentData = ref({})
  const doPayment = async (email, amount, metadata) => {
    try {
      const res = await axios.post("https://api.paystack.co/transaction/initialize",
        {
          "email": email,
          "amount": amount,
          "callback_url": "http://127.0.0.1:5173/success",
          "channel": ["card"],
          "metadata": metadata
        },
        {
          headers: {
            Authorization: `Bearer ${SECRET_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(res.data.data)
      paymentData.value = res.data.data
      window.location.href = res.data.data.authorization_url
    } catch (e) {
      console.log(e)
    }
  }

  return {
    doPayment
  }
})
