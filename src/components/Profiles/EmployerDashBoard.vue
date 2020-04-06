<template>
  <v-container>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="7">
        <h1 class="text-center">
          Employer Dashboard
        </h1>
      </v-col>
    </v-row>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-text><h3 class="text-center">My Account</h3></v-card-text>
          <router-link to="../Profiles/Dashboard/MyInfo">
            <v-btn text small>
              My Info
            </v-btn>
          </router-link>
          <v-spacer />
          <router-link to="../Profiles/Dashboard/PaymentInfo">
            <v-btn text small>
              Payment Info
            </v-btn>
          </router-link>
          <v-spacer />
          <router-link to="../Profiles/Dashboard/Payment">
            <v-btn text small>
              Billing
            </v-btn>
          </router-link>
          <v-spacer />
          <br />
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="12">
      
      </v-col>
    </v-row>
    <v-row class="mb-5" justify="center" align="center" no-gutters>
      <v-col cols="12">
        <v-card>
          <v-card-text
            ><h3 class="mb-10 text-center">My Contacts</h3></v-card-text
          >
          <br />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "EmployerDashBoard"
};
</script>
