<template>
  <router-view />
</template>

<script>
import globals from "./stores/globals"
export default {
  name: "App",
  data() {
     return {globals: globals}
  },
  provide() {
   return { globals: this.globals }
   },
   created(){
    this.$watch(
      ()=> this.globals.state,
      () => {
            
           this.$router.beforeEach((to, from, next) => {
                if(to.path !=="/account/login" && !this.globals.state.loggedIn){
                    next({path: "/account/login"})
                }else {
                next()
                }
            });
        }
    )
   }
}
</script>