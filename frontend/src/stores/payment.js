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
  const doPayment = async (email, amount) => {
    try {
      const res = await axios.post("https://api.paystack.co/transaction/initialize",
        {
          "email": email,
          "amount": amount,
          "callback_url": "http://127.0.0.1:5173/success",
          "metadata": {
            "cart_id": 398,
            "custom_fields": [
              {
                "display_name": "user",
                "variable_name": "user",
                "value": 2
              },
              {
                "display_name": "Cart Items",
                "variable_name": "cart_items",
                "value": "3 bananas, 12 mangoes"
              }
            ]
          }
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
