<template>
  <div class="home">
    <Jumbotron msg="Welcome to Your Vue.js App" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import Jumbotron from "@/components/LandingPage/Jumbotron.vue";

export default {
  metaInfo: {
    title: 'Specialty Stairs Main Page Sign up free and start working tomorrow!',
    titleTemplate: 'Specialty Stars',
     htmlAttrs: {
        lang: 'en',
        amp: true
      }
  },
  name: "home",
  components: {
    Jumbotron
  
  },
  beforeCreate() {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(
          "ErrorCode: " + errorCode + "\n" + "ErrorMessage: " + errorMessage
        );
      });
  },
  created() {
    var userType = this.readCookie("userType");

    if (userType) {
      if (userType == "worker") {
        this.$router.push({ name: "WorkersPage" });
      } else {
        this.$router.push({ name: "NeedWorkers" });
      }
    }
  },
  methods: {
    readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
  }
};
</script>
