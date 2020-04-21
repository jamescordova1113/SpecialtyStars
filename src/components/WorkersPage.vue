<template>
  <v-container>
    <v-flex text-xs-center>
      <v-row class="mb-0" justify="center" no-gutters>
        <h2 class=" PageTitle ">
          Worker Home
        </h2>
      </v-row>
    </v-flex>

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
    <div>
      <v-row class="mt-6" no-gutters>
        <p>
          Welcome to “Specialty Stars” a new and convenient resource for hard
          working people and their employers to connect. Specialty Stars is
          tailored for people in the Construction, Home services, and other
          labor generated industries. Hard working people can easily find work
          by showcasing their skills in an online profile, meanwhile, employers
          can browse those profiles and quickly find who they’re looking for.
          Whether you need work or you need workers, Specialty Stars connects
          you faster and easier than ever before. It’s free to sign up, and free
          to browse profiles, all from your phone. Sign up for free today!
        </p>
      </v-row>
    </div>
    <div>
      <v-flex text-xs-center>
        <v-row class="mb-0" no-gutters>
          <v-col>
            <!-- <v-card class="MainInfoCard"> -->
            <v-card-text>
              <v-flex text-xs-center>
                <v-col class="MainInfo ">
                  <div class="max-width: 100%">
                    <h3 class="orange--text">
                      What’s Your Specialty?!
                    </h3>
                  </div>
                </v-col>
              </v-flex>
              <p class="CardText">
                Got skills but no work? Maybe you have a trade but are doing
                something else in the mean time? If you are not a member of the
                local union, it can be difficult to find steady work in your
                trade and the crazy thing is there is tons of work in South Fl.
                In fact, employers in your area need someone like you but can’t
                find you other than word of mouth, that’s also crazy! Maybe you
                are new to South Florida, need a job, but don’t know many
                people. Showcase your skills on Specialty Stars and let the work
                find you! If you are a hard worker, employers need you.
                Introduce yourself on Specialty Stars, Get found today!
                Specialty Stars lets you advertise to the people who are looking
                for you! Whether you just started in your field or you have many
                years experience; Whether you have a job or not, Why not see
                which companies need you and how much they pay. Maybe you are
                looking for weekend work, night work, or side jobs? Whatever you
                are looking for, Specialty Stars has it!
              </p>
            </v-card-text>
            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-flex>
    </div>
    <div>
      <v-flex text-xs-center>
        <v-row class="mb-0" no-gutters>
          <v-col>
            <!-- <v-card class="MainInfoCard"> -->
            <v-card-text>
              <v-flex text-xs-center>
                <v-col class="MainInfo " xs-1 lg-4>
                  <div class="max-width: 100%">
                    <h3 class="orange--text">
                      How Much Does It Cost To Post My Work Profile On The
                      Specialty Stars Website?
                    </h3>
                  </div>
                </v-col>
              </v-flex>
              <p class="CardText">
                Absolutely NOTHING! Using the Specialty Stars website is FREE
                and easy for skilled workers; all you need Is a smartphone to
                upload your profile information. Employers can then find and
                contact you based on how your skills match up with what they
                need.
              </p>
            </v-card-text>
            <!-- </v-card> -->
          </v-col>
        </v-row>
      </v-flex>
    </div>
    <div>
      <v-flex text-xs-center>
        <v-row class="mb-0" justify="left" align="center" no-gutters>
          <v-col cols="6">
            <!-- <v-card class="MainInfoCard"> -->
            <v-card-text>
              <v-flex text-xs-center>
                <v-col class="MainInfo" xs-1 lg-4>
                  <div class="max-width: 100%">
                    <h3 class="orange--text">
                      How Do I get Started?
                    </h3>
                  </div>
                </v-col>
              </v-flex>
              <p class="CardText">
                If you are a skilled worker available for work, it is as easy as
                1-2-3 to get started:
              </p>

              <ol class="CardText">
                <li>Sign up for free.</li>
                <li>Fill out a profile questionnaire and post it.</li>
                <li>Wait for an employer to text or call you!</li>
              </ol>
            </v-card-text>

            <!-- </v-card> -->
          </v-col>
          <v-col cols="6" class="text-center">
            <router-link to="/SignupWorker">
              <v-btn color="orange" tile dark> Signup now! </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-flex>

      <!-- <v-flex text-xs-center align-center>
        <v-row class="mb-6" justify="center" no-gutters>
          <v-col class="MainInfo text-center" xs-12>
            <div class="max-width: 100%">
              <h3 class=" PostTitle orange--text">
                Post your profile for free today and start working tomorrow!
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-flex> -->
    </div>
  </v-container>
</template>

<script>
import db from "@/./firebase/init";

export default {
  metaInfo: {
    title: 'Looking for work sign up with Specialty Stars and start working tomorrow?',
    titleTemplate: 'Specialty Stars',
     htmlAttrs: {
        lang: 'en',
        amp: true
      }
  },
  name: "WorkersPage",
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
