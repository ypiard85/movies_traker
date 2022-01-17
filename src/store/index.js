import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorStatus: false,
    errorTexte: "Nous sommes désoler mais notre api est temporairement indisponible"
  },
  mutations: {
    seterror(state){
      state.errorStatus = true
    }
  },
  actions: {
    seterror(context){
      context.commit('seterror')
    }

  },
  modules: {
  }
})
