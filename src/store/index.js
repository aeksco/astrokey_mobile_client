import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import device from './device'
import notification from './notification'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    auth,
    device,
    notification
  }
})
