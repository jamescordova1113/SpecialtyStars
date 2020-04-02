<template>
<v-container>
   <div style="text-align:center">
          <button v-on:click="playPause()">Pause</button>
          <center>
            <video id="video1" height="350" autoplay>
              <source
               v-bind:src="`${port.video}`"
                type="video/mp4"
              />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </center>
        </div>
                     
                        <div
              class="form-group d-flex"
              v-for="(image, index) in port.images" :key="users.id"
            >
              <div class="img-wrapp">
                <img :src="image" alt="" width="80px" />
                      </div>
                        </div>
</v-container> 
</template>

<script>

import db from "@/firebase/init";
import firebase from "firebase";

export default {
  name: "WorkerPort",
  data() {
    return {
      users: [],
   
    users: {
        alias: null,
        user_id: null,
        isWorkerProfile: true,
        images: []
      },
  }
},

 beforeCreate() {
    // fetch data from firestore
    db.collection("specialistProfile")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let user = doc.data();
          user.id = doc.id;
          this.users.push(user);
        });
      });
  }
}
</script>