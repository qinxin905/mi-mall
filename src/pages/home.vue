<template>
  <div>
      <main-header></main-header>
      <router-view></router-view>
      <main-footer></main-footer>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'

export default {
    name:'main-home',
    components:{
        MainHeader,
        MainFooter
    }
}
</script>

<style>

</style>