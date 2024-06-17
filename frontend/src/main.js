
//import "bootstrap/dist/css/bootstrap.min.css"

//import "@fortawesome/fontawesome-free/css/all.min.css"
//import "bootstrap/dist/js/bootstrap.min.js"
//import "bootstrap/dist/js/bootstrap.bundle.min.js"
//import "@fortawesome/fontawesome-free/js/all.min.js"
//import "/src/assets/js/vendor.js"
//import "/src/assets/js/main.js"

// import function to register Swiper custom elements


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from "axios"
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.config.globalProperties.$axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
app.use(createPinia())
app.use(router)

app.mount('#app')
