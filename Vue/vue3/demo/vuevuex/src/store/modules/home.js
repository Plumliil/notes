const homeModule={
    namespaced:true,
    state(){
        return {
            homeCounter:100
        }
    },
    mutations:{
        add(state){
            state.homeCounter++
        }
    },
    getters:{
        doubleCounter(state){
            return state.homeCounter*2
        }
    },
    actions:{

    }
}


export default homeModule