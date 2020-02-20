<template>
  <v-container class="editProfileCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Profile Page: Worker</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form
          ref="form"
          @click="
            update(
              alias,
              specialty,
              phone,
              email,
              experience,
              minperhour,
              preferredContact,
              canContact,
              city,
              zip
            )
          "
          v-model="valid"
          lazy-validation
        >
          <v-text-field
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
          ></v-text-field>
          <v-select
            v-model="experience"
            :items="experiences"
            label="Experience:"
            data-vv-name="experience"
            required
          ></v-select>
          <v-text-field
            type="number"
            v-model="minperhour"
            label="Minimum Dollars Per Hour:"
            required
          ></v-text-field>
          <v-select
            v-model="preferredContact"
            :items="contact"
            label="Preferred Method of Contact"
            data-vv-name="contact"
            required
          ></v-select>
          <v-select
            v-model="canContact"
            :items="contacts"
            label="Can Contact Me"
            data-vv-name="contacts"
            required
          ></v-select>
          <v-text-field
            v-model="city"
            label="City:"
            required
          ></v-text-field>
          <v-text-field
            type="number"
            v-model="zip"
            label="Zip Code:"
            required
          ></v-text-field>

          <v-flex class="xs12 sm6 mb-2">
            
           <div >
      <p>Upload a profile picture:</p>
      <input type="file" @change="previewImage" accept="image/*" >
    </div>
          </v-flex>
          
          <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
    </div>
    <div v-if="imageData!=null">
        <img class="preview" :src="picture">
        <br>
      <v-btn @click="onUpload">Upload Image</v-btn>
    </div>
          <v-flex class="xs12 sm6 mt-5 offset-sm1">
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="update"
              
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
      phone: "",
      minperhour: "",
      email: "",
      preferredContact: "",
      canContact: "",
      location: "",
      city: "",
      zip: "",
      valid: false,
      name: null,
      specialty: null,
      users: {
        name: null,
        phone: "",
        minperhour: "",
        email: "",
        preferredContact: "",
        canContact: "",
        location: "",
        city: "",
        zip: "",
        specialty: null,
        image: null,
        experience: null
      },
      alias: null,
      imageUrl: null,
      image: null,
      imageHeight: 0,
      experience: null,
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
      picture: null,
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
      Profile: db.collection("specialistProfile").orderBy("createdAt")
    };
  },
  methods: {
    update() {
      db.collection("specialistProfile")
        .add({
          alias: this.alias,
          city: this.city,
          phone: this.phone,
          email: this.email,
          minperhour: this.minperhour,
          specialty: this.specialty,
          experience: this.experience,
          zip: this.zip,
          preferredContact: this.preferredContact,
          canContact: this.canContact,
          image: this.image,
          picture: this.picture
        })
    },
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload(){
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        });
      }
      );
    }

  },
      // const ext = filename.slice(filename.lastIndexOf("."));
      // console.log('files', files[0]);
      // upload the file to firebase storage
    
  
  // beforeCreate() {
  //   db.collection("specialistProfile")
  //   .get()
  //   .then(snapshot => {
  //       snapshot.forEach(doc => {
  //         let pro = doc.data();
  //         pro.id = doc.id;
  //         this.pros.push(pro);
  //       });
  // });
  // },
  created() {
    // console.log(firebase.auth().currentUser.uid)
    let ref = db
      .collection("users")
      .where("user_id", "==", firebase.auth().currentUser.uid);

    console.log("got Here");
    ref.get().then(snapshot => {
      snapshot.forEach(doc => {
        // console.log('got a doc')
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