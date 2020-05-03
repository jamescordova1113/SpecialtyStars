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
          <router-link to="DashBoard/MyInfo">
            <v-btn text small>
              My Info
            </v-btn>
          </router-link>
          <v-spacer />
          <router-link to="DashBoard/PaymentInfo">
            <v-btn text small>
              Payment Info
            </v-btn>
          </router-link>
          <v-spacer />
          <router-link to="SpecialistProfiles">
            <v-btn text small>
              Find a Worker
            </v-btn>
          </router-link>
          <v-spacer />
          <router-link to="/Help">
            <v-btn text small>
              Help
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
        <v-card class="contacts">
          <v-card-text
            ><h3 class="mb-10 text-center">My Contacts</h3></v-card-text
          >
          <br />
          <v-row>
            <v-col>
              <div v-for="contact in contacts" :key="contact.id">
                <v-card class="ml-3">
                  <p class="ml-2 pt-2">
                    Name: <span class="contactName">{{ contact.alias }}</span>
                  </p>

                  <p class="ml-2">Email: {{ contact.email }}</p>

                  <p class="ml-2">Phone: {{ contact.phone }}</p>

                  <p class="ml-2 pb-2">Specialty: {{ contact.specialty }}</p>
                </v-card>
              </div>
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
  metaInfo: {
    title:
      "Specialty Stairs Employer Dashboard. Everything you need to find and hire a worker for home owners and contactors.",
    titleTemplate: "Specialty Stars",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  name: "EmployerDashBoard",
  data() {
    return {
      contacts: [],
      user_id: null,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    var user_id = firebase.auth().currentUser.uid;

    db.collection("Contacts")
      .doc(firebase.auth().currentUser.uid)
      .collection("contacts")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let contact = doc.data();
          contact.id = doc.id;
          this.contacts.push(contact);
        });
      });
  },
};
</script>

<style scoped>
.contactName {
  font-size: 1.4rem;
}
</style>
