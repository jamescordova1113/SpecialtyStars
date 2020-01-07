<template>
  <v-container class="loginCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Specialty Stars: Login</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form @submit.prevent="login" class="card-panel">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="10" md="6">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail:"
                required
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="password"
                label="Password:"
                required
              ></v-text-field>
              <p class="red-text text-center" v-if="feedback">{{ feedback }}</p>
              <br />
              <div>
              <a> Forgot your password? </a>
              </div>
              <br />
              <v-card-actions class="text-center">
                <!-- <div class="flex-grow-1"></div> -->
                <v-btn type="submit" color="orange" dark tile null="true">
                  Log Me In!
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
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
            // Check to see if email has been verified
            if(!cred.user.emailVerified) {
              this.feedback ='Email Not Verified' 
              return;
            }
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
                        this.$router.push({ name: "SpecialistProfile" });
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
.loginTitle {
  margin-top: 0px;
}
</style>