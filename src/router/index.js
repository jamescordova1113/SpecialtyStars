import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import SignupWorker from "@/components/SignupWorker";
import SignupEmployer from "@/components/SignupEmployer";
import Login from "@/components/Login";
import Contact from "@/components/Contact";
import CreateWorkerProfile from "@/components/Profiles/CreateWorkerProfile";
import WorkerDashBoard from "@/components/Profiles/WorkerDashBoard";
import EmployerDashBoard from "@/components/Profiles/EmployerDashBoard";
import WorkersPage from "@/components/WorkersPage";
import NeedWorkers from "@/components/NeedWorkers";
import Help from "@/components/Help";
import Advertising from "@/components/FooterLinks/Advertising";
import CookiePolicy from "@/components/FooterLinks/CookiePolicy";
import Events from "@/components/FooterLinks/Events";
import Guidlines from "@/components/FooterLinks/Guidlines";
import JoinTheTeam from "@/components/FooterLinks/JoinTheTeam";
import Press from "@/components/FooterLinks/Press";
import PrivacyPolicy from "@/components/FooterLinks/PrivacyPolicy";
import Resources from "@/components/FooterLinks/Resources";
import Safety from "@/components/FooterLinks/Safety";
import SuperStars from "@/components/FooterLinks/SuperStars";
import TermsOfUse from "@/components/FooterLinks/TermsOfUse";
import History from "@/components/Profiles/Dashboard/History";
import MyInfo from "@/components/Profiles/Dashboard/MyInfo";
import Notifications from "@/components/Profiles/Dashboard/Notifications";
import PaymentInfo from "@/components/Profiles/Dashboard/PaymentInfo";
import Preferences from "@/components/Profiles/Dashboard/Preferences";
import SavedMessages from "@/components/Profiles/Dashboard/SavedMessages";
import SentMessages from "@/components/Profiles/Dashboard/SentMessages";
import Specialties from "@/components/Specialties";
import SpecialistProfiles from "@/components/Profiles/SpecialistProfiles";
import GeneralForum from "@/components/Forum/GeneralForum";


import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
      // Add this to do route guard
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: "/signupWorker",
      name: "SignupWorker",
      component: SignupWorker
    },
    {
      path: "/signupEmployer",
      name: "SignupEmployer",
      component: SignupEmployer
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/Profiles/CreateWorkerProfile",
      name: "CreateWorkerProfile",
      component: CreateWorkerProfile,
    },
    {
      path: "/Profiles/WorkerDashBoard",
      name: "WorkerDashBoard",
      component: WorkerDashBoard
    },
    {
      path: "/Profiles/EmployerDashBoard",
      name: "EmployerDashBoard",
      component: EmployerDashBoard
    },
    {
      path: "/WorkersPage",
      name: "WorkersPage",
      component: WorkersPage
    },
    {
      path: "/NeedWorkers",
      name: "NeedWorkers",
      component: NeedWorkers
    },
    {
      path: "/Help",
      name: "Help",
      component: Help
    },
    {
      path: "/FooterLinks/Advertising",
      name: "Advertising",
      component: Advertising
    },
    {
      path: "/FooterLinks/CookiePolicy",
      name: "CookiePolicy",
      component: CookiePolicy
    },
    {
      path: "/FooterLinks/Events",
      name: "Events",
      component: Events
    },
    {
      path: "/FooterLinks/Guidlines",
      name: "Guidlines",
      component: Guidlines
    },
    {
      path: "/FooterLinks/JoinTheTeam",
      name: "JoinTheTeam",
      component: JoinTheTeam
    },
    {
      path: "/FooterLinks/Press",
      name: "Press",
      component: Press
    },
    {
      path: "/FooterLinks/PrivacyPolicy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy
    },
    {
      path: "/FooterLinks/Resources",
      name: "Resources",
      component: Resources
    },
    {
      path: "/FooterLinks/Safety",
      name: "Safety",
      component: Safety
    },
    {
      path: "/FooterLinks/SuperStars",
      name: "SuperStars",
      component: SuperStars
    },
    {
      path: "/FooterLinks/TermsOfUse",
      name: "TermsOfUse",
      component: TermsOfUse
    },
    {
      path: "/Profiles/Dashboard/History",
      name: "History",
      component: History
    },
    {
      path: "/Profiles/Dashboard/MyInfo",
      name: "MyInfo",
      component: MyInfo
    },
    {
      path: "/Profiles/Dashboard/Notifications",
      name: "Notifications",
      component: Notifications
    },
    {
      path: "/Profiles/Dashboard/PaymentInfo",
      name: "PaymentInfo",
      component: PaymentInfo
    },
    {
      path: "/Profiles/Dashboard/Preferences",
      name: "Preferences",
      component: Preferences
    },
    {
      path: "/Profiles/Dashboard/SavedMessages",
      name: "SavedMessages",
      component: SavedMessages
    },
    {
      path: "/Profiles/Dashboard/SentMessages",
      name: "SentMessages",
      component: SentMessages
    },
    {
      path: "/Specialties",
      name: "Specialties",
      component: Specialties
    },
    {
      path: "/Profiles/SpecialistProfiles",
      name: "SpecialistProfiles",
      component: SpecialistProfiles
    },
    
    {
      path: "/Forum/GeneralForum",
      name: "GeneralForum",
      component: GeneralForum
    }
   
  ]
});

// route guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    let user = firebase.auth().currentUser;
    if (user) {
      // user signed in, proceed to router
      next();
    } else {
      // no user signed in redirect to login
      next('/Login');
    }
  } else {
    next();
  }
});

export default router;
