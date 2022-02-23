<template>
    <div>
        <h2>ABOUT</h2>
        <h3>{{$route.query.name}}-{{$route.query.age}}</h3>
    </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route.query)
    },
}
</script>

<style>
</style>