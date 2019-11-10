import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    addlist(state,res){
      state.list.push(res)
    }
  },
  actions: {

  }
})
