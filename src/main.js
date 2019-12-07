import Vue from 'vue'
import App from './App'
import {store} from './store/store'

Vue.config.productionTip = false

window.eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  
  el: '#app',
  store: store,
  components: { App },
  template: '<App/>'
})
