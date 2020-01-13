<template>
  <div class="Messages container">
    <p>Message Board</p>
    <v-row>
      <v-col xs-1 lg-4>
        <div
          v-for="message in messages"
          class="field ingredient"
          :key="message.id"
        >
          <v-card class="myCard" color="#26c6da" dark max-width="400">
            <v-card-title>
              <v-icon large left>{{ myIcon }}</v-icon>
              <span class="title font-weight-light">{{
                message.location
              }}</span>
              <v-spacer></v-spacer>
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  v-bind:src="`${message.avatar}`"
                ></v-img>
              </v-list-item-avatar>
            </v-card-title>
            <v-card-text class="headline font-weight-bold"
              >"{{ message.comment }}"</v-card-text
            >
            <div class="text-center">
              <v-rating
                v-model="message.rating"
                half-increments
                readonly
                color="yellow"
              ></v-rating>
              <v-card-text class="subtitle"
                >Posted On: {{ message.posted }}</v-card-text
              >
            </div>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-content>
                  <v-list-item-title>{{ message.author }}</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">{{ message.likes }}</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">{{ message.shares }}</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
      <!-- <v-col xs-1 lg-8>
        <EventForm />
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
import db from "@/./firebase/init";
// import EventForm from "@/components/EventForm.vue";

export default {
  name: "MessageBoard",
  data() {
    return {
      messages: [],
      myIcon: "mdi-marker-check"
    };
  },
  methods: {},
  components: {
    // EventForm
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  beforeCreate() {
    // fetch data from firestore
    db.collection("Messages")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let message = doc.data();
          message.id = doc.id;
          this.messages.push(message);
        });
      });
  }
};
</script>

<style>
.myCard {
  margin: 10px;
}
</style>
