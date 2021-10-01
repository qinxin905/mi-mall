<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
// import jsonp from 'jsonp';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    //第一种：axios cors跨域
    // axios({
    //   method:'get',
    //   url:'http://poetry.apiopen.top/sentences'
    // }).then((result)=>{
    //     console.log(result.data.result)
    // })

  //第二种： jsonp跨域解决方案
  // var url='https://www.imooc.com/search/hotwords'
  // jsonp(url,function(err,result){
  //   console.log(result)
  // })

  //第三种，本地服务代理 devServer
  var url='http://localhost:8080/api1/search/hotwords'
axios({
  method:'get',
  url:url
}).then((result)=>{
  console.log(result)
})

// axios({
//   url:'http://localhost:8080/api2',
//   method:'get'
// }).then((result)=>{
//     console.log('my qingxin'+result)

// })
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
