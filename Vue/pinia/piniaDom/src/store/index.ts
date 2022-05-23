import { defineStore } from "pinia";

const useStore = defineStore('main', {
    state: () => {
        return {
            count: 10,
            list: [
                {name:'apple',color:'red'},
                {name:'banana',color:'yellow'}
            ]
        }
    }
})

export default useStore