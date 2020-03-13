<template v-slot:activator="{ on }">
  <div>
    <v-toolbar elevation="2">
      <div class="myNav">
        <v-app-bar app absolute flat width="100%" permanent>
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
            ></v-img>
          </template>
          <v-app-bar-nav-icon
            class="darkgrey--text"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <router-link
            to="/"
            tag="span"
            style="cursor: pointer"
            class="myAnchor"
          >
            <img
              class="mr-3 d-none d-lg-block hidden-lg-and-down"
              :src="require('../assets/sslogov2.png')"
              height="65"
            />
            <img
              class="mr-3 hidden-lg-and-up"
              :src="require('../assets/sslogov2.png')"
              height="35"
            />
          </router-link>
          <v-spacer class="d-none d-lg-block "></v-spacer>
          <div class="mr-4 d-none d-lg-block hidden-lg-and-down">
            <v-label> Welcome, {{ this.user.alias }} </v-label>
          </div>
          <v-spacer></v-spacer>

          <!-- <router-link to="/WorkersPage">
              <v-btn color="white" @click="setCookie('worker')">
                <span class="text-center">Need Work</span>
              </v-btn>
            </router-link>
            <router-link to="/NeedWorkers">
              <v-btn color="white" @click="setCookie('employer')">
                <span class="text-center">Need Worker</span>
              </v-btn>
            </router-link> -->

          <router-link :to="{ name: 'Login' }">
            <v-btn text v-if="!user.isWorker || !user.isEmployer">{{
              this.loginText
            }}</v-btn>
          </router-link>
          <v-btn
            v-if="user.isWorker || user.isEmployer"
            
            text
            @click="logout"
            >{{ this.logoutText }}</v-btn
          >
          <div class="text-center">
            <v-menu transition="slide-x-transition" bottom right>
              <template v-slot:activator="{ on }">
                <v-btn color="orange" text v-on="on">
                  Signup
                </v-btn>
              </template>

              <v-list>
                <v-list-item
                  v-for="item in items"
                  :key="item.text"
                  router
                  :to="item.route"
                >
                  <v-list-item-title class="orange--text">{{
                    item.title
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-app-bar>
      </div>
    </v-toolbar>
    <v-navigation-drawer
      app
      v-model="drawer"
      @click="drawer = !drawer"
      temporary
    >
      <v-list dense nav>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <router-link to="/" tag="span" style="cursor: pointer">
              <v-icon class="darkgrey--text">{{ link.icon }}</v-icon>
            </router-link>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="darkgrey--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>
        <v-subheader inset v-if="!user.isLoggedIn"
          >Login For More Options</v-subheader
        >
        <v-subheader inset v-if="user.isLoggedIn"
          >Client Area</v-subheader
        >
        <div v-if="user.isEmployer">
          <v-list-item
            v-for="link in employerLinks"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <router-link to="/" tag="span" style="cursor: pointer">
                <v-icon class="primary--text">{{ link.icon }}</v-icon>
              </router-link>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="primary--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
         <div v-if="user.isWorker">
          <v-list-item
            v-for="link in workerLinks"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <router-link to="/" tag="span" style="cursor: pointer">
                <v-icon class="primary--text">{{ link.icon }}</v-icon>
              </router-link>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="primary--text">{{
                link.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "As a Worker", route: "/SignupWorker" },
        { title: "As a Employer", route: "/SignupEmployer" }
      ],
      links: [
        { text: "Home", route: "/" },
        { text: "Specialties", route: "/Specialties" },
        { text: "Employer", route: "/NeedWorkers" },
        { text: "Worker", route: "/WorkersPage" },
        { text: "Forum", route: "/Forum/GeneralForum"},
        {
          text: "Find a Worker",
          route: "/Profiles/SpecialistProfiles"
        },
        {
          text: "Login",
          route: "/login"
        },
        { text: "Help", route: "/Contact" }
      ],
      workerLinks: [
        {
          text: "Worker Dashboard",
          route: "/Profiles/WorkerDashBoard"
        },

        {
          text: "Message Board",
          route: "/MessageBoard"
        }
      ],
      employerLinks: [
        {
          text: "Employer Dashboard",
          route: "/Profiles/EmployerDashBoard"
        },

        {
          text: "Message Board",
          route: "/MessageBoard"
        }
      ],

      loginText: "Login",
      logoutText: "Logout",
      signupText: "Signup"
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit("setCredentials", {
            alias: "guest",
            isLoggedIn: false,
            isWorker: false,
            isEmployer: false
          });
          this.$router.push({ name: "Login" });
        });
    }
    
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato);

.shimmer {
  display: inline-block;
  color: white;
  background: #585858 -webkit-gradient(linear, 100% 0, 0 0, from(#aaa9a9), color-stop(0.5, #aaaaaa), to(#6b6b6b));
  background-position: -4rem top; /*50px*/
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation-name: shimmer;
  -webkit-animation-duration: 2.2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-background-size: 4rem 100%; /*50px*/
}

@-webkit-keyframes shimmer {
  0% {
    background-position: -4rem top; /*50px*/
  }

  70% {
    background-position: 12.5rem top; /*200px*/
  }

  100% {
    background-position: 12.5rem top; /*200px*/
  }
}
.titleSpan {
  color: darkslategrey;
  margin-right: 10px;
}
a {
  text-decoration: none;
  margin: 15px 15px;
  color: white;
}
.myNav {
  vertical-align: middle;
}
</style>
