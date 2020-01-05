<template>
  <v-row xs-2>
    <v-flex text-xs-center>
      <v-col xs-1 lg-8>
        <v-card class="MainInfoCard">
          <v-card-text>
            <v-flex text-xs-center>
              <v-col class="MainInfo text-center" xs-1 lg-4>
                <div class="max-width: 100%">
                  <h3 class="orange--text">
                    At Specialty Stars it is our mission to provide an easy to
                    use online resource for employers and hardworking people to
                    find each other!
                  </h3>
                </div>
              </v-col>
            </v-flex>
            <p class="CardText">
              Serving Miami Dade, Broward and Palm Beach Counties, Specialty
              Stars is a user- friendly website where workers post their skills
              and experience for free and potential employers view that
              information and hire who they like. Specialty Stars makes it
              faster and easier than ever to hire and be hired. If you have a
              smartphone, you will find a job! If you need workers, You need
              “Specialty Stars.”
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-flex>
    <v-flex text-xs-center>
      <v-col xs-1 lg-8>
        <v-card class="MainInfoCard">
          <v-card-text>
            <v-flex text-xs-center>
              <v-col class="MainInfo text-center" xs-1 lg-4>
                <div class="max-width: 100%">
                  <h3 class="orange--text">
                    What kinds of skilled workers can post on Specialty Stars?
                  </h3>
                </div>
              </v-col>
            </v-flex>
            <p class="CardText">
              From A to Z we have work for Agricultural, Auto Body and Paint,
              Auto Mechanics, Brick Pavers, Brick and Block Masonry, Car
              Detailing, Carpentry, Cabinetry, Construction Cleaning, Concrete
              Placing and Finishing, Concrete Cutting, Dishwashing, Demolition,
              Delivery Driver, Drywall, Electrical, Flooring, Fence work, Fire
              and Security alarm, Fire protection, Framing, Glass and Windows,
              General Construction, Granite and Stone fab, Golf Course and
              Greenskeeper, Handyman, Housekeeping, Irrigation and Sprinkler,
              Insulation, Janitorial, Landscaping, Marine, Mechanical Systems,
              Moving, Painting, Paving and Roadwork, Pest Control, Plumbing,
              Pool Service, Pool and Spa installation, Roofing, Stucco and
              Plastering, Tile and Marble, Tree Work, Warehouse.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-flex>
    <v-flex text-xs-center>
              <v-col class="MainInfo text-center" xs-1 lg-4>
                <div class="max-width: 100%">
                  <h3 class="orange--text">
                    Post your profile for free today and start working tomorrow!
                  </h3>
                </div>
              </v-col>
            </v-flex>
            <v-flex text-xs-center>
              <v-col class="MainInfo text-center" xs-12>
                <div class="max-width: 100%">
                   <router-link
          to="/WorkersPage"
          >
                  <v-btn class="mr-10" color="orange" dark tile> I need work
                  </v-btn>
                   </router-link>
                    <router-link
          to="/NeedWorkers"
          >
                  <v-btn color="orange" dark tile> I need worker
                  </v-btn>
                    </router-link>
                </div>
              </v-col>
            </v-flex>
            </v-row>
            </template>

<script>
export default {
  name: "HowText"
};
</script>

<style scoped>
.MainInfoCard {
  margin-left: 100px;
  margin-right: 100px;
}
.MainInfo {
  margin-top: 20px;
}
.CardText {
  margin-top: 15px;
  color: black;
}
</style>
