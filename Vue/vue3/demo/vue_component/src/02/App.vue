<template>
    <div>
        <h2>App</h2>
        <HelloWorld></HelloWorld>
    </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
    components:{HelloWorld},
    data(){
        return{
           
        }
    },
    
}
</script>

<style scoped>
    h2{
        color: red;
    }
</style>