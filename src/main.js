import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false


import router from './router.js'
import storage from './storage/index'
//mock数据代理
var mock=true;
if(mock){
  require('./mock/api.js')
}

axios.defaults.baseURL='/api';
axios.defaults.timeout=5000
//*axios错误拦截处理 */
axios.interceptors.response.use(function(config){
    var data=config.data;
    if(data.status==0){
      return data.data;
    }
    
},function(error){
    return Promise.reject(error);
})


Vue.prototype.$axios=axios
Vue.prototype.$storage=storage

new Vue({
  router,
  mounted(){
   
},
  render: h => h(App),
 
  
}).$mount('#app')

