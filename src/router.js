import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'

Vue.use(Router)

export default new Router({
    routes:[
        {   name:'home',
            path:'/',
            component:Home,
            redirect:'/index',
            children:[
                {
                  path: '/index',
                  name: 'index',
                  component: Index
                },
                {
                        path: '/product/:id',
                        name: 'product',
                        component:Product
                       
                }
            ]
        }
    ]
})
