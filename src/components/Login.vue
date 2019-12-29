<template>
  <v-container class="my-6">
    <v-row justify="space-around">
      <v-card class="mx-auto">
        <v-card-title
          class="headline amber lighten-3"
          primary-title
        >Specialty Stars Login</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login" class="card-panel">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail:" required></v-text-field>
            <v-text-field type="password" v-model="password" label="Password:" required></v-text-field>
            <p class="red-text text-center" v-if="feedback">{{ feedback }}</p>
            <v-card-actions class="text-center">
              <div class="flex-grow-1"></div>
              <button
                type="submit"
                class="white--text v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light elevation-13 v-size--default green--text text--accent-4"
                null="true"
              >
                <span class="v-btn__content">
                  <span>Log Me In!</span>
                </span>
              </button>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            // find the user record and then update geocoords
            db.collection("users")
              .where("user_id", "==", cred.user.uid)
              .get()
              .then(snapshot => {
                snapshot.forEach(doc => {
                  db.collection("users")
                    .doc(doc.id)
                    .get()
                    .then(doc => {
                      if (doc.exists) {
                        // Go to home page and set credentials in vuex store
                        this.$store.commit("setCredentials", {
                          alias: doc.data().alias,
                          isLoggedIn: true,
                          isAdmin: doc.data().isAdmin
                        });
                        this.$router.push({name: 'Timeline'});
                      }
                    });
                });
              });
          })
          .catch(err => {
            this.feedback = err.message;
          });
        // this.feedback = null;
      } else {
        this.feedback = "Please enter data in all fields";
      }
    }
  }
};
</script>

<style>
.login {
  max-width: 400px;
  margin-top: 60px;
}
.login h2 {
  font-size: 2.4em;
}
.login .field {
  margin-bottom: 16px;
}
</style>