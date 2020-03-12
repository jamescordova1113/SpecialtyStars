<template>
  <v-container>
    <v-toolbar
      color="primary lighten-2"
      dark
      justify="center"
      max-width="450px"
      flat
    >
      <v-row justify="space-around">
        <v-toolbar-title><h1>Q and A</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card width="1024px" height="500px">
       <h3 inset v-if="!user.isLoggedIn"
          >Login to view Forum</h3
        >
        <div inset v-if="user.isLoggedIn">
          <p> forum stuff </p>
          </div
        > </v-card>
  </v-container>
</template>

<script>
export default {
  name: "QandAForum",
  data() {
    return {

    }
  },
computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>

</style>
