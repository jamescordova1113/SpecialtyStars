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
                <v-dialog v-model="dialog" width="500">
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
                    </v-card-title>

                    <v-avatar class="avatar" size="100px">
                      <v-img class="white--text" v-bind:src="`${pro.image}`">
                      </v-img>
                    </v-avatar>
                    <v-card-text>
                      <div>
                        <h2>General Info</h2>
                      </div>

                      <div class="event">First Name: {{ pro.alias }}</div>
                      <div class="event">
                        <h3>Specialty:</h3>
                        {{ pro.specialty }}
                      </div>
                      <div class="event">
                        <h3>Transportion to work:</h3>
                        {{ pro.transportation }}
                      </div>
                      <div class="event">
                        <h3>How far are you willing to travel for work:</h3>
                        {{ pro.travel }}
                      </div>
                      <div class="event">
                        <h3>I Live in:</h3>
                        {{ pro.location }}
                      </div>
                      <div class="event">
                        <h3>My minimum per hour:</h3>
                        {{ pro.minperhour }}
                      </div>

                      <h2>Trade specific Info:</h2>

                      <div class="event">
                        <h3>Have own tools:</h3>
                        {{ pro.tools }}
                      </div>
                      <div class="event">
                        <h3>What are your Strenghts:</h3>
                        {{ pro.strenghts }}
                      </div>
                      <div class="event">
                        <h3>What are your Skills:</h3>
                        {{ pro.skills }}
                      </div>
                      <div class="event">
                        <h3>Experience with Equipment:</h3>
                        {{ pro.equipment }}
                      </div>

                      <br />
                      <div class="carousel">
                        <v-carousel
                          cycle
                          height="350"
                          hide-delimiter-background
                          show-arrows-on-hover
                        >
                          <v-carousel-item
                            v-for="(slide, i) in slides"
                            :key="i"
                          >
                            <v-sheet :color="colors[i]" height="100%">
                              <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                              >
                                <div class="display-3">{{ slide }} Slide</div>
                              </v-row>
                            </v-sheet>
                          </v-carousel-item>
                        </v-carousel>
                      </div>
                      <br />
                     
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
                      <div>
                        <h2 class="h2Contact"> Workers Preffered Contact {{ pro.prefferedContact }}</h2>
                        <p> Email {{ pro.email }} </p>
                        <p> Phone {{ pro.phone }} </p> 
                        <v-btn @click="privateMessage()"> Message </v-btn>
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
        prefferedContact: "null",
        phone: "null",
        email: "null"
      },
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
      searchspec: ""
    };
  },
  methods: {
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
.h2Contact {
  margin-top: 10px;
  margin-bottom: 10px;
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
.event {
  margin-left: 5px;
  color: slategray;
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
