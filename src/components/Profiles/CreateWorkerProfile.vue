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
          <img :src="users.image" width="250px" />
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
            type="email "
            v-model="users.email"
            label="Email:"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-select
            v-model="users.experience"
            :items="experiences"
            label="You experience level:"
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
            label="Whay city do you live in?:"
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
            label="Do you have your own tools and/or safety equipment?:"
          ></v-text-field>
          <v-text-field
            v-model="users.transportation"
            label="Do you have dependable transportation?:"
          ></v-text-field>
          <v-select
            v-model="users.workDur"
            :items="workDurs"
            label="What duration of work are looking for?:"
            data-vv-name="workDurs"
          ></v-select>
          <v-text-field
            v-model="users.travel"
            label="How far are you willing to travel?:"
          ></v-text-field>
          <v-text-field
            v-model="users.equipment"
            label="Do you have experience with a equipment need for your specialty? and if so what kind?:"
          ></v-text-field>
          <v-text-field
            v-model="users.skills"
            label="Got skills in your specialty what are they?:"
          ></v-text-field>
          <v-text-field
            v-model="users.strenghts"
            label="In your own words what are your strenghts and experience in your specialty any certification?:"
          ></v-text-field>
          <ol class="profileHelp">
            <span class="helpTitle grey--text text--darken-3 text-center">
              Profile Help
            </span>
            <li class="helpText">
              Keep it Real! The most important thing is to be honest. If you
              don’t have a certain Skillset, you should not state you do. Your
              best chance of success on Specialty Stars is to accurately
              describe your skillset.
            </li>
            <li class="helpText">
              Post Pics and Video! Employers want to see you! They want to see
              how you do your work, what you wear, your tools, your technique,
              etc. Upload a video for your BEST chance of success on Specialty
              Stars.
            </li>
            <li class="helpText">
              Post a reasonable rate of Compensation. If your rate of
              compensation does not match your experience level, No one will
              contact you. Remember that once you have shown your employer what
              you can do, you can always ask for more money. It’s best to get
              your foot in the door!
            </li>
            <li class="helpText">
              Keep the baggage to a minimum! Remember that employers want to
              hire you and only you! If you’re only available 1 day a week and
              you need to bring your brother and your cousin with you, Don’t be
              surprised if no one wants to hire you!
            </li>
          </ol>
          <v-flex class="xs12 sm6 mb-2 pt-4">
            <v-btn class="primary" tile raised @click="onPickFile"
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
          <div class="form-group">
            <label for="project_image">Portfolio Video</label>
            <input type="file" @change="uploadVideo" class="form-control" />
          </div>

          <div class="form-group d-flex">
            <div class="p-1">
              <div class="img-wrapp">
                <img :src="users.video" alt="" width="80px" class="mb-5" />
                <v-btn icon @click="deleteVideo" dark>
                  <v-icon>X</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="project_image">Portfolio Images</label>
            <input type="file" @change="uploadImage" class="form-control" />
          </div>
          <div class="form-group d-flex">
            <div class="p-1">
              <div class="img-wrapp">
                <img :src="users.image1" width="100px" class="mb-5"/>
                <v-btn icon @click="deleteImage" dark>
                  <v-icon>X</v-icon>
                </v-btn>
                <input type="file" @change="uploadImage2" class="form-control" />
          
                <img :src="users.image2" width="100px" class="mb-5"/>
                <v-btn icon @click="deleteImage" dark>
                  <v-icon>X</v-icon>
                </v-btn>
              
           <input type="file" @change="uploadImage3" class="form-control" />
          
                <img :src="users.image3" width="100px" class="mb-5"/>
                <v-btn icon @click="deleteImage" dark>
                  <v-icon>X</v-icon>
                </v-btn>
            
           <input type="file" @change="uploadImage4" class="form-control" />
          
                <img :src="users.image4" width="100px" class="mb-5"/>
                <v-btn icon @click="deleteImage" dark>
                  <v-icon>X</v-icon>
                </v-btn>
              </div>
          </div>
          </div>
          <v-flex class="text-center">
            <v-btn color="success" tile @click="update">Post Profile</v-btn>

            <router-link :to="{ name: 'Index' }">
              <v-btn color="error" tile class="mr-4">Cancel</v-btn>
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
import { VueEditor } from "vue2-editor";
export default {
  name: "CreateWorkerProfile",
  data() {
    return {
      valid: false,
      phone: "",
      minperhour: "",
      preferredContact: "",
      canContact: "",
      location: "",
      city: "",
      zip: "",
      specialty: null,
      tools: null,
      imageUrl: null,
      experience: null,
      workDur: null,
      strenghts: null,
      skills: null,
      equipment: null,
      travel: null,
      transportation: null,
      isWorkerProfile: true,
      email: "",
      video: "",

      users: {
        alias: null,
        user_id: null,
        isWorkerProfile: true,
        image1URL: null,
        videoURL: null,
        image: null,
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        image6: null,
        images: [],
        video: ""
      },
      image: null,
      images: [],
      imageHeight: 0,
      workDurs: ["Full Time", "Part Time"],
      experiences: [
        "Helper",
        "Apprentice",
        "Journeyman",
        "Master",
        "Supervisor"
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
      imageData: null,
      uploadValue: 0,
      date: new Date().toISOString().substr(0, 10),
      contact: ["Message", "Email", "Phone Call", "Text"],
      contacts: ["Homeowners", "Employers", "Both"],
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
    deleteImage(img, index) {
      let image = firebase.storage().refFromURL(img);
      this.users.images.splice(index, 1);
      image
        .delete()
        .then(function() {
          console.log("image deleted");
        })
        .catch(function(error) {
          // Uh-oh, an error occurred!
          console.log("an error occurred");
        });
    },
    deleteVideo() {
      let video = firebase.storage().refFromURL(img);
      this.users.video.splice(index, 1);
      video
        .delete()
        .then(function() {
          console.log("video deleted");
        })
        .catch(function(error) {
          // Uh-oh, an error occurred!
          console.log("an error occurred");
        });
    },
    uploadImage(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = firebase
          .storage()
          .ref("projects/" + Math.random() + "_" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...

            uploadTask.snapshot.ref.getDownloadURL().then(URL => {
              if (URL)
                db.collection("specialistProfile")
                  .doc(firebase.auth().currentUser.uid)
                  .update({
                    image1: URL
                  });

              //   this.images.push(downloadURL);
              // });
            });
          }
        );
      }
    },
    uploadImage2(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = firebase
          .storage()
          .ref("projects/" + Math.random() + "_" + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {         
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(URL => {
              if (URL)
                db.collection("specialistProfile")
                  .doc(firebase.auth().currentUser.uid)
                  .update({
                    image2: URL
                  });
            });
          }
        );
      }
    },
    uploadImage3(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = firebase
          .storage()
          .ref("projects/" + Math.random() + "_" + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {         
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(URL => {
              if (URL)
                db.collection("specialistProfile")
                  .doc(firebase.auth().currentUser.uid)
                  .update({
                    image3: URL
                  });
            });
          }
        );
      }
    },
    uploadImage4(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];
        var storageRef = firebase
          .storage()
          .ref("projects/" + Math.random() + "_" + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {         
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then(URL => {
              if (URL)
                db.collection("specialistProfile")
                  .doc(firebase.auth().currentUser.uid)
                  .update({
                    image4: URL
                  });
            });
          }
        );
      }
    },

    uploadVideo(e) {
      if (e.target.files[0]) {
        let file = e.target.files[0];

        var storageRef = firebase
          .storage()
          .ref("videos/" + Math.random() + "_" + file.name);

        let uploadTask = storageRef.put(file);

        uploadTask.on(
          "state_changed",
          snapshot => {},
          error => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...

            uploadTask.snapshot.ref.getDownloadURL().then(URL => {
              if (URL)
                db.collection("specialistProfile")
                  .doc(firebase.auth().currentUser.uid)
                  .update({
                    video: URL
                  });
              //   this.images.push(downloadURL);
              // });
            });
          }
        );
      }
    },

    update() {
      db.collection("specialistProfile")
        .doc(this.users.id)
        .set({
          createdAt: new Date(),
          alias: this.users.alias,
          phone: this.users.phone,
          minperhour: this.users.minperhour,
          specialty: this.users.specialty,
          experience: this.users.experience,
          workDur: this.users.workDur,
          strenghts: this.users.strenghts,
          equipment: this.users.equipment,
          travel: this.users.travel,
          skills: this.users.skills,
          zip: this.users.zip,
          preferredContact: this.users.preferredContact,
          canContact: this.users.canContact,
          tools: this.users.tools,
          transportation: this.users.transportation,
          location: this.users.location,
          user_id: this.users.user_id,
          isWorkerProfile: this.users.isWorkerProfile,
          email: this.users.email,
          isWorker: this.users.isWorker
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
        .then(URL => {
          if (URL)
            db.collection("specialistProfile")
              .doc(firebase.auth().currentUser.uid)
              .update({
                image: URL
              });
        })
        // .then(() => {
        //   this.$firestore.specialistProfile.doc(this.users.id).add(this.images);

        //   Toast.fire({
        //     type: 'success',
        //     title: 'Project created successfully'
        //   })
        // })
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
      .collection("specialistProfile")
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
