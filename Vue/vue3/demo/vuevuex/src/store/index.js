import { createStore } from 'vuex'
import home from './modules/home'
import user from './modules/user'


const store = createStore({
  state() {
    return {
      rootCounter: 0
    }
  },
  mutations:{
    add(state){
      state.rootCounter++;
    },
    sub(state){
      state.rootCounter--;
    },
  },
  getters:{

  },
  actions:{

  },
  modules:{
    home,
    user
  }
})

export default store