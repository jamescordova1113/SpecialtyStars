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
        <v-toolbar-title><h1>Forum Board</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>

    <div class="NameForm mt-10">
      <v-card>
        <ul>
          <li>
          <router-link to="/Forum/QandAForum">
            <v-btn text light class="forums">Question and Answer</v-btn>
          </router-link>
          </li>
          <li>
          <router-link to="/Forum/GeneralForum">
            <v-btn text light class="forums">General</v-btn>
          </router-link>
          </li>
          <li>
          <router-link to="/Forum/ISOForum">
            <v-btn text light class="forums">In Search of</v-btn>
          </router-link>
          </li>
        </ul>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "ForumBoard",
  data() {
    return {
      name: ""
    };
  },

  methods: {
    enterChat() {
      console.log(this.name);
    }
  }
};
</script>

<style scoped>
.forums {
  margin: 10px;
}
</style>
