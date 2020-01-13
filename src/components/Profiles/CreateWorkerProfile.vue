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
            v-model="newSpecialistProfile.name"
            label="First Name:"
            required
          ></v-text-field>
          <v-select
            v-model="newSpecialistProfile.specialty"
            :items="items"
            label="Specialty"
            data-vv-name="select"
            required
          ></v-select>
          <v-text-field 
          type="phone"
          v-model="newSpecialistProfile.phone" 
          label="Phone#:" 
          required
          ></v-text-field>
          <v-text-field
            v-model="newSpecialistProfile.email"
            :rules="emailRules"
            label="E-mail:"
          ></v-text-field>
          <v-text-field
            v-model="newSpecialistProfile.yrsexperience"
            label="Years of experience:"
            required
          ></v-text-field>
          <v-text-field
            v-model="newSpecialistProfile.minperhour"
            label="Minimum Dollars Per Hour:"
            required
          ></v-text-field>
           <v-select
            v-model="newSpecialistProfile.perferredContact"
            :items="contactTypes"
            label="Perferred Method of Contact"
            data-vv-name="perferredContact"
            required
          ></v-select>
          <v-select
            v-model="newSpecialistProfile.canContact"
            :items="contacts"
            label="Can Contact Me"
            data-vv-name="canContact"
            required
          ></v-select>
          <v-text-field
            v-model="newSpecialistProfile.City"
            label="City:"
            required
          ></v-text-field>
          <v-text-field
            v-model="newSpecialistProfile.zip"
            label="Zip Code:"
            required
          ></v-text-field>
           <v-text-field
            v-model="newSpecialistProfile.image"
            label="Profile Picture:"
            required
          ></v-text-field>
           <v-text-field
            v-model="newSpecialistProfile.portPic1"
            label="Portfolio Picture #1:"
          ></v-text-field>
          <v-text-field
            v-model="newSpecialistProfile.portPic2"
            label="Portfolio Picture #2:"
          ></v-text-field>
          <v-text-field
            v-model="newSpecialistProfile.portPic3"
            label="Portfolio Picture #3:"
          ></v-text-field>
          <v-text-field
            v-model="newSpecialistProfile.portPic4"
            label="Portfolio Picture #4:"
          ></v-text-field>
          <v-text-field
            v-model="newSpecialistProfile.portPic5"
            label="Portfolio Picture #5:"
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
import Firebase from 'firebase'
// import firestore from '/firebase/firestore'

// Your web app's Firebase configuration
let config = {
    apiKey: "AIzaSyDqRa3O0YBOiJWIcmdBTyo5qhSYBrxf40E",
    authDomain: "specialtystars.firebaseapp.com",
    databaseURL: "https://specialtystars.firebaseio.com",
    projectId: "specialtystars",
    storageBucket: "specialtystars.appspot.com",
    messagingSenderId: "876655856558",
    appId: "1:876655856558:web:32bcb997948ca0df15563f",
    measurementId: "G-P43CDSNW7Q"
  };
let app = Firebase.initializeApp(config)
let db = app.database()
let SpecialistProfileRef = db.ref('SpecialistProfile')




export default {
  name: "SpecialistProfile",
  firebase: {
    SpecialistProfile: SpecialistProfileRef
  },
  data() {
    return {
       newSpecialtyProfile: {
          name: '',
          city: '',
          phone: '',
          email: '',
          image: '',
          minperhour: '',
          specialty: '',
          yrsexperience: '',
          zip: '',
          perferredContact: '',
          canContact: '',
          portPic1: '',
          portPic2: '',
          portPic3: '',
          portPic4: '',
          portPic5: '',
       },
  
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
      valid: true,
      myCred: null
    };
  },
 

  methods: {
    
     addSpecialistProfile: function () {
        SpecialistProfileRef.push(this.newSpecialistProfile);
        this.newSpecialistProfile.name = '';
        this.newSpecialistProfile.city = '';
        this.newSpecialistProfile.phone = '';
        this.newSpecialistProfile.email = '';
        this.newSpecialistProfile.image = '';
        this.newSpecialistProfile.minperhour = '';
        this.newSpecialistProfile.specialty = '';
        this.newSpecialistProfile.yrsexperience = '';
        this.newSpecialistProfile.zip = '';
        this.newSpecialistProfile.perferredContact = '';
        this.newSpecialistProfile.canContact = '';
        this.newSpecialistProfile.portPic1 = '';
        this.newSpecialistProfile.portPic2 = '';
        this.newSpecialistProfile.portPic3 = '';
        this.newSpecialistProfile.portPic4 = '';
        this.newSpecialistProfile.portPic5 = '';


      },
     
    }
  };

</script>
