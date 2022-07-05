<template>
  <div class="profile">
    <h1>This is an about page</h1>
  </div>
  <StoreProduct :items="items" />
</template>
<script>
import axios from  "axios"
import StoreProduct from '@/components/StoreProduct.vue';
export default {                     name: 'ProfileView',
  data(){
  	return {
		items: [],
	}
  },
  components: {                        StoreProduct
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
