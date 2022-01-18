<template>
    <div @click="divClick">
       <strong>home</strong> {{name}}--{{age}}
    </div>
</template>

<script>
export default {
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true
        }
    },
    emits:['pageClick'],
    name:"home",
    data(){
        return{
           
        }
    },
    methods:{
        divClick(){
            this.$emit('pageClick','home')
        }
    }
}
</script>

<style scoped>

</style>