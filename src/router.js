import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Index from './pages/Index'
import Product from './pages/Product'

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

