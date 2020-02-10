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
            <v-card class="filterCard" width="300px" height="300px">
              <v-card-title>
                Filter results
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
                :items="experience"
                label="Experience"
                data-vv-name="select"
              >
              </v-select>
              <input class="ml-5" type="text" v-model="searchzip" placeholder="Search by zipcode"
              />
                      

              
            </v-card>
            <div v-for="pro in filteredProfiles" :key="pro.id">
              <v-flex style="width: 350px">
                
                <v-card
                  class="mx-auto profileCard"
                  outlined
                  width="300px"
                  height="370px"
                >
                  <v-card-title
                    class="headline primary lighten-2 white--text"
                    primary-title
                    >{{ pro.title }}</v-card-title
                  >
                  <v-avatar class="ml-5 mt-1" size="100px">
                    <v-img class="white--text" v-bind:src="`${pro.image}`">
                    </v-img>
                  </v-avatar>
                  <v-card-text class="proCards">
                    <span class="event">City: {{ pro.location }}</span>
                    <br />
                    <span class="event">Zip Code: {{ pro.zip }}</span>
                    <br />
                    <span class="event"> Specialty: {{ pro.specialty }}</span>
                    <br />
                    <span class="event"
                      >Experience: {{ pro.experience }} </span
                    >
                    <br />
                    <span class="event"
                      >Min cost per hour: ${{ pro.minperhour }}</span
                    >
                  </v-card-text>
                  <v-layout class="explorelist">
                    <v-flex>
                      <!-- modal -->
                      <v-card-actions class="justify-center">
                        <v-dialog v-model="dialog" width="500">
                          <template v-slot:activator="{ on }">
                            <v-btn
                              class="explorebutton"
                              color="primary lighten-2"
                              v-on="on"
                              dark
                              tile
                              right
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
                              Specialist Profile: {{ pro.title }}
                            </v-card-title>

                            <v-avatar class="avatar" size="100px">
                              <v-img
                                class="white--text"
                                v-bind:src="`${pro.image}`"
                              >
                              </v-img>
                            </v-avatar>
                            <v-card-text>
                              <div>
                                <h3>General Info</h3>
                              </div>

                              <div class="event">
                                First Name: {{ pro.firstname }}
                              </div>
                              <div class="event">
                                Specialty: {{ pro.specialty }}
                              </div>
                              <div class="event">
                                Transportion to work: {{ pro.transportation }}
                              </div>
                              <div class="event">
                                Looking for: {{ pro.workduration }}
                              </div>
                              <div class="event">
                                I Live in: {{ pro.speccity }}
                              </div>
                              <div class="event">
                                My minimum per hour: {{ pro.minperhour }}
                              </div>
                              <div class="event">
                                I will travel {{ pro.traveldistance }} to work.
                              </div>
                              <h3>Trade specific Info:</h3>
                              <div class="event">
                                Mechanic or helper: {{ pro.helper }}
                              </div>
                              <div class="event">
                                Have own tools: {{ pro.tools }}
                              </div>
                              <div class="event">
                                (Helpers) I can make cuts and grout:
                                {{ pro.Helpgroutcut }}
                              </div>
                              <div class="event">
                                My strenghts: {{ pro.strengths }}
                              </div>
                              <div class="event">
                                Specific experience: {{ pro.specworktypes }}
                              </div>
                              <div class="event">
                                (Mechanics) I can install walls and floors:
                                {{ pro.wallfloors }}
                              </div>
                              <div class="event">
                                Can produce a level floor: {{ pro.levelfloors }}
                              </div>
                              <div class="event">
                                Can produce a plumb wall: {{ pro.plumbwalls }}
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
                                        <div class="display-3">
                                          {{ slide }} Slide
                                        </div>
                                      </v-row>
                                    </v-sheet>
                                  </v-carousel-item>
                                </v-carousel>
                              </div>
                              <br />
                              <div class="text--center">
                                <v-btn
                                  class="explore"
                                  color="primary lighten-2"
                                  dark
                                  tile
                                  v-bind:href="`${pro.contact}`"
                                  >[ Message Me ]
                                </v-btn>
                              </div>
                            </v-card-text>
                          </v-card>
                        </v-dialog>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>

                  <!-- modal end -->
                </v-card>
              </v-flex>
                                </div>

          </v-row>
        </v-container>
  </v-container>
</template>

<script>
import db from "@/./firebase/init";

export default {
  name: "SpecialistProfile",
  data() {
    return {
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
      experience: ["Laborer", "Apprentice", "Journeyman"],
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
      searchzip: '',
      searchexp: '',
      searchspec: ''
    };
  },
  methods: {},
  computed: {
    user() {
      return this.$store.state.user;
    },
    filteredProfiles:function(){
      return this.pros.filter((pro) => {
        return (pro.specialty.match(this.searchspec) && pro.experience.match(this.searchexp) && pro.zip.match(this.searchzip))
      });
    }
  },
  beforeCreate() {
    // fetch data from firestore
    db.collection("specialistProfile")
      
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
.avatar {
  margin-left: 10px;
}
.event {
  margin-left: 5px;
  color: darkslategray;
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