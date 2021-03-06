import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Master from './components/layouts/Master'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Logout from './components/pages/Logout'
import {store} from './store/store'
import * as VeeValidate from 'vee-validate'
import CxltToastr from 'cxlt-vue2-toastr'

const toastrConfigs = {
  position:'bottom right',
  showDuration: 2000,
  timeOut: 5000,
  progressBar:true,
}

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(CxltToastr, toastrConfigs)

window.eventBus = new Vue()

const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path:'/todos',
    component: App,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path:'/login',
    component: Login,
    props:true,
    meta: {
      requiresVisitor: true,
    }
  },

  {
    path:'/register',
    component: Register,
    meta: {
      requiresVisitor: true,
    }
  },

  {
    path:'/logout',
    component: Logout,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
})


router.beforeEach((to,from,next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.getters.loggedIn) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else if(to.matched.some(record => record.meta.requiresVisitor)) {
    if(store.getters.loggedIn){
      
      next({
      path: '/todos',
      })
    } else {
      next()
    }
  } else{
    next()
  }
})


/* eslint-disable no-new */
new Vue({
  
  el: '#app',
  router: router,
  store: store,
  components: { Master },
  template: '<Master/>'
})
