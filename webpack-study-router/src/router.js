import VueRouter from 'vue-router'
import account from './Account.vue'
import goodslist from './Goodslist.vue'
import login from './sub/login.vue'
import register from './sub/register.vue'

var router = new VueRouter({
    routes: [
        //account goodslist
        {
            path: '/account',
            component: account,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register },
            ]
        },
        { path: '/goodslist', component: goodslist },
        { path: '/app', component: app }
    ]
})

export default router
