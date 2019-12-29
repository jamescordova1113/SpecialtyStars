<template>
  <v-layout fluid>
    <v-flex xs12 sm6 offset-sm3>
      <v-card class="aboutCard" max-width="750px">
        <v-layout row>
          <v-col align="center" justify="center">
            <v-flex xs12> </v-flex>
          </v-col>
        </v-layout>
        <v-card-title primary-title>
          <h3 class="headline mb-0">We are Specialty Stars,</h3>
        </v-card-title>
        <v-card-text>
          <p>Specialty Stars</p>
        </v-card-text>
        <v-card-actions>
          <router-link to="/Contact">
            <v-btn flat color="green" value="Contact">
              <span>Contact</span>
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style>
.aboutCard {
  margin-top: 30px;
}
.avat {
  padding: 10px;
  margin-top: 10px;
  content: centered;
}
</style>