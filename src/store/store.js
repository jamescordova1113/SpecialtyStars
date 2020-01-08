import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: {
      alias: "guest",
      isAdmin: false,
      isLoggedIn: false
    },
    config: {
      contactEmail: null,
      eventEmail: null,
      sendVerify: false,
      newEmail: null,
      newPassword: null,
    }
  },
  getters: {

  },
  mutations: {
    setCredentials (state, payload) {
      state.user.alias = payload.alias;
      state.user.isAdmin = payload.isAdmin;
      state.user.isLoggedIn = payload.isLoggedIn;
    },
    setConfig (state, payload) {
      state.config.contactEmail = payload.contactEmail;
      state.config.eventEmail = payload.eventEmail;
      state.config.sendVerify = payload.sendVerify;
      state.config.newEmail = payload.newEmail;
      state.config.newPassword = payload.newPassword
    }
  }
});
