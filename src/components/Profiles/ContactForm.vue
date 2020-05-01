<template>
  <v-container class="contactForm">
    <v-toolbar color="orange" dark justify="center" max-width="450px" flat>
      <v-row justify="space-around">
        <v-toolbar-title><h1>Message Worker</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="loginTitle">
      <v-card-text>
        <v-form ref="form" lazy-validation v-model="valid">
          <img :src="users.image" />
          <v-text-field
            v-model="users.alias"
            label="First Name:"
            required
          ></v-text-field>
          <v-text-field
            type="phone"
            v-model="users.phone"
            label="Phone#:"
            required
          ></v-text-field>
          <v-text-field
            type="email "
            v-model="users.email"
            label="Email:"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            v-model="users.message"
            label="Message:"
            required
          ></v-text-field>

          <v-btn color="success" tile @click="send">Send</v-btn>

          <router-link :to="{ name: 'Index' }">
            <v-btn color="error" tile class="mr-4">Cancel</v-btn>
          </router-link>

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
      messgae: "",
      users: {
        alias: null,
        user_id: null,
        isWorkerProfile: true,
      },
      date: new Date().toISOString().substr(0, 10),
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  firestore() {
    return {
      Profile: db.collection("specialistProfile").orderBy("createdAt"),
    };
  },
  methods: {
    update() {
      db.collection("specialistProfile")
        .doc(this.users.id)
        .set({
          createdAt: new Date(),
          alias: this.users.alias,
          phone: this.users.phone,
          message: this.users.phone,
          user_id: this.users.user_id,
          email: this.users.email,
        })
        .then(() => {
          if (this.image)
            return firebase
              .storage()
              .ref("Images/" + this.filename)
              .put(this.image);
        })
        .then(() => {
          if (this.image)
            return firebase
              .storage()
              .ref("Images/" + this.filename)
              .getDownloadURL();
        })
        .then((URL) => {
          if (URL)
            db.collection("specialistProfile")
              .doc(firebase.auth().currentUser.uid)
              .update({
                image: URL,
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
    },
  },

  created() {
    // console.log(firebase.auth().currentUser.uid);
    let ref = db
      .collection("specialistProfile")
      .where("user_id", "==", firebase.auth().currentUser.uid);
    ref.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        this.users = doc.data();
        this.users.id = doc.id;
      });
    });
  },
};
</script>

<style scoped>
.helpText {
  font-size: 1.2em;
}
li {
  margin: 10px;
}
.helpTitle {
  margin: 10px;
  font-size: 1.8em;
}
img.preview {
  width: 150px;
}
</style>
