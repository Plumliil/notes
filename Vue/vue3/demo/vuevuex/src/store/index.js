import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'zs',
      age: 20
    }
  },
  mutations: {
    add(state) {
      state.counter++
    },
    sub(state) {
      state.counter--
    },
  }
})

export default store
