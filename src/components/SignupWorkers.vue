<template>
  <v-container class="loginCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Signup Free: Worker</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form @sumbmit.prevent="signup" class="card-panel" v-model="valid">
          <v-text-field
            v-model="fullName"
            label="Full Name:"
            required
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            label="Specialty"
            data-vv-name="select"
            required
          ></v-select>
          <v-text-field 
          type="phone"
          v-model="phone" 
          label="Phone#:" 
          required
          ></v-text-field>
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
          <v-text-field
            type="password"
            v-model="confirmPassword"
            label="Confirm Password:"
            id="confirmPassword"
            name="confirmPassword"
            :rules="[comparePasswords]"
            required
          ></v-text-field>
          <v-text-field
            v-model="alias"
            label="Username:"
            required
          ></v-text-field>
          <p class="red--text text-center" v-if="feedback">{{ feedback }}</p>
          <v-btn @click="signup" color="orange" dark tile >
            Sign Me Up!
          </v-btn>
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
      Homeowners: true,
      Contractors: false,
      Employers: false,
      Message: true,
      Text: false,
      Phonecall: false,
      Email: false,
      phone: "",
      fullName: "",
      select: "",
      email: "",
      password: "",
      confirmPassword: "",
      alias: null,
      feedback: "",
      slug: null,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
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
      dialog: false,
      valid: true,
      myCred: null
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Password does not match"
        : "";
    }
  },

  methods: {
    signup() {
      if (
        this.alias &&
        this.email &&
        this.password )
         {
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
                ref.set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: cred.user.uid
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
      } else {
        this.feedback = "Please enter data in all fields";
      }
    }
  }
};
</script>
