// const LoadingComponent = require('./Loading.vue')
// const loading = {
//     install: function (Vue) {
//         Vue.component('loading', LoadingComponent)
//     }
// }
// module.exports = loading

import LoadingComponent from './Loading.vue'

// const loading = {
//     install: function (Vue) {
//         Vue.component('loading', LoadingComponent)
//     }
// }

export default {
    install: function (Vue) {
        Vue.component('loading', LoadingComponent)
    }
}