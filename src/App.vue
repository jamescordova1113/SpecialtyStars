<template>
  <v-app>
    <NavBar />
    <v-content class="ma-0 pa-0">
      <router-view >
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
import db from "@/./firebase/init";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {};
  },
  beforeCreate() {
    // fetch data from firestore
    db.collection("Configuration")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let config = doc.data();
          this.$store.commit("setConfig", {
            contactEmail: config.contactEmail,
            eventEmail: config.eventEmail
          });
        });
      });
  }
};
</script>
