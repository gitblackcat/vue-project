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
import axios from './axiosConfig.js'
// import axios from 'axios'
// axios.interceptors.request.use(function (config) { //配置发送请求的信息
//     stores.dispatch('showLoading')
//     return config
// }, function (error) {
//     return Promise.reject(error)
// })

// axios.interceptors.response.use(function (response) { //配置请求回来的信息
//     stores.dispatch('hideLoading')
//     return response
// }, function (error) {
//     return Promise.reject(error)
// })

Vue.prototype.$http = axios

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