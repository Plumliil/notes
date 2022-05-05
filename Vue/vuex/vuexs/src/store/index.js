import Vue from 'vue'
import Vuex from 'vuex'

import state from './state';
import getters from './getters';
// import mutations from './mutations';
import mutations from './mutations_type';
import actions from './actions';

import users from './users/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  // 主模块
  modules: {
    // 子模块
    users
  }
})