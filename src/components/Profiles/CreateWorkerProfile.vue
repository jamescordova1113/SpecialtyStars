<template>
  <v-container>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Profile</h3>
      </div>
      <div class="panel-body">
        <v-form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <v-label for="specialistProfileTitle">Full Name:</v-label>
            <v-input
              type="text"
              id="specialistProfileTitle"
              class="form-control"
              v-model="newSpecialistProfile.title"
            />
          </div>
          <div class="form-group">
            <v-label for="specialistProfileCity">City:</v-label>
            <v-input
              type="text"
              id="specialistProfileCity"
              class="form-control"
              v-model="newSpecialistProfile.city"
            />
          </div>
          <div class="form-group">
            <v-label for="specialistProfileContact">Contact:</v-label>
            <v-input
              type="text"
              id="specialistProfileContact"
              class="form-control"
              v-model="newspecialistProfile.contact"
            />
          </div>
          <div class="form-group">
            <v-label for="specialistProfileEmail">Email:</v-label>
            <v-input
              type="text"
              id="specialistProfileEmail"
              class="form-control"
              v-model="specialistProfile.email"
            />
          </div>
          <div class="form-group">
            <v-label for="specialistProfileMinPerHour">Minimum per hour:</v-label>
            <v-input
              type="text"
              id="specialistProfileMinPerHour"
              class="form-control"
              v-model="specialistProfile.minperhour"
            />
          </div>
          <div class="form-group">
            <v-label for="specialistProfileSpecialty">Specialty:</v-label>
            <v-input
              type="text"
              id="specialistProfileSpecialty"
              class="form-control"
              v-model="specialistProfile.specialty"
            />
          </div>
          <div class="form-group">
            <v-label for="specialistProfileYrsExperience">Year of Experience:</v-label>
            <v-input
              type="text"
              id="specialistProfileYrsExperience"
              class="form-control"
              v-model="specialistProfile.yrsexperience"
            />
          </div>
          <div class="form-group">
            <v-label for="specialistProfileZip">Zip:</v-label>
            <v-input
              type="text"
              id="specialistProfileZip"
              class="form-control"
              v-model="specialistProfile.zip"
            />
          </div>
          <div class="form-group">
            <v-label for="specialistProfileImage">Image:</v-label>
            <v-input
              type="text"
              id="specialistProfileImage"
              class="form-control"
              v-model="specialistProfile.image"
            />
          </div>
          <v-input type="submit" class="btn btn-primary" value="Add SpecialistProfile" />
        </v-form>
      </div>
    </div>
  </v-container>
</template>

<script>
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
  }
};
</script>
