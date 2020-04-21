<template>
  <v-container class="loginCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Specialty Stars:Login</h1></v-toolbar-title>
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
              <br />
              <div class="buttons text-center">
                <v-btn @click="login" color="orange" dark tile null="true">
                  Log Me In!
                </v-btn>
                <!-- <v-btn
                    @click="loginWithGoogle"
                    color="primary lighten-3"
                    dark
                    tile
                    null="true"
                  >
                    Login with Google
                  </v-btn> -->
              </div>

              <div class="forgotPass text-center">
                <v-btn text color="primary" @click="resetPassword">
                  Forgot your password?
                </v-btn>
                <p>
                  Enter your email and a password reset will be sent to your
                  email.
                </p>
              </div>
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
  metaInfo: {
    title: 'Specialty Stairs Log in for employers and workers. Find Work or find a worker today.',
    titleTemplate: 'Specialty Stars',
     htmlAttrs: {
        lang: 'en',
        amp: true
      }
  },
  name: "Login",
  data() {
    return {
      isWorker: false,
      isEmployer: false,
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
    // loginWithGoogle() {
    //   firebase
    //     .auth()
    //     .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    //     .then(function(response) {
    //       console.log(response);
    //     });
    // },
    resetPassword() {
      const auth = firebase.auth();
      auth.sendPasswordResetEmail(this.email).then(() => {
        // Email sent.
        alert("Email Sent");
      });
      // .catch((err) => {
      //    console.log(err)

      // });
    },
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
                          isWorker: doc.data().isWorker,
                          isEmployer: doc.data().isEmployer
                        });
                          this.$router.push({ name: "DashBoard" });
                       
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
.buttons {
  padding: 10px;
}
.forgotPass {
  margin-top: 10px;
}
.login {
  max-width: 400px;
  margin-top: 60px;
}
.login h2 {
  font-size: 2.4em;
}
.login .field {
  margin-bottom: 10px;
}
.loginTitle {
  margin-top: 0px;
}
</style>
