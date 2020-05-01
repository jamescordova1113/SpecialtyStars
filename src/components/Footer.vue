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
            <v-col cols="5">
              <h2 class="hidden-lg-and-up">Community</h2>
              <h1 class="hidden-md-and-down">Community</h1>
              <router-link :to="{ name: 'Guidlines' }">
                <span> GUIDELINES </span>
              </router-link>
              <v-spacer />
              <router-link :to="{ name: 'Events' }">
                <span> EVENTS </span>
              </router-link>
              <v-spacer />
              <router-link :to="{ name: 'SuperStars' }">
                <span> SUPER STARS </span>
              </router-link>
              <v-spacer />

              <h2 class="hidden-lg-and-up">Company</h2>
              <h1 class="hidden-md-and-down">Company</h1>
              <router-link :to="{ name: 'Advertising' }">
                <span> ADVERTISING </span>
              </router-link>
              <v-spacer />
              <router-link :to="{ name: 'Press' }">
                <span> PRESS </span>
              </router-link>
              <v-spacer />
              <router-link :to="{ name: 'JoinTheTeam' }">
                <span> JOIN THE TEAM</span>
              </router-link>
              <v-spacer />
            </v-col>
            <v-col cols="2"> </v-col>
            <v-col cols="5">
              <h2 class="hidden-lg-and-up">Help</h2>
              <h1 class="hidden-md-and-down">Help</h1>
              <router-link to="../Help">
                <span> HELP CENTER </span>
              </router-link>
              <v-spacer />

              <v-spacer />
              <router-link :to="{ name: 'Resources' }">
                <span> RESOURCES </span>
              </router-link>
              <v-spacer />
              <router-link :to="{ name: 'Safety' }">
                <span> SAFTEY </span>
              </router-link>
              <v-spacer />

              <h2>
                <h2 class="hidden-lg-and-up">Legal</h2>
                <h1 class="hidden-md-and-down">Legal</h1>
              </h2>

              <a
                text
                small
                href="https://www.iubenda.com/terms-and-conditions/39705548"
                class="iubenda-white iubenda-embed"
                title="Terms and Conditions "
                ><span> TERMS AND CONDITIONS</span>
              </a>

              <v-spacer />

              <a
                text
                small
                href="https://www.iubenda.com/privacy-policy/39705548"
                class="iubenda-white no-brand iubenda-embed"
                title="Privacy Policy"
                ><span>PRIVACY POLICY</span>
              </a>

              <v-spacer />

              <a
                text
                small
                href="https://www.iubenda.com/privacy-policy/39705548/cookie-policy"
                class="iubenda-white no-brand iubenda-embed"
                title="Cookie Policy"
                ><span>COOKIE POLICY</span>
              </a>
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
      {
        name: "fab fa-facebook",
        url: "https://www.facebook.com/specialtystars",
      },
      // { name: "fab fa-twitter", url: "https://www.twitter.com" },
      // { name: "fab fa-tumblr", url: "https://tumblr.com" },
      // { name: "fab fa-linkedin", url: "https://www.linkedin.com" },
      // { name: "fab fa-instagram", url: "https://www.instagram.com" },
    ],
  }),
  methods: {
    clickSocial(url) {
      window.open(url, "_blank");
    },
  },
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
  font-size: 0.6rem;
  color: white;
}
a {
  color: inherit;
}
NavLink {
  color: white;
}
</style>
