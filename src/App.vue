<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: { },
  methods: {
    getuserName(){
      this.$axios.get('user').then((result={})=>{
           this.$store.dispatch('saveName',result.username)
      }).catch(function(){
          console.log('用户没有登录')
      })
     
    },
    getCartSum(){
       this.$axios.get('/carts/products/sum').then((result=0)=>{
           this.$store.dispatch('getCartSum',result)
      }).catch(function(){
          console.log('没有登录，无法获取购物车信息')
      })
    }
  
  },
   mounted() {
    this.getuserName();
    this.getCartSum()
  },
 
}
</script>

<style lang='scss'>
@import url('./assets/scss/reset.scss');
@import url('./assets/iconfont/iconfont.css');
@import url('./assets/scss/common.css');
</style>
