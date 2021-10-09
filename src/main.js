import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false


import router from './router.js'
import storage from './storage/index'
import store from './store'
// mock数据代理
// var mock=true;
// if(mock){
//   require('./mock/api.js')
// }

axios.defaults.baseURL='/api';
axios.defaults.timeout=5000
//*axios错误拦截处理 */
axios.interceptors.response.use(function(config){
    var data=config.data;
    if(data.status==0){
      return data.data;
    }if(data.status==10){
      return Promise.reject(data)
    }else{
       
      //只要status不是0，10正确的，其它错误的全向外抛出错误
      return Promise.reject(data)
    }
    
},function(error){
    return Promise.reject(error);
})

Vue.use(VueLazyload,{
    preLoad: 1.3,
    // error: 'dist/error.png',
    loading: '/images/loading-svg/loading-bars.svg',  //加载中预设图片
    attempt: 1, //尝试加载次数
})
Vue.prototype.$axios=axios
Vue.prototype.$storage=storage

//注册全局过滤价格的过滤器
Vue.filter('filterPrice',function(value){
      if(!value){
        return '￥ 0.00'
      }else{
        return `￥${value}`
      }
})


new Vue({
  router,
  store,
  mounted(){
   console.log(this)
},
  render: h => h(App),
 
  
}).$mount('#app')

