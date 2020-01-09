<template>
  <v-container class="loginCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Signup Free: Worker</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form class="card-panel" v-model="valid">
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
          <v-text-field v-model="phone" label="Phone#:" required></v-text-field>
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
            v-model="alias"
            label="Username:"
            required
          ></v-text-field>
          <v-container fluid>
            Who can contact me:
            <v-checkbox
              v-model="checkbox1"
              :label="`Homeowners: ${checkbox1.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox2"
              :label="`Contractors: ${checkbox2.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox3"
              :label="`Employers: ${checkbox3.toString()}`"
            ></v-checkbox>
          </v-container>
          <v-container fluid>
            How to contact me:
            <v-checkbox
              v-model="checkbox4"
              :label="`Message: ${checkbox4.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox5"
              :label="`Text: ${checkbox5.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox6"
              :label="`Phone Call: ${checkbox6.toString()}`"
            ></v-checkbox>
            <v-checkbox
              v-model="checkbox7"
              :label="`Email: ${checkbox7.toString()}`"
            ></v-checkbox>
          </v-container>
          <p class="red--text text-center" v-if="feedback">{{ feedback }}</p>
          <v-btn @click="signup" color="orange" dark tile :disabled="!valid">
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
      checkbox1: true,
      checkbox2: false,
      checkbox3: false,
      checkbox4: true,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false,
      phone: null,
      fullName: null,
      select: null,
      email: null,
      password: null,
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
                    this.$router.push({ name: "Login"});
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
