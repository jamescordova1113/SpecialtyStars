<template class="form">
  <v-container class="contactCard">
    <v-toolbar color="orange" dark flat justify="center" max-width="450px">
      <v-row justify="center">
        <v-toolbar-title><h1>Contact Us</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="contactForm">
      <form class="col-12" id="contactForm">
        <v-row align="center" justify="center">
          <v-col cols="12" sm="10" md="6">
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="20"
              label="Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-textarea
              outlined
              name="input-7-4"
              label="Message"
              value=""
              required
            ></v-textarea>

            <v-btn class="mr-4" color="orange" tile dark @click="submit"
              >submit</v-btn
            >
            <v-btn color="orange" tile dark @click="clear">clear</v-btn>
          </v-col>
        </v-row>
      </form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ContactForm",
  computed: {
    config() {
      return this.$store.state.config;
    }
  }
};
</script>

<style scoped>
form {
  margin: 0px;
}
.contactForm {
  margin-top: 0px;
  padding-bottom: 50px;
}
</style>
