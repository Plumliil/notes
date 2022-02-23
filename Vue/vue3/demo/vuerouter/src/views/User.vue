<template>
    <h2>USER:{{$route.params.username}}</h2>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    // created() {
    //     console.log(this.$route.params.username)
    // },
    setup() {
        const route=useRoute()
        console.log(route)
    }
}
</script>

<style>
</style>