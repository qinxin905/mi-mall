import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import login from './pages/login'

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
        },
        {
            name:'login',
            path:'/login',
            component:login
        }
    ]
})
