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
      isEmployer: false
    },
    config: {
      contactEmail: null,
      eventEmail: null,
      sendVerify: false,
      newEmail: null,
      newPassword: null,
    },
    loadedpros: {
      location: '',
      contact: '',
      image: '',
      minperhour: '',
      specialty: '',
      title: '',
      yrsexperience: '',
      email: '',
      zip: '',
      alias: '',
      experience: '',
      featured: '',
      name: '',
      preferredContact: '',
      phone: '',
      role: '',
      user_id: '',
 }
 },
  mutations: {
    setCredentials (state, payload) {
      state.user.alias = payload.alias;
      state.user.isLoggedIn = payload.isLoggedIn;
      state.user.isWorker = payload.isWorker;
      state.user.isEmployer = payload.isEmployer;
    },
    setConfig (state, payload) {
      state.config.contactEmail = payload.contactEmail;
      state.config.eventEmail = payload.eventEmail;
      state.config.sendVerify = payload.sendVerify;
      state.config.newEmail = payload.newEmail;
      state.config.newPassword = payload.newPassword
    },
    createPro (state, payload) {
      state.loadPros.push(payload)
    }
  },
actions: {
  // createPro ({commit}, payload) {
  //   const pro = {
  //     name: payload.name,
  //     city: payload.city,
  //     email: payload.email,
  //     zip: payload.zip,
  //     experience: payload.experience,
  //     image: payload.image,
  //     location: payload.location,
  //     minperhour: payload.minperhour,
  //     canContact: payload.canContact,
  //     preferredContact: payload.preferredContact,
  //     phone: payload.phone,
  //     specialty: payload.specialty,
  //     yrsexperience: payload.yrsexperience
  //   }
    // firebase.database().ref('specialistProfile').push(pro)
    // .then((data) => {
    //   console.log(data)
    //   commit('createPro', pro)
    // })
    //   .catch((error) => {
    //     console.log(error)
    //   })
    // Reach out to firebase and store it
  },
  getters: {
    loadedpros (state) {
      return state.loadedpros.sort((proA, proB) => {
        return proA.zip > proB.zip
      })
    },
    loadedPro (state) {
      return (proId) => {
      return state.loadedPros.find((pro) => {
        return pro.id === proId
      })
    }
    }
  },
})
// })
