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
import Help from '@/components/Help'
import Advertising from '@/components/FooterLinks/Advertising'
import CookiePolicy from '@/components/FooterLinks/CookiePolicy'
import Events from '@/components/FooterLinks/Events'
import Guidlines from '@/components/FooterLinks/Guidlines'
import HelpCenter from '@/components/FooterLinks/HelpCenter'
import JoinTheTeam from '@/components/FooterLinks/JoinTheTeam'
import Press from '@/components/FooterLinks/Press'
import PrivacyPolicy from '@/components/FooterLinks/PrivacyPolicy'
import Resources from '@/components/FooterLinks/Resources'
import Safety from '@/components/FooterLinks/Safety'
import SuperStars from '@/components/FooterLinks/SuperStars'
import TermsOfUse from '@/components/FooterLinks/TermsOfUse'
import Specialties from '@/components/Specialties'
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
      path: '/Help',
      name: 'Help',
      component: Help
    },
    {
      path: '/FooterLinks/Advertising',
      name: 'Advertising',
      component: Advertising
    },
    {
      path: '/FooterLinks/CookiePolicy',
      name: 'CookiePolicy',
      component: CookiePolicy
    },
    {
      path: '/FooterLinks/Events',
      name: 'Events',
      component: Events
    },
    {
      path: '/FooterLinks/Guidlines',
      name: 'Guidlines',
      component: Guidlines
    },
    {
      path: '/FooterLinks/HelpCenter',
      name: 'HelpCenter',
      component: HelpCenter
    },
    {
      path: '/FooterLinks/JoinTheTeam',
      name: 'JoinTheTeam',
      component: JoinTheTeam
    },
    {
      path: '/FooterLinks/Press',
      name: 'Press',
      component: Press
    },
    {
      path: '/FooterLinks/PrivacyPolicy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/FooterLinks/Resources',
      name: 'Resources',
      component: Resources
    },
    {
      path: '/FooterLinks/Safety',
      name: 'Safety',
      component: Safety
    },
    {
      path: '/FooterLinks/SuperStars',
      name: 'SuperStars',
      component: SuperStars
    },
    {
      path: '/FooterLinks/TermsOfUse',
      name: 'TermsOfUse',
      component: TermsOfUse
    },
    {
      path: '/Specialties',
      name: 'Specialties',
      component: Specialties
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
