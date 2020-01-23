<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
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

      <v-card-text class="white--text pt-0">
        Check out our Social Media Channels! Become part of the Specialty Stars
        Community.
      </v-card-text>
      <v-flex>
        <v-row class="justify-center">
          <v-col cols="3">
            <h2>Community</h2>
             <router-link to="../FooterLinks/Guidlines">
            <v-btn text>
              Guidlines
            </v-btn>
             </router-link>
            <v-spacer />
                         <router-link to="../FooterLinks/Events">

            <v-btn text>
              Events
            </v-btn>
                         </router-link>
            <v-spacer />
             <router-link to="../FooterLinks/SuperStars">

            <v-btn text>
              Super Stars
            </v-btn>
             </router-link>
            <v-spacer />

            <h2>Company</h2>
                         <router-link to="../FooterLinks/Advertising">

            <v-btn text>
              Advertising
            </v-btn>
                         </router-link>
            <v-spacer />
             <router-link to="../FooterLinks/Press">

            <v-btn text>
              Press
            </v-btn>
             </router-link>
            <v-spacer />
             <router-link to="../FooterLinks/JoinTheTeam">

            <v-btn text>
              Join The Team
            </v-btn>
             </router-link>
            <v-spacer />
          </v-col>
          <v-col cols="2"> </v-col>
          <v-col cols="3">
            <h2>Help</h2>
                         <router-link to="../FooterLinks/HelpCenter">

            <v-btn text>
              Help Center
            </v-btn>
                         </router-link>
            <v-spacer />

            <v-spacer />
                         <router-link to="../FooterLinks/Resources">

            <v-btn text>
              Resources
            </v-btn>
                         </router-link>
            <v-spacer />
             <router-link to="../FooterLinks/Safety">

            <v-btn text>
              Safety
            </v-btn>
             </router-link>
            <v-spacer />

            <h2>Legal</h2>
                         <router-link to="../FooterLinks/TermsOfUse">

            <v-btn text>
              Terms of Use
            </v-btn>
                         </router-link>
            <v-spacer />
             <router-link to="../FooterLinks/PrivacyPolicy">

            <v-btn text>
              Privacy Policy
            </v-btn>
             </router-link>
            <v-spacer />
             <router-link to="../FooterLinks/CookiePolicy">

            <v-btn text>
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
