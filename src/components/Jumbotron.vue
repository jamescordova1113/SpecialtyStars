<template>
  <div class="jumbo" color="primary" dark>
    <!-- <v-layout align-center> -->
    <v-row xs-2 justify="space-around">
      <v-col xs-1 lg-4>
        <v-img
          class="jumboImage mx-auto"
          max-width="400"
          src="@/assets/images/concretemix.jpg"
        />
      </v-col>
      <v-col xs-1 lg-4>
        <v-img
          class="jumboImage mx-auto"
          max-width="400"
          src="@/assets/images/pavers.jpg"
        />
      </v-col>
      <v-col xs-1 lg-4>
        <v-flex text-xs-center>
          <br />
          <div class="jumboText text-center ">
            <h3 class="display-3">
              What's your specialty?
            </h3>
            <br />
            <div class="text-center">
              <v-btn class="ma-2" tile color="orange" dark>
                Sign up for free
              </v-btn>
            </div>
          </div>
        </v-flex>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Jumbotron"
};
</script>

<style scoped>
.jumbo {
  margin-top: 30px;
}
.jumboImage {
  margin: 30px;
}
.jumboText {
  margin-right: 20px;
  margin-left: 20px;
  padding: 15px;
}
</style>
