<template>
  <div class="hello">
   
    <h3>Ecosystem</h3>
    <ul v-if="items.length>0">
      <li v-for="item in items" v-bind:key="item.id" >
      <a href="https://router.vuejs.org" rel="noopener">
      {{ item }}
      </a>
      </li>
      </ul>
      <ul v-else >
      	<PulseLoader />
      </ul>
  </div>
</template>

<script>
import { PulseLoader } from "vue-spinner/dist/vue-spinner.min.js"
export default {
  name: 'StoreProduct',
  props: {
    items: Array
  },
  components: {
  	PulseLoader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
