import { createStore } from 'vuex'
import axios from 'axios'

import { ADD_N } from '../store/mutation-type';
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
      discount: 0.6,
      heros:[]
    }
  },
  mutations: {
    add(state) {
      state.counter++
    },
    [ADD_N](state, payload) {
      console.log(payload);
      state.counter += payload.num
    },
    sub(state) {
      state.counter--
    },
    addHeroData(state,payload){
      state.heros=payload;
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count + book.price
      }
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    titalCounterGreaterN(state) {
      return function (n) {
        return state.books.filter(item => item.count > n)
      }
    },
    nameInfo(state) {
      return `name:${state.name}`
    },
    ageInfo(state) {
      return `age:${state.age}`
    }
  },
  actions:{
    addAction(context){
      console.log(context);
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    },
    getHomeHero(context){
      axios.get('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js?ts=2741699')
      .then(res=>{
        context.commit('addHeroData',res.data.hero)
      })
    }
  }
})

export default store
