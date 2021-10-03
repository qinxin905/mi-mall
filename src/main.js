import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

import router from './router.js'

//第一种方法： 1-1本地创建Json文件
//  axios.defaults.baseURL='/mock';
 //第二种方法：pastmock
//  axios.defaults.baseURL='https://www.fastmock.site/mock/40d7d6fb079b379c87729b021d995b7f/api'
//第三种方法：mockjs
axios.defaults.baseURL='/api';
var mock=true  //为false不开启mock，true为开启
if(mock){
  require('./mock/api')
}


axios.defaults.timeout=5000

Vue.prototype.$axios=axios
//*axios错误拦截处理 */
axios.interceptors.response.use(function(config){

    return config;

},function(error){
    return Promise.reject(error);
})

new Vue({
  router,
  mounted(){
    //第一种方法： 1-2-本地创建Json文件
  //  this.$axios({
  //    method:'get',
  //    url:'/user/login.json'
  //  }).then((result)=>{
  //     console.log(result)
  //  })

  //第二种方法： 2-1  fastmock 平台
  // this.$axios({
  //     method: 'get',
  //     url:'/test-demo'
  // }).then((result)=>{
  //     console.log(result)
  // })

  //第三种方法：3-2 mockjs
  this.$axios({
    method:'get',
    url:'/user/login'
  }).then((result)=>{
    console.log(result)
  })
},
  render: h => h(App),
 
  
}).$mount('#app')

