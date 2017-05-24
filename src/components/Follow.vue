<template>
    <div class="content mt40">
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arrList">
                    <a href="javascript:;">
                        <h2>{{index+1}} .{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
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
            this.$http.get('https://www.easy-mock.com/mock/592588fe91470c0ac1fc3abd/project/follow').then(function (res) {
                self.arrList = res.data
            }).catch(function (error) {
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
.mt40 {
    margin-top: 40px;
}
</style>
