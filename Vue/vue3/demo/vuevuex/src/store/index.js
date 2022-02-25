import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'zs',
      age: 20,
      books: [
        { name: 'vue.js', price: 200, count: 3 },
        { name: 'three.js', price: 210, count: 13 },
        { name: 'node.js', price: 220, count: 23 },
        { name: 'js', price: 230, count: 33 },
      ],
      discount: 0.6
    }
  },
  mutations: {
    add(state) {
      state.counter++
    },
    sub(state) {
      state.counter--
    },
  },
  getters: {
    totalPrice(state,getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count + book.price
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    titalCounterGreaterN(state){
      return function(n){
        return state.books.filter(item=>item.count>n)
      }
    },
    nameInfo(state){
      return `name:${state.name}`
    },
    ageInfo(state){
      return `age:${state.age}`
    }
  }
})

export default store
