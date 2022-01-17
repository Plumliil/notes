<template>
    <div>
        <h2>About</h2>
        <button @click="btnClick">点击</button>
    </div>
</template>

<script>
import emitter from './utils/eventBus';
export default {
    data(){
        return{
           
        }
    },
    methods:{
        btnClick(){
            console.log('about点击了');
            emitter.emit('cli',{name:'plumli',age:20})
        }
    }
}
</script>

<style scoped>

</style>