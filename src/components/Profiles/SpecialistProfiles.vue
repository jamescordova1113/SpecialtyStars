<template>
  <v-container class="profileTitle">
    <v-toolbar
      color="primary lighten-2"
      dark
      flat
      justify="center"
      max-width="350px"
    >
      <v-row justify="center">
        <v-toolbar-title><h3>Search for Specialist</h3></v-toolbar-title>
      </v-row>
    </v-toolbar>

    <v-container class="my-4 proCards">
      <v-row justify="center">
        <v-card class="filterCard" width="1024px">
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
        <div v-for="pro in filteredProfiles" :key="pro.id">
          <v-flex style="width: 350px">
            <v-card
              tile
              class="mx-auto profileCard"
              outlined
              width="300px"
              height="370px"
            >
              <v-card-title
                class="headline primary lighten-2 white--text justify-center"
                primary-title
                >{{ pro.specialty }}</v-card-title
              >
              <v-avatar class="ml-5 mt-1" size="100px">
                <v-img class="white--text" v-bind:src="`${pro.image}`"> </v-img>
              </v-avatar>
              <v-card-text class="proCards">
                <span class="event">City: {{ pro.location }}</span>
                <br />
                <span class="event">Zip Code: {{ pro.zip }}</span>
                <br />
                <span class="event"> Specialty: {{ pro.specialty }}</span>
                <br />
                <span class="event">Experience: {{ pro.experience }} </span>
                <br />
                <span class="event"
                  >Min cost per hour: ${{ pro.minperhour }}</span
                >
              </v-card-text>

              <v-card-actions class="justify-center">
                <!-- modal -->
                <v-dialog v-model="dialog" transition="dialog-bottom-transition" max-width="600px">
                  <template v-slot:activator="{ on }">
                    <v-btn
                    right
                      class="explorebutton"
                      color="primary lighten-2"
                      v-on="on"
                      dark
                      tile
                      @click.stop="dialog = true"
                    >
                      View Profile
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title
                      class="headline primary lighten-2 white--text"
                      primary-title
                    >
                      Worker Profile {{ pro.alias }}
                     <v-flex text-end>
                      <v-btn class="align-end" icon @click.native="dialog = false" dark >
            <v-icon>X</v-icon> 
          </v-btn>
                     </v-flex>
                    </v-card-title>

                    <v-avatar class="avatar mt-2" size="100px">
                      <v-img class="white--text" v-bind:src="`${pro.image}`">
                      </v-img>
                    </v-avatar>
                    <v-card-text>
                      <div>
                        <h2>General Info:</h2>
                        <v-divider></v-divider>
                      </div>

                      <div class="event"><h3><span class="question">First Name:</span> {{ pro.alias }}</h3></div>
                      <div class="event">
                        <h3><span class="question">Specialty:</span> {{ pro.specialty }}</h3>
                        
                      </div>
                      <div class="event">
                        <h3><span class="question"> Transportion to work:</span> {{ pro.transportation }}</h3>
                      </div>
                      <div class="event">
                        <h3><span class="question">How far are you willing to travel for work:</span> {{ pro.travel }}</h3>
                        
                      </div>
                      <div class="event">
                        <h3><span class="question">I Live in:</span> {{ pro.location }}</h3>
                        
                      </div>
                      <div class="event">
                        <h3><span class="question">My minimum per hour:</span> {{ pro.minperhour }}</h3>
                        
                      </div>

                      <h2>Trade specific Info:</h2>
                        <v-divider></v-divider>

                      <div class="event">
                        <h3><span class="question">Have own tools:</span> {{ pro.tools }}</h3>
                        
                      </div>
                      <div class="event">
                        <h3><span class="question">What are your Strenghts:</span> {{ pro.strenghts }}</h3>
                        
                      </div>
                      <div class="event">
                        <h3><span class="question">What are your Skills:</span> {{ pro.skills }}</h3>
                        
                      </div>
                      <div class="event">
                        <h3><span class="question">Experience with Equipment:</span> {{ pro.equipment }}</h3>
                        
                      </div>

                      <br />
                        <div class="event">
                          <div style="text-align:center">
          <v-btn class="mb-2" color="primary lighten-3" v-on:click="playPause()">Play/Pause</v-btn>
          <center>
            <video id="video" width="450px" autoplay>
              <source
              v-bind:src="`${pro.video}`"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </center>
        </div>
        <v-img class="white--text" v-bind:src="`${pro.image1}`"> </v-img>
        <v-img class="white--text" v-bind:src="`${pro.image2}`"> </v-img>
        <v-img class="white--text" v-bind:src="`${pro.image3}`"> </v-img>
        <v-img class="white--text" v-bind:src="`${pro.image4}`"> </v-img>
                         

                      </div>
                     
                      <!-- Contact Card -->
              <v-card-actions class="justify-center">
                <!-- modal -->
                <v-dialog v-model="dialog2" width="500">
                  <template v-slot:activator="{ on }">
                    <v-btn
                    
                    right
                      class="explorebutton"
                      color="primary lighten-2"
                      v-on="on"
                      dark
                      tile
                      @click.stop="dialog = true"
                    >
                      Contact
                    </v-btn>
                  </template>

                  <v-card>
                    <v-card-title
                      class="headline primary lighten-2 white--text"
                      primary-title
                    >
                      Contact {{ pro.alias }}
                    </v-card-title>
                    <v-card-text>
                      <div v-if="user.isEmployer">
                        <h2 class="h2Contact"> Workers Preffered Contact <h3>{{ pro.preferredContact }}</h3></h2>
                        <p> Email {{ pro.email }} </p>
                        <p> Phone {{ pro.phone }} </p> 
                         <router-link :to="{ name: 'Messages' }">
            <v-btn> Message </v-btn>
          </router-link>
                      </div>
                      <div v-if="user.isWorker || !user.isLoggedIn" class="text-center mt-5">
                        <p> Employer Login needed to view workers Contact info. </p>
                        <router-link :to="{ name: 'Login' }">
                        <v-btn color="orange" tile dark> Login </v-btn>
                        </router-link>
                      </div>
                    </v-card-text>
            </v-card>
                </v-dialog>
              </v-card-actions>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-card-actions>
              

              <!-- modal end -->
              
            </v-card>
         
          </v-flex>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script>
import db from "@/./firebase/init";

export default {
  name: "SpecialistProfile",
  
  data() {
    return {
     
      isEmployer: false,
      counter: 0,
      specialistProfile: {
        preferredContact: "",
        phone: "",
        email: "",
      },
      dialog: false,
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
        "Warehouse"
      ],
      workDurs: ["Full Time", "Part Time"],
      experiences: [
        "Helper",
        "Apprentice",
        "Journeyman",
        "Master",
        "Supervisor"
      ],
      location: ["Woodinville", "CDA", "Boise"],
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      pros: [],
      myIcon: "mdi-account-card-details-outline",
      dialog: false,
      dialog2: false,
      searchzip: "",
      searchexp: "",
      searchspec: "",
      image: ''
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
    privateMessage() {

    },

    countContact() {
      let inc = 0;
      inc = inc + 1;
      alert(inc);
    }
    
  },

  computed: {
    user() {
      return this.$store.state.user;
    },
    filteredProfiles() {
      return this.pros.filter(pro => {
        return (
          pro.specialty.match(this.searchspec) &&
          pro.experience.match(this.searchexp) &&
          pro.zip.match(this.searchzip)
        );
      });
    }
  },
  beforeCreate() {
    // fetch data from firestore
    db.collection("specialistProfile")
      .orderBy("createdAt")

      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let pro = doc.data();
          pro.id = doc.id;
          this.pros.push(pro);
        });
      });
  }
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
