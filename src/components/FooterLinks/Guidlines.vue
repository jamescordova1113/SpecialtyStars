<template>
  <v-container>
    <v-row class="class guidlines">
      <v-col cols="">
        <center>
          <h2>
            <span class="helpTitle grey--text text--darken-3">
              Community Guidelines
            </span>
          </h2>

          <v-card class="guidelinesCard">
            <ol class="profileHelp">
              <li class="helpText">
                Worker profiles are for individuals not companies. If you are a
                worker but you work with a Crew of guys, that’s fine but you
                have to list only your skills in your profile.
              </li>
              <li class="helpText">
                Workers may only have one profile per specialty. Workers can
                change their specialty and Post a new profile at any time. If a
                worker’s strength is a variety of things, they can post a
                Profile under handyman or general construction.
              </li>
              <li class="helpText">
                Contact is initiated by employers and must be work related. All
                correspondence between Users is to be work related and nothing
                else. Any contact not related to work is considered Harassment
                and should be reported to Admin.
              </li>
            </ol>
          </v-card>
        </center>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: "Our Guildlines for using Specialty Stars!",
    titleTemplate: "Specialty Stars",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },
  name: "Guidlines",
};
</script>

<style scoped>
.guidelinesCard {
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 720px;
}
</style>
