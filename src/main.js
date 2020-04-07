import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'babel-polyfill'
import firebase from 'firebase'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome'
import { store } from './store/store'
import VueChatScroll from 'vue-chat-scroll'
import Chat from 'vue-beautiful-chat'
import { BootstrapVue } from 'bootstrap-vue'
import { StripeCheckout } from 'vue-stripe'

Vue.use(Chat)
Vue.use(VueChatScroll)
Vue.use(BootstrapVue)

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('stripe-checkout', StripeCheckout);


Vue.config.productionTip = false
// wait for firebase auth to init before creating the app


firebase.auth().onAuthStateChanged(user => {
  // dispatch user
  store.dispatch('setUser', user);



new Vue({
  el: '#app',
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

})