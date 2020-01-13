<template>
  <v-container class="editProfileCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Profile Page: Worker</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="specialistProfile.name"
            label="First Name:"
            required
          ></v-text-field>
          <v-select
            v-model="specialistProfile.specialty"
            :items="items"
            label="Specialty"
            data-vv-name="select"
            required
          ></v-select>
          <v-text-field 
          type="phone"
          v-model="specialistProfile.phone" 
          label="Phone#:" 
          required
          ></v-text-field>
          <v-text-field
            v-model="specialistProfile.email"
            :rules="emailRules"
            label="E-mail:"
          ></v-text-field>
          <v-text-field
            v-model="specialistProfile.yrsexperience"
            label="Years of experience:"
            required
          ></v-text-field>
          <v-text-field
            v-model="specialistProfile.minperhour"
            label="Minimum Dollars Per Hour:"
            required
          ></v-text-field>
           <v-select
            v-model="specialistProfile.perferredContact"
            :items="contactTypes"
            label="Perferred Method of Contact"
            data-vv-name="perferredContact"
            required
          ></v-select>
          <v-select
            v-model="specialistProfile.canContact"
            :items="contacts"
            label="Can Contact Me"
            data-vv-name="canContact"
            required
          ></v-select>
          <v-text-field
            v-model="specialistProfile.City"
            label="City:"
            required
          ></v-text-field>
          <v-text-field
            v-model="specialistProfile.zip"
            label="Zip Code:"
            required
          ></v-text-field>
           <v-text-field
            v-model="specialistProfile.image"
            label="Profile Picture:"
            required
          ></v-text-field>
            <v-flex class="xs12 sm6 mb-2">
              <v-btn class="primary" raised @click="onPickFile">Change Image</v-btn>
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
              <v-btn :disabled="!valid" color="success" class="mr-4" @click="update">Update</v-btn>
              <router-link :to="{ name : 'Index'}">
                <v-btn color="error" class="mr-4">Cancel</v-btn>
              </router-link>
            </v-flex>
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
import firebase from "firebase";
export default {
  name: "CreateWorkerProfile",
  data() {
    return {
      valid: false,
      name: null,
      specialty: null,
      specialistProfile: {name: null},
      filename: null,
      event: {title : null},
      feedback: null,
      imageUrl: null,
      image: null,
      imageHeight: 0,
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
      contactTypes: [
        "Message",
        "Email",
        "Phone Call",
        "Text"
      ],
      contacts: [
        "Homeowners",
        "Employers"
      ],
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
      ]
    };
  },
  methods: {
    signup() {
      // need code here
    },
    update() {
      //save specialistProfile to firestore
      db.collection("specialistProfile")
        .doc(this.specialistProfile.id)
        .update({
        name: this.specialistProfile.name,
        city: this.specialistProfile.city,
        phone: this.specialistProfile.phone,
        email: this.specialistProfile.email,
        minperhour: this.specialistProfile.minperhour,
        specialty: this.specialistProfile.specialty,
        yrsexperience: this.specialistProfile.yrsexperience,
        zip: this.specialistProfile.zip,
        perferredContact: this.specialistProfile.perferredContact,
        canContact: this.specialistProfile.canContact,
        portPic1: this.specialistProfile.portPic1,
        portPic2: this.specialistProfile.portPic2,
        portPic3: this.specialistProfile.portPic3,
        portPic4: this.specialistProfile.portPic4,
        portPic5: this.specialistProfile.portPic5
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
          db.collection("specialistProfile").doc(this.specialistProfile.id)
          .update({
            image: URL
          })
        })
        .then(() => {
          this.$router.push({ name: "Index" });
        });
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
    // console.log(firebase.auth().currentUser.uid)
    let ref = db
      .collection("specilistProfile")
      .where(
        'userID',
        "==",
        'ZEbwfj8hU2h8smWVzEecLynB3X73'
        // firebase.auth().currentUser.uid
      );
    console.log('got Here')
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log('got a doc')
        this.specialistProfile = doc.data();
        this.specialistProfile.id = doc.id;
      });
    });
  }
};
</script>
