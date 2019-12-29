<template>
  <v-row xs-2>
    <v-flex text-xs-center>
    <v-col xs-1 lg-8>
      <v-card class="MainInfoCard">
        <v-card-text>
          <p class="CardText">
            Welcome to “Specialty Stars” a new and convenient resource for hard
            working people and their employers to connect. Specialty Stars is
            tailored for people in the Construction, Home services, and other
            labor generated industries. Hard working people can easily find work
            by showcasing their skills in an online profile, meanwhile,
            employers can browse those profiles and quickly find who they’re
            looking for. Whether you need work or you need workers, Specialty
            Stars connects you faster and easier than ever before. It’s free to
            sign up, and free to browse profiles, all from your phone. Sign up
            for free today!
          </p>
        </v-card-text>
      </v-card>
    </v-col>
    </v-flex>
    <v-flex text-xs-center>

    <v-col class="MainInfo text-center" xs-1 lg-4>
      <div class="max-width: 100%">
      <h3 class="orange--text">
        At Specialty Stars it is our mission to provide an easy to use online
        resource for employers and hardworking people to find each other!
      </h3>
      </div>
    </v-col>
    </v-flex>
  </v-row>
</template>

<script>
export default {
  name: "Whatis"
};
</script>

<style scoped>
.MainInfoCard {
  margin-left: 100px;
  margin-right: 100px;
}
.MainInfo {
  margin-top: 20px;
}
.CardText {
  margin-top: 15px;
  color: black;
}
</style>