<template>
  <div class="jumbo" color="primary" dark>
    <v-row class="mb-5" justify="center" no-gutters>
      <v-col cols="12">
        <h1 class="text-center mb-10">
          SPECIALTYSTARS.COM IS THE BEST LABOR RESOURCE FOR WORKERS AND
          EMPLOYERS!
        </h1>
        <div style="text-align:center">
          <button v-on:click="playPause()">Pause</button>
          <center>
            <video id="video1" width="1024" height="480" autoplay>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/specialtystars.appspot.com/o/Videos%2FInVideo___Specialty_Starspprenderfs_1583684575738.mp4?alt=media&token=2d5bbc01-e594-42e4-a2d4-43ecfdc60c1b"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </center>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-10" justify="center" align="center" no-gutters>
      <v-col cols="8">
        <h1 class="text-center">
          SIGN UP FOR FREE TODAY AND START WORKING TOMORROW!
        </h1>
      </v-col>
    </v-row>
    <div class="buttons text-center">
      <router-link to="/WorkersPage">
        <v-btn class="ma-2" tile color="primary lighten-3">
          I'm looking for work
        </v-btn>
      </router-link>
      <router-link to="/NeedWorkers">
        <v-btn class="ma-2" tile color="primary lighten-3">
          I'm looking for workers
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    playPause() {
      var myVideo = document.getElementById("video1");
      if (myVideo.paused) myVideo.play();
      else myVideo.pause();
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
.buttons {
  margin-bottom: 20px;
}
</style>
