<template>
    <div>
        <template v-for="(item,index) in names">
            <slot name="plum" :item="item" :index="index"></slot>
            <slot :item="item" :index="index"></slot>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        names:{
            type:Array,
            default:()=>[]
      }
    },
    data(){
        return{
           
        }
    },
    
}
</script>

<style scoped>

</style>