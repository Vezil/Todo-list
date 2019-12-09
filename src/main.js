import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Master from './components/layouts/Master'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import {store} from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

window.eventBus = new Vue()

const routes = [
  {path:'/', component: Home},
  {path:'/todos', component: App},
  {path:'/login', component: Login},
  {path:'/register', component: Register},
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

/* eslint-disable no-new */
new Vue({
  
  el: '#app',
  router: router,
  store: store,
  components: { Master },
  template: '<Master/>'
})
