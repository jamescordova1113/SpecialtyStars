<template>
  <div class="infoMain">
    <!-- <v-layout align-center> -->
    <v-row xs-2 justify="space-around">
      <v-col xs-1 lg-2>
        <v-img
          class="infoImage mx-auto"
          max-width="260"
          src="../../assets/images/landscaping.jpg"
        />
      </v-col>
      <v-col xs-1 lg-3>
        <v-img
          class="infoImage mx-auto"
          max-width="350"
          src="../../assets/images/roofing.jpg"
        />
      </v-col>
      <v-col xs-1 lg-2>
        <v-img
          class="infoImage mx-auto"
          max-width="260"
          src="../../assets/images/mudding.jpg"
        />
      </v-col>
      <v-col xs-1 lg-4>
        <v-flex text-xs-center>
          <br />
          <div class="infoText text-center ">
            <h3 class="display-3">
              Start working tomorrow!
            </h3>
            <br />
            <div class="text-center">
               <router-link
          to="/Signup"
          >
              <v-btn class="ma-2" tile color="orange" dark>
                Sign up for free
              </v-btn>
               </router-link>
            </div>
          </div>
        </v-flex>
      </v-col>
    </v-row>
  </div>
  
</template>

<script>
export default {
  name: "HowImg"
};
</script>

<style scoped>
.infoMain {
  margin-top: 0px;
}
.infoImage {
  margin: 30px;
}
.infoText {
  margin-right: 20px;
}
</style>