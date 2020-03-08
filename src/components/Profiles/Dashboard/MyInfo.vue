<template>
  <v-container class="editProfileCard">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>My Info</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form ref="form" lazy-validation v-model="valid">
          
          <v-text-field
            type="Address"
            v-model="users.address"
            label="Business Address:"
            required
          ></v-text-field>
          <v-text-field
            type="Phone"
            v-model="users.phone"
            label="Phone Number:"
            required
          ></v-text-field>
          <v-text-field
            v-model="users.license"
            label="License number:"
          ></v-text-field>
          <v-text-field
            v-model="users.bizName"
            label="bizName:"
            required
          ></v-text-field>
          <v-text-field
            v-model="users.alias"
            label="Full Name:"
            required
          ></v-text-field>
       
         
          <v-flex class="xs12 sm6 mt-5 offset-sm1">
            <v-btn color="primary lighten-2" class="mr-4" @click="update"
              >Update Info</v-btn
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
        email: "",
      users: {
        alias: null,
        user_id: null,
        email: null,
        address: null,
        phone: null,
        license: null,
        bizName: null
        },
     
      date: new Date().toISOString().substr(0, 10),
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
          address: this.users.address,
          license: this.users.license,
          bizName: this.user.bizName,
          user_id: this.users.user_id
        })
        .then(() => {
          if (this.imageUrl)
            return firebase
            .firestore()
              .storage()
              .ref("Images/" + this.filename)
              .put(this.imageUrl);
        })
        .then(() => {
          if (this.imageUrl)
            return firebase
            .firestore()
              .storage()
              .ref("Images/" + this.filename)
              .getDownloadURL();
        })
        .then(URL => {
          if (URL)
            db.collection("Users").update({
              imageUrl: URL
            });
        })
        .then(() => {
          this.$router.push({ name: "SpecialistProfiles" });
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
    // console.log(firebase.auth().currentUser.uid);
    let ref = db
      .collection("users")
      .where("user_id", "==", firebase.auth().currentUser.uid);

    // console.log("got Here");
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