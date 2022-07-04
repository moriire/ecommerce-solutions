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
      <h2>Nothing to show </h2>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'StoreProduct',
  props: {
    items: Array
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
