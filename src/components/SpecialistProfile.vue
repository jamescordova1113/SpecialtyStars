<template>
  <v-container class="profileTitle">
    <v-toolbar color="primary lighten-2" dark flat justify="center" max-width="450px">
      <v-row justify="center">
        <v-toolbar-title><h3>Home>Specialties>Tile&Marble>CDA </h3></v-toolbar-title>
      </v-row>
    </v-toolbar>

    <v-container class="my-0">
      <v-row justify="space-around">
        <div v-for="pro in pros" :key="pro.id">
          <v-card outlined class="profileCard" width="250px" height="330px">
            <v-card-title class="headline justify-center" primary-title>{{
              pro.title
            }}</v-card-title>
            <v-avatar size="100px">
              <v-img class="white--text" v-bind:src="`${pro.image}`"> </v-img>
            </v-avatar>
            <v-card-text class="proCards">
              <span class="event">City: {{ pro.cityzip }}</span>
              <br />
              <span class="event"
                >Experience: {{ pro.yrsexperience }} Years</span
              >
              <br />
              <span class="event"
                >Min cost per hour: ${{ pro.minperhour }}</span
              >
            </v-card-text>
            <v-layout class="explorelist">
              <v-flex>
                <!-- modal -->
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
                      <v-img class="white--text" v-bind:src="`${pro.image}`">
                      </v-img>
                    </v-avatar>
                    <v-card-text>
                      <div>
                        <h3>General Info</h3>
                      </div>

                      <div class="event">First Name: {{ pro.firstname }}</div>
                      <div class="event">Specialty: {{ pro.specialty }}</div>
                      <div class="event">
                        Transportion to work: {{ pro.transportation }}
                      </div>
                      <div class="event">
                        Looking for: {{ pro.workduration }}
                      </div>
                      <div class="event">I Live in: {{ pro.speccity }}</div>
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
                      <div class="event">Have own tools: {{ pro.tools }}</div>
                      <div class="event">
                        (Helpers) I can make cuts and grout:
                        {{ pro.Helpgroutcut }}
                      </div>
                      <div class="event">My strenghts: {{ pro.strengths }}</div>
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
                      <div class="text--center">
                        <v-btn
                          class="explore"
                          color="primary lighten-2"
                          dark
                          tile
                          v-bind:href="`${pro.contact}`"
                          >[ Contact ]
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-flex>
            </v-layout>
            
            <!-- modal end -->
          </v-card>
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
      pros: [],
      myIcon: "mdi-account-card-details-outline"
    };
  },
  methods: {},
  computed: {
    user() {
      return this.$store.state.user;
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
  margin: 10px;
}
.event {
  margin-left: 5px;
  color: darkslategray;
}
.explore {
  padding: 0px;
  margin: 0px;
}
.myTitle {
  word-break: keep-all;
}
.proCards {
  margin-top: 10px;
}
.profileCard {
  margin-top: 0px;
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
</style>
