<template>
    <div>
        <h2>我是vue渲染</h2>
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'PLUMLI'
        }
    },
    methods:{

    }
}
</script>

<style>
h2{
    color: aqua;
}
</style>