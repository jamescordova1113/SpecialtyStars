<template>
  <v-container>
    <v-row class="class guidlines">
      <v-col cols="">
        <center>
          <h2 class="helpTitle">
            <span class="helpTitle grey--text text--darken-3 text-center">
              Help Center
            </span>
          </h2>
        </center>
        <v-card class="guidlinesCard">
          <h3> General info </h3>
          <ol class="profileHelp">
            <li class="helpText">
              <a> Get Started </a>
            </li>
            <li class="helpText">
            <a>How do  I post a profile? </a>
            </li>
            <li class="helpText">
              <a>How do  I reset my password? </a>
            </li>
            <li class="helpText">
               <a>How do  I managae my account? </a>
            </li>
            <li class="helpText">
              <a>How do  I remove my account? </a>
            </li>
            <li class="helpText">
              <a>How do  become and employer or worker? </a> you can have two account one worker and one employer (You must use seperate email addresses)
            </li>
            <li class="helpText">
              <a>How do  Contact Specialty Stars </a>
            </li>
          </ol>
        </v-card>
       
        <v-card class="guidlinesCard">
          <router-link :to="{ name: 'Tips' }"> <h3> Tips for Success </h3> </router-link>
        </v-card>
         <v-card class="guidlinesCard">
          <h3> Billing Questions </h3>
          <ol class="profileHelp">
            <li class="helpText">
            <a>How do  I set up my payment info? </a>
            </li>
            <li class="helpText">
              <a>How do  I cancel my subscription? </a>
            </li>
            <li class="helpText">
              <a>How do I upgrade my subscription? </a>
            </li>
          </ol>
         </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Specialty Stairs Help page for workers and employers",
    titleTemplate: "Specialty Stars",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
};
</script>

<style scoped>
.guidlinesCard {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
}
.helpTitle {
  padding: 15px;
}
</style>
