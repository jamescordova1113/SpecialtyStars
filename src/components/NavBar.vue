<template>
  <nav>
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
              class="mr-3"
              :src="require('../assets/sslogo.png')"
              height="75"
            />
          </router-link>
          <v-spacer class="d-none d-lg-block"></v-spacer>
          <v-label class="mr-4 d-none d-lg-block">
            Welcome, {{ this.user.alias }}
          </v-label>
          <v-spacer></v-spacer>
          <v-col cols="3">
            <router-link to="/WorkersPage">
              <v-btn color="white" @click="setCookie('worker')">
                <span class="text-center">Need Work</span>
              </v-btn>
            </router-link>
            <router-link to="/NeedWorkers">
              <v-btn color="white" @click="setCookie('employer')">
                <span class="text-center">Need Worker</span>
              </v-btn>
            </router-link>
          </v-col>
          <router-link :to="{ name: 'Login' }">
            <v-btn color="white" v-if="!user.isLoggedIn">{{
              this.loginText
            }}</v-btn>
          </router-link>
          <v-btn v-if="user.isLoggedIn" color="white" @click="logout">{{
            this.logoutText
          }}</v-btn>
          <router-link to="/Signup">
            <v-btn color="white">
              <span class="text-center">Sign Up</span>
            </v-btn>
          </router-link>
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
        <v-subheader inset v-if="user.isLoggedIn">Client Area</v-subheader>
        <div v-if="user.isLoggedIn">
          <v-list-item
            v-for="link in memberLinks"
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
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home-outline", text: "Home", route: "/" },
        {
          icon: "mdi-account-badge-outline",
          text: "Find a Worker",
          route: "/Profiles"
        },
        { icon: "mdi-pencil-plus-outline", text: "Signup", route: "/Signup" },
        {
          icon: "mdi-login-variant",
          text: "Login",
          route: "/login"
        },
        { icon: "mdi-contact-mail-outline", text: "Contact", route: "/contact" }
      ],
      memberLinks: [
        {
          icon: "mdi-home-import-outline",
          text: "Projects",
          route: "/Projects"
        },
        {
          icon: "mdi-account-circle-outline",
          text: "Profile",
          route: "/Profile"
        },
        {
          icon: "mdi-view-dashboard-outline",
          text: "Portfolio",
          route: "/Portfolio"
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
            isAdmin: false
          });
          this.$router.push({ name: "Login" });
        });
    },
     setCookie(userType) {
      if (userType == 'employer') {
        document.cookie = 'userType=employer; expires=Fri, 31 Dec 9999 23:59:59 GMT"'
      } else {
        document.cookie = 'userType=worker; expires=Fri, 31 Dec 9999 23:59:59 GMT'
      }
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
