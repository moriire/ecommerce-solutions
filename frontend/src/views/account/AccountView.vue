<template>
  <router-view />
</template>

<script>
export default {
  name: 'AccountView',
  inject: ["globals"],
  created() {
  this.$watch(
  ()=> this.globals.state,
  () => {
  	if(this.globals.state.loggedIn) { 
	 this.router.push("/")
	}
  }

  )
  }
  }
</script>
