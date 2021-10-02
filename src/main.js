import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router.js'
import storage from './storage'

new Vue({
  router,
  render: h => h(App),
  mounted(){
    storage.setItem('user','wlm')
    storage.setItem('a','user')
    storage.setItem('b',{'a':1})
    storage.setItem('f',{'a':1})
    storage.setItem('s','3','f')
   
    console.log(storage.getStorage())

    console.log(storage.getItem('name','user'));
  }
}).$mount('#app')
