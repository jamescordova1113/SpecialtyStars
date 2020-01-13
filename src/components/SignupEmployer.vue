<template>
  <v-container class="loginCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Signup Free: Employer</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form @submit.prevent="signup" class="card-panel">
          <v-text-field
            v-model="fullName"
            label="Full Name:"
            required
          ></v-text-field>
          <v-text-field
            v-model="business"
            label="Legal Name of your Business:"
            required
          ></v-text-field>
          <v-text-field
            v-model="businessType"
            label="Type of Business:"
            required
          ></v-text-field>
          <v-text-field v-model="license" label="License #:"></v-text-field>
          <v-text-field
            v-model="businessPhone"
            label="Business Phone #:"
            required
          ></v-text-field>
          <v-text-field
            v-model="businessAddress"
            label="Business Street Address:"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail:"
            required
          ></v-text-field>
          <v-text-field
            v-model="alias"
            label="User Name:"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="password"
            label="Password:"
            required
          ></v-text-field>
          <v-text-field
            type="password"
            v-model="confirmPassword"
            label="Confirm Password:"
            id="confirmPassword"
            name="confirmPassword"
            :rules="[comparePasswords]"
            required
          ></v-text-field>
          <p class="red--text text-center" v-if="feedback">{{ feedback }}</p>
          <v-card-actions class="text-center">
            <v-btn type="submit" color="orange" dark tile>
              Sign Me Up!
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import slugify from "slugify";
import firebase from "firebase";
export default {
  name: "Signup",
  data() {
    return {
      businessType: null,
      license: null,
      business: null,
      businessPhone: null,
      businessAddress: null,
      fullName: null,
      email: '',
      password: '',
      confirmPassword: '',
      alias: null,
      feedback: null,
      slug: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  computed: {
comparePasswords () {
  return this.password !== this.confirmPassword ? 'Password does not match' : ''
}
  },
  methods: {
    signup() {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This alias already exists";
          } else {
            // this alias does not yet exists in the db
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: cred.user.uid
                });
              })
              .then(() => {
                this.$router.push({ name: "Login" });
              })
              .catch(err => {
                this.feedback = err.message;
              });
          }
        });
      } else {
        this.feedback = "Please enter data in all fields";
      }
    }
  }
};
</script>
