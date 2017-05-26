import axios from 'axios'
import stores from './stores/store'

export default axios.create({})

axios.interceptors.request.use(function (config) { //配置发送请求的信息
    stores.dispatch('showLoading')
    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    stores.dispatch('hideLoading')
    return response
}, function (error) {
    return Promise.reject(error)
})