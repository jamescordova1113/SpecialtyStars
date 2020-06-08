<template>
  <v-container>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="7">
        <h1 class="text-center">
          Workers Dashboard
        </h1>
      </v-col>
    </v-row>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-text><h3 class="text-center">My Account</h3></v-card-text>

          <router-link :to="{ name: 'CreateWorkerProfile' }">
            <v-btn text small>
              My Profile
            </v-btn>
          </router-link>
          <v-spacer />
          <router-link :to="{ name: 'Tips' }">
            <v-btn text small>
              Tips
            </v-btn>
          </router-link>
          <v-dialog v-model="dialog" width="350">
            <template v-slot:activator="{ on }">
              <v-spacer />
              <v-btn class="removeButton" text small @click.stop="dialog = true">
                Remove Profile
              </v-btn>
              <v-spacer />
            </template>
            <v-card>
              <v-flex class="text-center">
                <p class="pt-2">
                  Are you sure you want to remove your profile?
                </p>
                <v-btn
                  class="removeButton"
                  dark
                  tile
                  color="red"
                  @click="update(); dialog = false"
                >
                  Remove
                </v-btn>

                <v-btn class="removeButton" tile @click.stop="dialog = false">
                  Cancel
                </v-btn>
              </v-flex>
            </v-card>
          </v-dialog>
          <br />
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="12"> </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  metaInfo: {
    title: "Everything you need to get work on SpecialtyStars.com.",
    titleTemplate: "Specialty Stars",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  name: "WorkerDashBoard",
  data() {
    return {
      dialog: false,
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
      isWorkerProfile: false,
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
        video: "",
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
        "Supervisor",
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
        "Warehouse",
      ],
      imageData: null,
      uploadValue: 0,
      date: new Date().toISOString().substr(0, 10),
      contact: ["Message", "Email", "Phone Call", "Text"],
      contacts: ["Homeowners", "Employers", "Both"],
    };
  },
  methods: {
    // removeProfile() {
    //   alert(" Your profile has been removed ")

    // },
    update() {
      db.collection("specialistProfile")
        .doc(this.users.id)
        .update({          
          isWorkerProfile: false          
        })
        .then(() => {
          alert(" Your profile has been removed ");
        });
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
.removeButton {
  margin-left: 15px;
}
</style>
