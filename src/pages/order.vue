<template>
  <div>
      <router-view></router-view>
      <footer-server></footer-server>
     <main-footer></main-footer>
  </div>
</template>

<script>
import MainFooter from '../components/MainFooter'
import FooterServer from '../components/FooterServer'
export default {
    name:'Order',
    components:{
        MainFooter,
        FooterServer
    }
}
</script>

<style>

</style>