import Vue from 'vue'
// import account from './Account.vue'
// import goodslist from './Goodslist.vue'
// import login from './sub/login.vue'
// import register from './sub/register.vue'
import app from './App.vue'

import router from './router.js'
//1.导入router的模块
import VueRouter from 'vue-router'
//2.在vue中使用router
Vue.use(VueRouter)

//3.创建路由对象
// var router = new VueRouter({
//     routes: [
//         //account goodslist
//         {
//             path: '/account',
//             component: account,
//             children: [
//                 { path: 'login', component: login },
//                 { path: 'register', component: register },
//             ]
//         },
//         { path: '/goodslist', component: goodslist },
//         { path: '/app', component: app }
//     ]
// })

var vm = new Vue({
    el: "#app",
    render: c => c(app),
    router

})

//cnpm i vue-router -S安装路由