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
      <v-col xs-1 lg-8>
        <form class="col-10" id="eventForm">
          <v-text-field
            type="title"
            v-model="Event"
            :error-messages="eventErrors"
            :counter="20"
            label="Message Title"
            required
            @input="$v.event.$touch()"
            @blur="$v.event.$touch()"
          ></v-text-field>
          <v-text-field
            type="address"
            v-model="Loaction"
            :error-messages="locationErrors"
            :counter="20"
            label="Location and Specialty"
            required
            @input="$v.location.$touch()"
            @blur="$v.location.$touch()"
          ></v-text-field>
          <!-- <template>
            <v-container>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="true"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        type="start"
                        required
                        :value="computedDateFormattedMomentjs"
                        clearable
                        label="Start Date"
                        readonly
                        v-on="on"
                        @click:clear="date = null"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @change="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12" lg="6">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="true"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        type="end"
                        :value="computedDateFormattedMomentjs"
                        clearable
                        label="End Date"
                        readonly
                        v-on="on"
                        @click:clear="date = null"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @change="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
          </template> -->
          <v-textarea
            outlined
            name="input-7-4"
            label="Description of Event"
            value=""
          ></v-textarea>
          <template>
            <v-file-input label="Upload Picture for Event"></v-file-input>
          </template>

          <v-btn class="mr-4" @click="submit">submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
          <br />
        </form>
      </v-col>
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
