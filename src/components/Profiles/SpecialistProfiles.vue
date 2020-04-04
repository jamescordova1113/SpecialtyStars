<template>
<div>
  <v-container>
    <v-row justify="center">
      <v-card class="filterCard" width="600px">
        <v-form class="filterForm" ref="form" v-model="valid" lazy-validation>
          <v-card-title>
            Search for Specialist
          </v-card-title>
          <v-select
            class="select"
            v-model="searchspec"
            :items="specialty"
            label="Specialty"
            data-vv-name="select"
          >
          </v-select>
          <v-select
            class="select"
            v-model="searchexp"
            :items="experiences"
            label="Experience"
            data-vv-name="select"
          >
          </v-select>
          <input
            class="ml-5"
            type="text"
            v-model="searchzip"
            placeholder="Search by zipcode"
          />
          <br />

          <v-btn
            class="filterButton"
            color="red lighten-1"
            tile
            dark
            @click="reset"
          >
            Reset
          </v-btn>
        </v-form>
      </v-card>
    </v-row>

    <v-row justify="space-around">
    <div v-for="evt in filteredProfiles" :key="evt.id">
     
          <v-card tile class="profileCard" outlined width="350px">
            <v-container  fluid>
              <v-card-title class="headline" primary-title>{{
                evt.specialty
              }}</v-card-title>
              <v-img
                class="cardImage white--text"
                v-bind:src="`${evt.image}`"
                height="130px"
                width="240px"
              >
              </v-img>
              <v-card-text class="proCards">
                <span class="event">City: {{ evt.location }}</span>
                <br />
                <span class="event">Zip Code: {{ evt.zip }}</span>
                <br />
                <span class="event"> Specialty: {{ evt.specialty }}</span>
                <br />
                <span class="event">Experience: {{ evt.experience }} </span>
                <br />
                <span class="event"
                  >Min cost per hour: ${{ evt.minperhour }}</span
                >
              </v-card-text>

              <!-- modal -->
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on }">
                  <v-flex class="text-center">
                    <v-btn
                      right
                      class="detailsButton"
                      color="primary lighten-2"
                      v-on="on"
                      dark
                      @click.stop="dialog = true"
                    >
                      More Info
                    </v-btn>
                  </v-flex>
                </template>

                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>
                    Specialist Details
                  </v-card-title>
                  <v-img
                    class="cardImage white--text"
                    v-bind:src="`${evt.image}`"
                    height="100px"
                    width="100px"
                  >
                  </v-img>
                  <v-card-text>
                    <div>
                      <h2>General Info:</h2>
                      <v-divider></v-divider>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question">First Name:</span>
                        {{ evt.alias }}
                      </h3>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question">Specialty:</span>
                        {{ evt.specialty }}
                      </h3>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question"> Transportion to work:</span>
                        {{ evt.transportation }}
                      </h3>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question"
                          >How far are you willing to travel for work:</span
                        >
                        {{ evt.travel }}
                      </h3>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question">I Live in:</span>
                        {{ evt.location }}
                      </h3>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question">My minimum per hour:</span>
                        {{ evt.minperhour }}
                      </h3>
                    </div>
                    <h2>Trade specific Info:</h2>
                    <v-divider></v-divider>

                    <div class="event">
                      <h3>
                        <span class="question">Have own tools:</span>
                        {{ evt.tools }}
                      </h3>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question">What are your Strenghts:</span>
                        {{ evt.strenghts }}
                      </h3>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question">What are your Skills:</span>
                        {{ evt.skills }}
                      </h3>
                    </div>
                    <div class="event">
                      <h3>
                        <span class="question">Experience with Equipment:</span>
                        {{ evt.equipment }}
                      </h3>
                    </div>

                    <br />
                  </v-card-text>
                  <v-btn
                    class="mb-2"
                    color="primary lighten-3"
                    v-on:click="playPause()"
                    >Play/Pause</v-btn
                  >
                  <center>
                    <video id="video" width="435px">
                      <source v-bind:src="`${evt.video}`" type="video/mp4" />
                      <source src="movie.ogg" type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>
                  </center>
                  <v-img class="white--text" v-bind:src="`${evt.image1}`">
                  </v-img>
                  <v-img class="white--text" v-bind:src="`${evt.image2}`">
                  </v-img>
                  <v-img class="white--text" v-bind:src="`${evt.image3}`">
                  </v-img>
                  <v-img class="white--text" v-bind:src="`${evt.image4}`">
                  </v-img>
                </v-card>
                <v-card>
                  <v-card-title
                    class="headline primary lighten-2 white--text"
                    primary-title
                  >
                    Contact: {{ evt.alias }}
                  </v-card-title>
                  <v-card-text>
                    <div v-if="user.isEmployer">
                      <h2 class="h2Contact">
                        Workers Preffered Contact
                        <h3>{{ evt.preferredContact }}</h3>
                      </h2>
                      <p>Email {{ evt.email }}</p>
                      <p>Phone {{ evt.phone }}</p>
                      <router-link :to="{ name: 'Messages' }">
                        <v-btn> Message </v-btn>
                      </router-link>
                    </div>
                    <div
                      v-if="user.isWorker || !user.isLoggedIn"
                      class="text-center mt-5"
                    >
                      <p>
                        Employer Login needed to view workers Contact info.
                      </p>
                      <router-link :to="{ name: 'Login' }">
                        <v-btn color="orange" tile dark> Login </v-btn>
                      </router-link>
                    </div>
                  </v-card-text>
                </v-card>
              </v-dialog>

              <!-- modal end -->
            </v-container>
          </v-card>
          
    </div>
    </v-row>
  </v-container>
  
</div>

</template>

<script>
import db from "@/./firebase/init";
export default {
  name: "Events",
  data() {
    return {
      alignments: [
        'start',
        'center',
        'end'
      ],
      evts: [],
      isEmployer: false,
      counter: 0,
      valid: false,
      specialty: [
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
      workDurs: ["Full Time", "Part Time"],
      experiences: [
        "Helper",
        "Apprentice",
        "Journeyman",
        "Master",
        "Supervisor",
      ],
      myIcon: "mdi-account-card-details-outline",
      searchzip: "",
      searchexp: "",
      searchspec: "",
    };
  },

  methods: {
    playPause() {
      var myVideo = document.getElementById("video");
      if (myVideo.paused) myVideo.play();
      else myVideo.pause();
    },
    reset() {
      this.$refs.form.reset();
    },
    privateMessage() {},
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    filteredProfiles() {
      return this.evts.filter((evt) => {
        return (
          evt.specialty.match(this.searchspec) &&
          evt.experience.match(this.searchexp) &&
          evt.zip.match(this.searchzip)
        );
      });
    },
  },
  beforeCreate() {
    // fetch data from firestore
    db.collection("specialistProfile")
      .orderBy("createdAt", "desc")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let evt = doc.data();
          evt.id = doc.id;
          this.evts.push(evt);
        });
      });
  },
};
</script>

<style>
h3 {
  font-size: 1.5rem;
}
h2 {
  margin-top: 15px;
}
.filterCard {
  margin: 10px;
}
.filterButton {
  margin: 5px;
}
.avatar {
  margin-left: 10px;
}
.question {
  color: darkgrey;
}
.event {
  margin-left: 5px;
  color: slategray;
  font-size: 1.2rem;
}
.filterButton {
  margin-top: 10px;
}
.myTitle {
  word-break: keep-all;
}
.proCards {
  margin-left: 10px;
}
.profileCard {
  margin-bottom: 20px;
}
.profileCard:hover {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  animation-name: example;
  animation-duration: 0.5s;
  box-shadow: 0 12px 38px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.5);
  background: rgb(248, 255, 250);
}
.headline {
  color: black;
}
.select {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
