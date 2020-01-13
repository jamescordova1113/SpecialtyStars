<template>
  <v-container>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Profile</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="specialistProfileTitle">Full Name:</label>
            <input
              type="text"
              id="specialistProfileTitle"
              class="form-control"
              v-model="newSpecialistProfile.title"
            />
          </div>
          <div class="form-group">
            <label for="specialistProfileCity">City:</label>
            <input
              type="text"
              id="specialistProfileCity"
              class="form-control"
              v-model="newSpecialistProfile.city"
            />
          </div>
          <div class="form-group">
            <label for="specialistProfileContact">Contact:</label>
            <input
              type="text"
              id="specialistProfileContact"
              class="form-control"
              v-model="newspecialistProfile.contact"
            />
          </div>
          <div class="form-group">
            <label for="specialistProfileEmail">Email:</label>
            <input
              type="text"
              id="specialistProfileEmail"
              class="form-control"
              v-model="specialistProfile.email"
            />
          </div>
          <div class="form-group">
            <label for="specialistProfileMinPerHour">Minimum per hour:</label>
            <input
              type="text"
              id="specialistProfileMinPerHour"
              class="form-control"
              v-model="specialistProfile.minperhour"
            />
          </div>
          <div class="form-group">
            <label for="specialistProfileSpecialty">Specialty:</label>
            <input
              type="text"
              id="specialistProfileSpecialty"
              class="form-control"
              v-model="specialistProfile.specialty"
            />
          </div>
          <div class="form-group">
            <label for="specialistProfileYrsExperience">Year of Experience:</label>
            <input
              type="text"
              id="specialistProfileYrsExperience"
              class="form-control"
              v-model="specialistProfile.yrsexperience"
            />
          </div>
          <div class="form-group">
            <label for="specialistProfileZip">Zip:</label>
            <input
              type="text"
              id="specialistProfileZip"
              class="form-control"
              v-model="specialistProfile.zip"
            />
          </div>
          <div class="form-group">
            <label for="specialistProfileImage">Image:</label>
            <input
              type="text"
              id="specialistProfileImage"
              class="form-control"
              v-model="specialistProfile.image"
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Add Book" />
        </form>
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
