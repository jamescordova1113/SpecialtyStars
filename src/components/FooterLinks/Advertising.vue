<template>
  <v-container>
    <div class="text-center mt-10">
      <center>
        <h2>
          <span class="helpTitle grey--text text--darken-3 text-center">
            Advertising
          </span>
        </h2>
        <v-card class="advCard">
          <p>
            Thinking about advertising with Specialty Stars.com? Our users are a
            culturally Diverse group of hard-working people who log in an
            average of two times a day. Men and Women of all ages who perform
            the back breaking jobs of the South Florida community. You Can find
            plumbers, tile setters, landscapers, painters, car detailers and
            much more on our app! If you would like to find out more about
            advertising with us<router-link to="../Contact"
              >click here.
            </router-link>
          </p>
        </v-card>
      </center>
    </div>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Advertise on Specialty Stars!",
    titleTemplate: "Specialty Stars",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
};
</script>

<style scoped>
.advCard {
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 720px;
}
.elementsCard {
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 3px;
}
</style>
