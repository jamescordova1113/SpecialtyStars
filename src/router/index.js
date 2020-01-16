import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import Contact from '@/components/Contact'
import CreateWorkerProfile from '@/components/Profiles/CreateWorkerProfile'
import MessageBoard from '@/components/MessageBoard'
import WorkersPage from '@/components/WorkersPage'
import WhatsYourSpec from '@/components/LandingPage/WhatsYourSpec'
import NeedWorkers from '@/components/NeedWorkers'
import SpecialistProfiles from '@/components/Profiles/SpecialistProfiles'


import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      // Add this to do route guard
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },  
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/MessageBoard',
      name: 'MessageBoard',
      component: MessageBoard
    },
    {
      path: '/Profiles/CreateWorkerProfile',
      name: 'CreateWorkerProfile',
      component: CreateWorkerProfile
    },
    {
      path: '/WorkersPage',
      name: 'WorkersPage',
      component: WorkersPage
    },
    {
      path: '/LandingPage/WhatsYourSpec',
      name: 'WhatsYourSpec',
      component: WhatsYourSpec
    },
    {
      path: '/NeedWorkers',
      name: 'NeedWorkers',
      component: NeedWorkers
    },
    {
      path: '/Profiles/SpecialistProfiles',
      name: 'SpecialistProfiles',
      component: SpecialistProfiles
    }
  ]
})

// route guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser
    if (user) {
      // user signed in, proceed to router
      next()
    } else {
      // no user signed in redirect to login
      next({name: 'Login'})
    }
  } else {
    next()
  }
});

export default router;
