<template>
  <container>
    <v-flex text-xs-center>
      <v-row class="mb-6" justify="center" align="center" no-gutters>
        <v-col lg="3"> </v-col>
        <v-col lg="6">
          <div class="max-width: 100%">
            <h2 class=" PageTitle ">
              Home For Worker
            </h2>
          </div>
        </v-col>
        <v-col lg="3">
          <div>
            <v-btn color="orange" tile dark> Sign up FREE! </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-flex>
    <v-div>
      <v-flex text-xs-center>
        <v-row class="mb-6" justify="center" align="center" no-gutters>
          <v-col lg="8">
            <v-card class="MainInfoCard">
              <v-card-text>
                <v-flex text-xs-center>
                  <v-col class="MainInfo text-center">
                    <div class="max-width: 100%">
                      <h3 class="orange--text">
                        What’s Your Specialty?!
                      </h3>
                    </div>
                  </v-col>
                </v-flex>
                <p class="CardText">
                  Got skills but no work? Maybe you have a trade but are doing
                  something else in the mean time? If you are not a member of
                  the local union, it can be difficult to find steady work in
                  your trade and the crazy thing is there is tons of work in
                  South Fl. In fact, employers in your area need someone like
                  you but can’t find you other than word of mouth, that’s also
                  crazy! Maybe you are new to South Florida, need a job, but
                  don’t know many people. Showcase your skills on Specialty
                  Stars and let the work find you! If you are a hard worker,
                  employers need you.. Introduce yourself on Specialty Stars,
                  Get found today! Ever want to advertise your services but
                  don’t have a license? Specialty Stars lets you advertise to
                  the people who are looking for you! Whether you just started
                  in your field or you have many years experience; Whether you
                  have a job or not, Why not see which companies need you and
                  how much they pay. Maybe you are looking for weekend work,
                  night work, or side jobs? Whatever you are looking for,
                  Specialty Stars has it!
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col lg="4">
            <v-img src="../assets/images/mudding2.jpg" max-width="450px">
            </v-img>
          </v-col>
        </v-row>
      </v-flex>
    </v-div>
    <v-div>
      <v-flex text-xs-center>
        <v-row class="mb-6" justify="center" align="center" no-gutters>
          <v-col lg="8">
            <v-card class="MainInfoCard">
              <v-card-text>
                <v-flex text-xs-center>
                  <v-col class="MainInfo text-center" xs-1 lg-4>
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
            </v-card>
          </v-col>
          <v-col lg="4">
            <v-img src="../assets/images/concretefinish.jpg" max-width="450px">
            </v-img>
          </v-col>
        </v-row>
      </v-flex>
    </v-div>
    <v-div>
      <v-flex text-xs-center>
        <v-row class="mb-6" justify="left" align="center" no-gutters>
          <v-col lg="8">
            <v-card class="MainInfoCard">
              <v-card-text>
                <v-flex text-xs-center>
                  <v-col class="MainInfo text-center" xs-1 lg-4>
                    <div class="max-width: 100%">
                      <h3 class="orange--text">
                        How Do I get Started?
                      </h3>
                    </div>
                  </v-col>
                </v-flex>
                <p class="CardText">
                  If you are a skilled worker available for work, it is as easy
                  as 1-2-3 to get started:
                </p>

                <ol class="CardText">
                  <li>Sign up for free.</li>
                  <li>Fill out a profile questionnaire and post it.</li>
                  <li>Wait for an employer to text or call you!</li>
                </ol>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col lg="4">
            <v-img src="../assets/images/concretetexture.jpg" max-width="450px">
            </v-img>
          </v-col>
        </v-row>
      </v-flex>

      <v-flex text-xs-center align-center>
        <v-row class="mb-6" justify="center" no-gutters>
          <v-col class="MainInfo text-center" xs-12>
            <div class="max-width: 100%">
              <h3 class=" PostTitle orange--text">
                Post your profile for free today and start working tomorrow!
              </h3>
            </div>
          </v-col>
        </v-row>
      </v-flex>
    </v-div>
  </container>
</template>

<script>
export default {
  name: "WorkersPage"
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
