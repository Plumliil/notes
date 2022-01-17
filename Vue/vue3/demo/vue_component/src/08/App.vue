<template>
    <div>
        <h1>App</h1>
        <nav-bar :name="name">
            <template #left>
                <button>左边按钮</button>
            </template>
            <template #center>
                <h2>title</h2>
            </template>
            <template #right>
                <i>右边元素</i>
            </template>
            <template #[name]>
                <i>plum</i>
            </template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    components:{NavBar},
    data(){
        return{
           name:'plum'
        }
    },
    
}
</script>

<style scoped>

</style>