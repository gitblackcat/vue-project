import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routerConfig.js'
const router = new VueRouter({
    routes,
    scrollBehavior: () => ({
        y: 0
    }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
})

import Loading from './components/loading'
Vue.use(Loading)
import {
    instance
} from './axiosConfig.js'

Vue.prototype.$http = instance

import Vuex from 'vuex'
import stores from './stores/store'

import filters from './filters'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

new Vue({
    el: '#app',
    router,
    store: stores,
    render: h => h(App)
})