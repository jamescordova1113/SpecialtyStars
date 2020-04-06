<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="primary lighten-3 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, index) in icons"
          :key="index"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px" @click="clickSocial(icon.url)"
            >{{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>
<div no-gutter>
      <v-flex>
        <v-row class="justify-center">
          <v-col cols="4">
            <h2 class="hidden-md-and-up">Community</h2>
            <h1 class="hidden-md-and-down"> Community</h1>
            <router-link to="../FooterLinks/Guidlines">
              <v-btn text small>
               <span class="hidden-md-and-up"> Guidlines </span>
               <p class="hidden-md-and-down"> Guidlines </p>
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/Events">
              <v-btn text small>
               <span class="hidden-md-and-up"> Events</span>
               <p class="hidden-md-and-down"> Events </p>
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/SuperStars">
              <v-btn text small>
                <span class="hidden-md-and-up"> Super Stars </span>
               <p class="hidden-md-and-down"> Super Stars </p>
              </v-btn>
            </router-link>
            <v-spacer />

            <h2 class="hidden-md-and-up">Company</h2>
            <h1 class="hidden-md-and-down"> Company</h1>
            <router-link to="../FooterLinks/Advertising">
              <v-btn text small>
                <span class="hidden-md-and-up"> Advertising </span>
               <p class="hidden-md-and-down"> Advertising </p>
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/Press">
              <v-btn text small>
                <span class="hidden-md-and-up"> Press </span>
               <p class="hidden-md-and-down"> Press </p>
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/JoinTheTeam">
              <v-btn text small>
                <span class="hidden-md-and-up"> Join the Team</span>
               <p class="hidden-md-and-down"> Join the Team</p>
              </v-btn>
            </router-link>
            <v-spacer />
          </v-col>
          <v-col cols="2"> </v-col>
          <v-col cols="4">
            <h2 class="hidden-md-and-up">Help</h2>
            <h1 class="hidden-md-and-down"> Help</h1>
            <router-link to="../Help">
              <v-btn text small>
                <span class="hidden-md-and-up"> Help center </span>
               <p class="hidden-md-and-down"> Help center </p>
              </v-btn>
            </router-link>
            <v-spacer />

            <v-spacer />
            <router-link to="../FooterLinks/Resources">
              <v-btn text small>
                <span class="hidden-md-and-up"> Resources </span>
               <p class="hidden-md-and-down"> Resources </p>
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/Safety">
              <v-btn text small>
                <span class="hidden-md-and-up"> Safety</span>
               <p class="hidden-md-and-down"> Safety</p>
              </v-btn>
            </router-link>
            <v-spacer />

            <h2><h2 class="hidden-md-and-up">Legal</h2>
            <h1 class="hidden-md-and-down"> Legal</h1></h2>
            <router-link to="../FooterLinks/TermsOfUse">
              <v-btn text small>
                <span class="hidden-md-and-up"> Terms of Use</span>
               <p class="hidden-md-and-down"> Terms of Use</p>
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/PrivacyPolicy">
              <v-btn text small>
                <span class="hidden-md-and-up"> Privacy Policy </span>
               <p class="hidden-md-and-down"> Privacy Policy </p>
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/CookiePolicy">
              <v-btn text small>
               <span>  <span class="hidden-md-and-up"> Cookie Policy </span>
               <p class="hidden-md-and-down"> Cookie Policy </p></span>
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-flex>
</div>


      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Specialty Stars</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  name: "S3Footer",
  data: () => ({
    icons: [
      { name: "fab fa-facebook", url: "https://www.facebook.com" },
      { name: "fab fa-twitter", url: "https://www.twitter.com" },
      { name: "fab fa-tumblr", url: "https://tumblr.com" },
      { name: "fab fa-linkedin", url: "https://www.linkedin.com" },
      { name: "fab fa-instagram", url: "https://www.instagram.com" }
    ]
  }),
  methods: {
    clickSocial(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1rem;
}
span {
  font-size: .6rem;
}
</style>
