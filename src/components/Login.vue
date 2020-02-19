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
                <v-btn @click="login" color="orange" dark tile null="true">
                  Log Me In!
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-layout>
        <v-flex>
          <v-dialog width="500" v-model="config.sendVerify">
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Thank you for Signing Up!
              </v-card-title>

              <v-card-text>
                Check your email address and click the verify link to finish
                creating your login Thank you for your interest in Specialty
                Stars. Have an amazing Day.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="closeDialog">
                  Sounds Good!
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
      </v-layout>
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
  computed: {
    config() {
      return this.$store.state.config;
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        // console.log("trying to log in")
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            // Check to see if email has been verified
            if (!cred.user.emailVerified) {
              this.feedback = "Email Not Verified";
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
                          isWorker: true,
                          isEmployer: true
                        });
                        this.$router.push({ name: "SpecialistProfiles" });
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
    },
    closeDialog() {
      this.$store.commit("setConfig", {
        sendVerify: false
      });
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
