import Vue from 'vue'
import Router from 'vue-router'

// Module routes
import { MainHomeRoute } from './main'
import { AuthLoginRoute, AuthRegisterRoute } from './auth'
import { DeviceListRoute } from './device'

// Vue Router setup
Vue.use(Router)

// Exports new Router instance
export default new Router({
  routes: [
    MainHomeRoute,
    DeviceListRoute,
    AuthLoginRoute,
    AuthRegisterRoute
  ]
})
