import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Signup from '@/components/Signup'
import Login from '@/components/Login'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Profiles from '@/components/Profiles'
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
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/Profiles',
      name: 'Profiles',
      component: Profiles
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
