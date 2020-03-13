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

      <v-flex>
        <v-row class="justify-center">
          <v-col cols="3">
            <h2>Community</h2>
            <router-link to="../FooterLinks/Guidlines">
              <v-btn text small>
                Guidlines
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/Events">
              <v-btn text small>
                Events
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/SuperStars">
              <v-btn text small>
                Super Stars
              </v-btn>
            </router-link>
            <v-spacer />

            <h2>Company</h2>
            <router-link to="../FooterLinks/Advertising">
              <v-btn text small>
                Advertising
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/Press">
              <v-btn text small>
                Press
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/JoinTheTeam">
              <v-btn text small>
                Join The Team
              </v-btn>
            </router-link>
            <v-spacer />
          </v-col>
          <v-col cols="2"> </v-col>
          <v-col cols="3">
            <h2>Help</h2>
            <router-link to="../Help">
              <v-btn text small>
                Help Center
              </v-btn>
            </router-link>
            <v-spacer />

            <v-spacer />
            <router-link to="../FooterLinks/Resources">
              <v-btn text small>
                Resources
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/Safety">
              <v-btn text small>
                Safety
              </v-btn>
            </router-link>
            <v-spacer />

            <h2>Legal</h2>
            <router-link to="../FooterLinks/TermsOfUse">
              <v-btn text small>
                Terms of Use
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/PrivacyPolicy">
              <v-btn text small>
                Privacy Policy
              </v-btn>
            </router-link>
            <v-spacer />
            <router-link to="../FooterLinks/CookiePolicy">
              <v-btn text small>
                Cookie Policy
              </v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-flex>

      <v-divider></v-divider>

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
