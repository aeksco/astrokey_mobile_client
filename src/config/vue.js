import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'

// Bootstrap-Vue + Styles
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// VueOnset + Styles
import VueOnsen from 'vue-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// VueOnsen
// OnsenUI components and directives
Vue.use(VueOnsen)

// bootstrap-vue
// Bootstrap components and directives
// Vue.use(BootstrapVue)

// vue-meta
// supports `meta` object returned with `module.defaults`
Vue.use(Meta)

// vuex
// State management library
Vue.use(Vuex)
