import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import login from './pages/login'
import Cart from './pages/cart'

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
                        path: '/products/:id',
                        name: 'product',
                        component:Product
                       
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: () => import('./pages/detail.vue')
                  }
            ]
        },
        {
            path: '/order',
            name: 'Order',
            component: () => import('./pages/order.vue'),
            children:[
                {
                    path: 'confirm',
                    name: 'OrderConfirm',
                    component: () => import('./pages/orderConfirm.vue')
                  }
            ]
        },
        {
            name:'login',
            path:'/login',
            component:login
        },
        {
            name:'cart',
            path:'/cart',
            component:Cart
        }

    ]
})
