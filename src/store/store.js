import Vue from "vue";
import Vuex from "vuex";
// import * as firebase from 'firebase'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      alias: "guest",
      isLoggedIn: false,
      isWorker: false,
      isEmployer: false,
      isWorkerProfile: false,
      currentUser: null,
      currentChannel: null,
      isPrivate: false,
      user_id: null
    },
    config: {
      contactEmail: null,
      eventEmail: null,
      sendVerify: false,
      newEmail: null,
      newPassword: null,
      
    },
    
  },
  mutations: {
    setCredentials(state, payload) {
      state.user.alias = payload.alias;
      state.user.isLoggedIn = payload.isLoggedIn;
      state.user.isWorker = payload.isWorker;
      state.user.isEmployer = payload.isEmployer;
      state.user.user_id = payload.user_id;
    },
    setConfig(state, payload) {
      state.config.contactEmail = payload.contactEmail;
      state.config.eventEmail = payload.eventEmail;
      state.config.sendVerify = payload.sendVerify;
      state.config.newEmail = payload.newEmail;
      state.config.newPassword = payload.newPassword;
    },
    SET_USER(state, user) {
      state.currentUser = user;
  },

  SET_CURRENT_CHANNEL(state, channel) {
      state.currentChannel = channel;
  },

  SET_PRIVATE(state, isPrivate) {
      state.isPrivate = isPrivate;
  },
  addToCart(state, item){

    let found = state.cart.find(product => product.productId == item.productId );

    if(found){
      found.productQuantity++;
    }else{
      state.cart.push(item);

    }

    this.commit('saveData');

  },

  saveData(state){
    window.localStorage.setItem('cart', JSON.stringify(state.cart));
  },

  removeFromCart(state, item){

      let index = state.cart.indexOf(item);
      state.cart.splice(index,1);

    this.commit('saveData');

  }

  },
  actions: {
    setUser(state, user) {
      state.commit('SET_USER', user);
  },

  setCurrentChannel({ commit }, channel) {
      commit('SET_CURRENT_CHANNEL', channel);
  },

  setPrivate({ commit }, isPrivate) {
      commit('SET_PRIVATE', isPrivate);
  }
  
  },
  getters: {
    currentUser: state => state.currentUser,
    currentChannel: state => state.currentChannel,
    isPrivate: state => state.isPrivate,
    totalPrice: state => {
      let total = 0;
      state.cart.filter((item) => {
          total += (item.productPrice * item.productQuantity);
      });

      return total;
    }
}
  
  
});
// })
