<template>
  <div class="jumbo" color="primary" dark>
    <v-row class="mb-5" justify="center">
      <v-col cols="12">
        <h1 class="text-center mb-10 hidden-md-and-down">
          SPECIALTYSTARS.COM IS THE BEST LABOR RESOURCE FOR WORKERS AND
          EMPLOYERS!
        </h1>
        <h3 class="text-center mb-10 hidden-lg-and-up">
          SPECIALTYSTARS.COM IS THE BEST LABOR RESOURCE FOR WORKERS AND
          EMPLOYERS!
        </h3>
      </v-col>
    </v-row>
    <v-row class="align-center">
      <v-col cols="xs-12 md-4">
        <div style="text-align:center" class="justify-center">
          <img
            class="ml-5 "
            src="https://firebasestorage.googleapis.com/v0/b/specialtystars.appspot.com/o/Jumbo%20icons%2Fhowto1.png?alt=media&token=f1c9dbec-9c96-4a6d-8433-9be993f70d94"
            width="400"
          />
        </div>
      </v-col>
      <v-col cols="xs-12 md-4">
        <div style="text-align:center" class="justify-center">
          
          <button v-on:click="playPause()">Pause</button>
          <center>
            <video id="video1" width="380" autoplay>
              <source
                src="https://firebasestorage.googleapis.com/v0/b/specialtystars.appspot.com/o/Videos%2FSpecialty%20Stars%20version%204-4-20.mp4?alt=media&token=79f13071-aa13-4ee6-9929-a1aebd802466"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </center>
        </div>
      </v-col>
      <v-col cols="xs-12 md-4">
        <div style="text-align:center" class="justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/specialtystars.appspot.com/o/Jumbo%20icons%2Fhowto2.png?alt=media&token=67bd0231-0d7d-4b10-a399-f052cb13204b"
            width="400"
          />
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-10" justify="center" align="center" no-gutters>
      <v-col cols="xs-12">
        <div style="text-align:center" class="justify-center">
        <h1 class="text-center">
          SIGN UP FOR FREE TODAY AND START WORKING TOMORROW!
        </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
     <v-col cols="xs-12">
      
            <div style="text-align:center" class="justify-center">

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
     </v-col>
    </v-row>
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
