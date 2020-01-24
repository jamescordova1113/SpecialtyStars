<template>
  <div class="jumbo" color="primary" dark>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="7">
        <h1 class="text-center">
          SPECIALTYSTARS.COM IS THE BEST LABOR RESOURCE FOR WORKERS AND
          EMPLOYERS!
        </h1>
        <div class="carousel">
          <v-carousel
            cycle
            height="350"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
    <v-row class="mb-0" justify="center" align="center" no-gutters>
      <v-col cols="8">
        <h1 class="text-center">
          SIGN UP FOR FREE TODAY AND START WORKING TOMORROW!
        </h1>
      </v-col>
    </v-row>
    <div class="text-center">
      <router-link to="/WorkersPage">
        <v-btn
          @click="setCookie('worker')"
          class="ma-2"
          tile
          color="primary lighten-3"
        >
          I'm looking for work
        </v-btn>
      </router-link>
      <router-link to="/NeedWorkers">
        <v-btn
          @click="setCookie('employer')"
          class="ma-2"
          tile
          color="primary lighten-3"
        >
          I'm looking for workers
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  },
  methods: {
    setCookie(userType) {
      if (userType == "employer") {
        document.cookie =
          'userType=employer; expires=Fri, 31 Dec 9999 23:59:59 GMT"';
      } else {
        document.cookie =
          "userType=worker; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      }
    }
  }
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
