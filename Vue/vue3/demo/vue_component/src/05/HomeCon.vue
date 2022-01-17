<template>
    <div>
        <h3>HomeCon</h3>
        <h4>{{name}}---{{age}}-----{{length.value}}</h4>
    </div>
</template>

<script>
export default {
    inject:['name','age','length'],
    data(){
        return{
           
        }
    },
    
}
</script>

<style scoped>

</style>