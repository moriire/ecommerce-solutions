<template>
  <div class="profile">
    <h1>This is an about page</h1>
  </div>
  <StoreProduct :items="items" />
</template>
<script>
import { PulseLoader } from "vue-spinner/dist/vue-spinner.min.js"
import axios from  "axios"
import StoreProduct from '@/components/StoreProduct.vue';
export default {                     name: 'ProfileView',
  data(){
  	return {
		items: [],
	}
  },
  components: {
  	StoreProduct,
	PulseLoader,
  },
  methods: {
     async getProfileItems(){
     	try {
	const resp = await axios.get("https://ecs.pythonanywhere.com/api/users/")
	this.items = resp.data;
	} catch(error) {
		alert(JSON.stringify(error));
	}

     }
  },
  created(){
  	this.getProfileItems()
  }
}
</script>
