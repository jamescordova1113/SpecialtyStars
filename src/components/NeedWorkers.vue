<template>
  <v-container>
    <v-flex text-xs-center>
      <v-row justify="center" align="center" no-gutters>
        <v-col lg="6">
          <div class="max-width: 100%">
            <h2 class=" PageTitle text-center ">
              Home For Employers
            </h2>
          </div>
        </v-col>
      </v-row>
      <v-row class="mb-6" justify="center" align="center" no-gutters>
        <v-col>
         <div class="carousel" >
      <v-carousel
        cycle
        height="350"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="slide in slides" :src="slide.image" :key="slide.id">
          
        </v-carousel-item>
      </v-carousel>
    </div>
        </v-col>
      </v-row>
    </v-flex>
    <div>
      <v-flex text-xs-center>
        <v-row class="mb-6" justify="center" align="center" no-gutters>
          <v-col>
            <v-card-text>
              <v-flex text-xs-center>
                <v-col class="MainInfo text-center">
                  <div class="max-width: 100%">
                    <h3 class="orange--text">
                      Need skilled workers?
                    </h3>
                  </div>
                </v-col>
              </v-flex>
              <p class="CardText">
                Have you been looking for skilled people to get your jobs done?
                Not having any luck with Temporary Labor Agencies? You can never
                have enough good people to work for you! If you're looking for
                People in your area with a specific skill or craft; Why not give
                Specialty Stars a look and browse some profiles for free! We
                have 50 trades to choose from and most workers are proud to post
                their skills And experience levels. Find who you’re looking for
                right from your phone! Labor can be the most Expensive part of
                any job, Don’t throw your money away with temporary Labor
                agencies; Maximize Your profits with people with the skills you
                need! No more worries about being able to man your jobs, meet
                your deadlines, or having to do things yourself! Specialty Stars
                is indispensable for General Contractors, Specialty Contractors,
                Business owners and Managers. With so much work being
                coordinated online, it only makes sense that contractors and
                employers need an online resource for labor like Specialty
                Stars.
              </p>
            </v-card-text>
          </v-col>
        </v-row>
        <v-flex row>
          <v-col class="text-center">
            <router-link to="/SignupEmployer">
              <v-btn color="orange" tile dark>Signup to find workers</v-btn>
            </router-link>
          </v-col>
        </v-flex>
      </v-flex>
    </div>
  </v-container>
</template>

<script>
import db from "@/./firebase/init";

export default {
  name: "NeedWorkers",
  data() {
    return {
      slides: []
    };
  },
  beforeCreate() {
    // fetch data from firestore
    db.collection("Slides")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let slide = doc.data();
          slide.id = doc.id;
          this.slides.push(slide);
        });
      });
  }
};
</script>

<style scoped>
.MainInfoCard {
  margin: 20px;
}
.MainInfo {
  margin-top: 20px;
}
.CardText {
  margin: 20px;
  color: black;
}
.PostTitle {
  margin: 20px;
}
.PageTitle {
  margin: 50px;
}
</style>
