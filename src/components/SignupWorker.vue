<template>
  <v-container class="loginCard">
    <v-toolbar
      color="primary lighten-2"
      dark
      justify="center"
      max-width="450px"
      flat
    >
      <v-row justify="space-around">
        <v-toolbar-title><h1>Signup For Worker</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card>
      <v-card-text>
        <v-form @submit="signup" class="card-panel">
          <v-text-field
            type="Email"
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
          <v-text-field
    name="confirmPassword"
    label="Confirm Password"
    id="confirmPassword"
    type="password"
    :rules="[comparePasswords]"
    v-model="passwordConfirm"
    ></v-text-field>
          <v-text-field
            type="alias"
            v-model="alias"
            label="First Name:"
            required
          ></v-text-field>
           <v-select
            v-model="specialty"
            :items="items"
            label="Specialty"
            data-vv-name="items"
            required
          ></v-select>
          <v-select
            v-model="experience"
            :items="experiences"
            label="Experience:"
            data-vv-name="experience"
            required
          ></v-select>
          <v-text-field
            type="number"
            v-model="zip"
            label="Zip Code:"
            required
          ></v-text-field>
          
          

          <p class="red--text text-center" v-if="feedback">{{ feedback }}</p>
          <v-card-actions class="text-center">
            <div class="flex-grow-1"></div>
            <v-btn @click="signup" color="primary lighten-2"> Submit </v-btn>
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
      email: null,
      password: null,
      passwordConfirm: null,
      alias: null,
      feedback: null,
      slug: null,
      isWorker: true,
      isWorkerProfile: false,
      zip: "",
      specialty: "",
      experience: "",
      myCred: null,
      experiences: ["Laborer", "Apprentice", "Journeyman"],
      items: [
        "Agricultural",
        "Air Conditioning",
        "Auto Paint & Body",
        "Auto Mechanics",
        "Auto Detailing",
        "Brick Pavers",
        "Brick & Block Masonry",
        "Carpentry (rough and finish)",
        "Cabinetry",
        "Construction Cleaning",
        "Concrete Cutting and Drilling",
        "Concrete Placing & Finishing",
        "Dishwashing",
        "Demolition",
        "Delivery/Driver",
        "Drywall",
        "Electrical",
        "Flooring",
        "Fence",
        "Fire & Security Alarm",
        "Fire Protection",
        "Glass & Windows",
        "General Construction",
        "Granite & Stone Fabrication",
        "Golf Course and Greens keeper",
        "Handyman",
        "Home Remodeling",
        "Housekeeping/ Maid service",
        "Irrigation/Sprinkler",
        "Insulation",
        "Janitorial",
        "Landscaping",
        "Marine",
        "Mechanical Systems",
        "Moving",
        "Painting",
        "Paving & Roadwork",
        "Pest Control",
        "Plumbing",
        "Pool Service",
        "Pool & Spa installation",
        "Roofing",
        "Stucco & Plastering",
        "Tile & Marble",
        "Tree Work",
        "Warehouse"
      ],
      // isWorker: [{ id: 1, name: "isWorker", checked: true }],
      // isEmployer: [{ id: 2, name: "isEmployer", checked: true }],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },


  methods: {
    signup() {
      if (
        (this.alias && this.email && this.password && this.comparePasswords === true && this.isWorker)
        
      ) {
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
                this.myCred = cred;
                db.collection("users")
                  .doc(cred.user.uid)
                  .set({
                    email: this.email,
                    isWorker: this.isWorker,
                    alias: this.alias,
                    user_id: cred.user.uid,
                    zip: this.zip,
                    specialty: this.specialty,
                    experience: this.experience,
                    isWorkerProfile: this.isWorkerProfile,
                  });
                  db.collection("specialistProfile")
                  .doc(cred.user.uid)
                  .set({
                    email: this.email,
                    isWorker: this.isWorker,
                    alias: this.alias,
                    user_id: cred.user.uid,
                    zip: this.zip,
                    specialty: this.specialty,
                    experience: this.experience,
                    isWorkerProfile: this.isWorkerProfile,

              });
              })
      
              .then(() => {
                this.myCred.user
                  .sendEmailVerification()
                  .then(() => {
                    // Go to login page and set configuration in vuex store
                    this.$store.commit("setConfig", {
                      sendVerify: true,
                      newEmail: this.email,
                      newPassword: this.password
                    });
                    this.$router.push({ name: "Login" });
                  })
                  .catch(err => {
                    this.feedback = err.message;
                  });
              })
              .catch(err => {
                this.feedback = err.message;
              });
          }
        });
      // } 
      // .then (() => {
      //   firebase 
      //   .firestore()
      //   createSpecialistProfile(this.users.user_id)
      // }
        } else {
        this.feedback = "Please enter data in all fields";
      }
    }
  },
  computed: {
  comparePasswords () {
    return this.password === this.passwordConfirm ? true : 'Passwords don\'t match'
  }
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
  }
};
</script>
