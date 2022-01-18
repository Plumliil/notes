<template>
    <div>
        <h3>NavBar</h3>
        <h3>{{message}}</h3>
        <button @click="getDate">NavBar获取父组件和根组件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message:'我是navbar中的message'
        }
    },
    methods:{
        sayHello(){
            console.log('hello navbar')
        },
        getDate(){
            console.log(this.$parent);
            console.log(this.$root);
            console.log(this.$el);
        }
    }
}
</script>

<style scoped>

</style>