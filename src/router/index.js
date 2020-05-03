import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index.vue";
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
import Events from "@/components/FooterLinks/Events";
import Guidlines from "@/components/FooterLinks/Guidlines";
import JoinTheTeam from "@/components/FooterLinks/JoinTheTeam";
import Press from "@/components/FooterLinks/Press";
import Resources from "@/components/FooterLinks/Resources";
import Safety from "@/components/FooterLinks/Safety";
import SuperStars from "@/components/FooterLinks/SuperStars";
import MyInfo from "@/components/Profiles/Dashboard/MyInfo";
import PaymentInfo from "@/components/Profiles/Dashboard/PaymentInfo";
import DashBoard from "@/components/Profiles/Dashboard/DashBoard";
import Specialties from "@/components/Specialties";
import SpecialistProfiles from "@/components/Profiles/SpecialistProfiles";
import GeneralForum from "@/components/Forum/GeneralForum";


// import CreateWorkerPort from "@/components/Profiles/CreateWorkerPort";




import firebase from "firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
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
      path: "/Login",
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
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
            next("/Login");
        } else {
            next();
        }
    }
    },
    {
      path: "/Profiles/WorkerDashBoard",
      name: "WorkerDashBoard",
      component: WorkerDashBoard,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
            next("/Login");
        } else {
            next();
        }
    }
    },
    {
      path: "/Profiles/EmployerDashBoard",
      name: "EmployerDashBoard",
      component: EmployerDashBoard,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
            next("/Login");
        } else {
            next();
        }
    }
    },
    {
      path: "/WorkersPage",
      name: "WorkersPage",
      component: WorkersPage
    },
    // {
    //   path: "/Profiles/CreateWorkerPort",
    //   name: "CreateWorkerPort",
    //   component: CreateWorkerPort
    // },
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
    path: "/Profiles/Dashboard/DashBoard",
      name: "DashBoard",
      component: DashBoard,
  },
    {
      path: "/Profiles/Dashboard/MyInfo",
      name: "MyInfo",
      component: MyInfo,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
            next("/Login");
        } else {
            next();
        }
    }
    },
   
    {
      path: "/Profiles/Dashboard/PaymentInfo",
      name: "PaymentInfo",
      component: PaymentInfo,
      beforeEnter: (to, from, next) => {
        if (!firebase.auth().currentUser) {
            next("/Login");
        } else {
            next();
        }
    }
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


export default router;
