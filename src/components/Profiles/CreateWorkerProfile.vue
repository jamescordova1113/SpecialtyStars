<template>
  <v-container class="editProfileCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Profile Page: Worker</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form ref="form" lazy-validation v-model="valid">
          <!-- @click="
            update(
              createdAt,
              alias,
              specialty,
              phone,
              email,
              experience,
              minperhour,
              preferredContact,
              canContact,
              city,
              zip,
              tools,
              transportation
            )
          " -->
          <v-text-field
            v-model="users.alias"
            label="First Name:"
            required
          ></v-text-field>
          <v-select
            v-model="users.specialty"
            :items="items"
            label="Specialty"
            data-vv-name="items"
            required
          ></v-select>
          <v-text-field
            type="phone"
            v-model="users.phone"
            label="Phone#:"
            required
          ></v-text-field>
          <v-text-field
            v-model="users.email"
            :rules="emailRules"
            label="E-mail:"
          ></v-text-field>
          <v-select
            v-model="users.experience"
            :items="experiences"
            label="Experience:"
            data-vv-name="experience"
            required
          ></v-select>
          <v-text-field
            type="number"
            v-model="users.minperhour"
            label="Minimum Dollars Per Hour:"
            required
          ></v-text-field>
          <v-select
            v-model="users.preferredContact"
            :items="contact"
            label="Preferred Method of Contact"
            data-vv-name="contact"
            required
          ></v-select>
          <v-select
            v-model="users.canContact"
            :items="contacts"
            label="Can Contact Me"
            data-vv-name="contacts"
            required
          ></v-select>
          <v-text-field
            v-model="users.location"
            label="City:"
            required
          ></v-text-field>
          <v-text-field
            type="number"
            v-model="users.zip"
            label="Zip Code:"
            required
          ></v-text-field>
          <v-text-field
            v-model="users.tools"
            label="Do you have your own tools?:"
          ></v-text-field>
          <v-text-field
            v-model="users.transportation"
            label="Do you have dependable transportation?:"
          ></v-text-field>

          <v-flex class="xs12 sm6 mb-2">
            <v-btn class="primary" raised @click="onPickFile"
              >Add Profile Picture</v-btn
            >
            <input
              type="file"
              style="display: none"
              ref="fileInput"
              accept="image/*"
              @change="onFilePicked"
            />
          </v-flex>
          <img :src="imageUrl" :height="imageHeight" />
          <v-flex class="xs12 sm6 mt-5 offset-sm1">
            <v-btn color="success" class="mr-4" @click="update"
              >Post Profile</v-btn
            >

            <router-link :to="{ name: 'Index' }">
              <v-btn color="error" class="mr-4">Cancel</v-btn>
            </router-link>
          </v-flex>
          <!-- <p class="red--text text-center" v-if="feedback">{{ feedback }}</p> -->
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "CreateWorkerProfile",
  data() {
    return {
      valid: false,
        phone: "",
        minperhour: "",
        email: "",
        preferredContact: "",
        canContact: "",
        location: "",
        city: "",
        zip: "",
        specialty: null,
        tools: null,
        imageUrl: null,
        experience: null,
        transportation: null,
      users: {
        alias: null,
        user_id: null,
        email: null
        },
      image: null,
      imageHeight: 0,
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
      imageData: null,
      uploadValue: 0,
      date: new Date().toISOString().substr(0, 10),
      contact: ["Message", "Email", "Phone Call", "Text"],
      contacts: ["Homeowners", "Employers"],
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length <= 10) || "Title must be less than 50 characters"
      ],
      descRules: [
        v => !!v || "Description is required",
        v =>
          (v && v.length <= 150) ||
          "Description must be less than 150 characters"
      ],
      dateRules: [
        v => !!v || "Event Date is required",
        v =>
          (v && v.length <= 50) || "Event Date must be less than 50 characters"
      ],
      locationRules: [
        v => !!v || "Location is required",
        v => (v && v.length <= 50) || "Location must be less than 50 characters"
      ],
      buttonRules: [
        v => !!v || "Button Text is required",
        v =>
          (v && v.length <= 15) || "Button Text must be less than 15 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      specialistProfile: null
    };
  },

  firestore() {
    return {
      Profile: db.collection("users").orderBy("createdAt")
    };
  },
  methods: {
    update() {
      
      db.collection("users")
      .doc(this.users.id)
        .set({
          createdAt: new Date(),
          alias: this.users.alias,
          phone: this.users.phone,
          email: this.users.email,
          minperhour: this.users.minperhour,
          specialty: this.users.specialty,
          experience: this.users.experience,
          zip: this.users.zip,
          preferredContact: this.users.preferredContact,
          canContact: this.users.canContact,
          imageUrl: this.imageUrl,
          tools: this.users.tools,
          transportation: this.users.transportation,
          location: this.users.location,
          user_id: this.users.user_id
        })
        .then( () => {
          if (this.image)
          return firebase.storage().ref('Images/' + this.filename).put(this.image)
        })
        .then( () => {
          if (this.image)
          return firebase.storage().ref('Images/' + this.filename).getDownloadURL()
        })
        .then(URL => {
          if (URL)
          db.collection("users").doc(firebase.auth().currentUser.uid)
          .update({
            image: URL
          })
        })
        .then(() => {
          this.$router.push({ name: "SpecialistProfiles" });
        })
      // .catch(err => {});
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      this.filename = files[0].name;
      if (this.filename.lastIndexOf(".") <= 0) {
        return alert("Please Select a valid Image File");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
      this.imageHeight = 150;
      // const ext = filename.slice(filename.lastIndexOf("."));
      // console.log('files', files[0]);
      // upload the file to firebase storage
    }
  },

  created() {
    console.log(firebase.auth().currentUser.uid);
    let ref = db
      .collection("users")
      .where("user_id", "==", firebase.auth().currentUser.uid);
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        this.users = doc.data();
        this.users.id = doc.id;
      });
    });
  }
};
</script>

<style scoped>
img.preview {
  width: 150px;
}
</style>
