<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  created(){ 
      if (localStorage.getItem('user')) {
        this.$router.replace('/home')
      }else if(this.$router.path !== '/login'){
            this.$router.replace('/login')
        }
    }
}
</script>
<style lang="less">
html,body{
  margin: 0;
  padding: 0;
}
#app {
 height: 100vh;
}
</style>
