import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

import router from './router.js'
//动态设置跨域请求的地址，不同环境下地址不同
import env from './env'
//根据前端跨域方式做调整，非代理模式下的
// axios.defaults.baseURL=env.baseUrl;
// axios.defaults.timeout=5000


//*axios错误拦截处理 */
axios.interceptors.response.use(function(config){

    return config;

},function(error){
    return Promise.reject(error);
})

new Vue({
  router,
  mounted(){
    axios({
      method:'get',
      url:env.baseUrl
    })
},
  render: h => h(App),
 
  
}).$mount('#app')
