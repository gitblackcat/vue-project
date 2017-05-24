<template>
    <div class="content">
        <Slider></Slider>
        <div class="newsList">
            <ul>
                <li v-for="item in arrList">
                    <router-link :to="`/article/${item.id}`">
                        <h2>{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Slider from './Slider.vue'

export default {
    data() {
        return {
            arrList: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            var self = this
            this.$http.get('https://www.easy-mock.com/mock/592588fe91470c0ac1fc3abd/project/index').then(function (res) {
                self.arrList = res.data
            }).catch(function (err) {
                console.log(err)
            })
        }
    },
    components: {
        Slider
    }
}
</script>

<style>
@import '../assets/css/index.css'
</style>
