import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import About from './views/About.vue'
import Service from './views/Service.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/service/:id',
            name: 'service',
            component: Service
        },
    ]
})