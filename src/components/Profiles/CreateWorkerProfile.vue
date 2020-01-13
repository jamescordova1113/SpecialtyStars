<template>
  <v-container class="loginCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title
          ><h1>Add a your Specialist Profile</h1></v-toolbar-title
        >
      </v-row>
    </v-toolbar>
    <div class="panel-body">
      <v-form id="form" class="form-inline" v-on:submit.prevent="addBook">
        <div class="form-group">
          <v-text-field>Full Name:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileTitle"
            class="form-control"
            v-model="newSpecialistProfile.title"
          />
        </div>
        <div class="form-group">
          <v-text-field>City:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileCity"
            class="form-control"
            v-model="newSpecialistProfile.city"
          />
        </div>
        <div class="form-group">
          <v-text-field>Contact:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileContact"
            class="form-control"
            v-model="newspecialistProfile.contact"
          />
        </div>
        <div class="form-group">
          <v-text-field>Email:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileEmail"
            class="form-control"
            v-model="specialistProfile.email"
          />
        </div>
        <div class="form-group">
          <v-text-field>Minimum per hour:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileMinPerHour"
            class="form-control"
            v-model="specialistProfile.minperhour"
          />
        </div>
        <div class="form-group">
          <v-text-field>Specialty:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileSpecialty"
            class="form-control"
            v-model="specialistProfile.specialty"
          />
        </div>
        <div class="form-group">
          <v-text-field>Year of Experience:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileYrsExperience"
            class="form-control"
            v-model="specialistProfile.yrsexperience"
          />
        </div>
        <div class="form-group">
          <v-text-field>Zip:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileZip"
            class="form-control"
            v-model="specialistProfile.zip"
          />
        </div>
        <div class="form-group">
          <v-text-field>Image:</v-text-field>
          <v-input
            type="text"
            id="specialistProfileImage"
            class="form-control"
            v-model="specialistProfile.image"
          />
        </div>
        <v-input
          type="submit"
          class="btn btn-primary"
          value="Add SpecialistProfile"
        />
      </v-form>
    </div>
  </v-container>
</template>

<script>
import db from "@/firebase/init";

let SpecialistProfileRef = db.ref("specialistProfile");
export default {
  name: "createWorkerProfile",
  data() {
    return {
      newSpecialistProfile: {
        city: "",
        contact: "",
        image: "",
        minperhour: "",
        specialty: "",
        title: "",
        yrsexperience: "",
        email: "",
        zip: ""
      }
    };
  },
  methods: {
    addSpecialistProfile: function() {
      SpecialistProfileRef.push(this.newSpecialistProfile);
      this.newSpecialistProfile.title = "";
      this.newSpecialistProfile.author = "";
      this.newSpecialistProfile.image = "";
      this.newSpecialistProfile.minperhour = "";
      this.newSpecialistProfile.specialty = "";
      this.newSpecialistProfile.city = "";
      this.newSpecialistProfile.yrsexperience = "";
      this.newSpecialistProfile.email = "";
      this.newSpecialistProfile.zip = "";
    }
  }
};
</script>
