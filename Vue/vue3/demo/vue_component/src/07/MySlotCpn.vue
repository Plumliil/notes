<template>
    <div>
        <h3>组件开始</h3>
        <slot>我是默认插槽 1 内元素</slot>
        <slot>我是默认插槽 2 内元素</slot>
        <slot>我是默认插槽 3 内元素</slot>
        <h3>组件结束</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{
           
        }
    },
    
}
</script>

<style scoped>

</style>