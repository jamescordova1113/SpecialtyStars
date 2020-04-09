<template>
  <v-container>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="7">
        <h1 class="text-center">
          Employer Dashboard
        </h1>
      </v-col>
    </v-row>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-text><h3 class="text-center">My Account</h3></v-card-text>
          <router-link to="MyInfo">
            <v-btn text small>
              My Info
            </v-btn>
          </router-link>
          <v-spacer />
          <router-link to="PaymentInfo">
            <v-btn text small>
              Payment Info
            </v-btn>
          </router-link>
          <v-spacer />
          <br />
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="12"> </v-col>
    </v-row>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-text
            ><h3 class="mb-10 text-center">My Contacts</h3></v-card-text
          >
          <br />
          <v-row>
            <v-col>
              <v-card class="ml-3" width="170px">
                <div class="contacts" v-for="contact in contacts" :key="contact.id" >
                  <span> <p class="ml-2 pt-2">Name: {{ contact.name }}</p> </span>
                  <v-spacer />
                  <span> <p class="ml-2">Email: {{ contact.email }}</p> </span>
                  <v-spacer />
                  <span> <p class="ml-2">Phone: {{ contact.phone }}</p> </span>
                  <v-spacer />
                  <span> <p class="ml-2 pb-2">Specialty: {{ contact.specialty }}</p> </span>
                  <v-spacer />
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from "@/./firebase/init";
import firebase from "firebase";

export default {
  name: "EmployerDashBoard",
  data() {
    return {
      contacts: [],
      user_id: null
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    console.log(firebase.auth().currentUser.uid);
      db.collection("Contacts")
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .collection("contacts")
      .get()
      .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
        this.contact = doc.data();
        this.contact.id = doc.id;
        this.contacts.push(contact);
      });
    });
  },
};
</script>
