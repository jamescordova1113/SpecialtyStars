<template>
  <v-footer
    dark
    padless
  >
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
          <v-icon size="24px" @click="clickSocial(icon.url)">{{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Check out our Social Media Channels!  Become part of the Specialty Stars Community.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Specialty Stars</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    name: 'S3Footer',
    data: () => ({
      icons: [
        {name:'fab fa-facebook', url:'https://www.facebook.com'},
        {name:'fab fa-twitter', url:'https://www.twitter.com'},
        {name:'fab fa-medium', url:'https://medium.com'},
        {name:'fab fa-linkedin', url:'https://www.linkedin.com'},
        {name:'fab fa-instagram', url:'https://www.instagram.com'},
      ],
    }),
    methods: {
      clickSocial(url) {
        window.open(url, "_blank"); 
      }
    }
  }
</script>