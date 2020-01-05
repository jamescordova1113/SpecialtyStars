<template>
  <v-container class="profileTitle">
    <v-toolbar
      color="primary lighten-2"
      dark
      flat
      justify="center"
      max-width="450px"
    >
      <v-row justify="center">
        <v-toolbar-title><h3>Search for Workers</h3></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-row>
      <v-col>
        <v-card>
         <form class="form">
    <v-text-field
      v-model="name"
      v-validate="'required|max:10'"
      :counter="10"
      label="Name"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="city"
      label="City"
      data-vv-name="city"
      required
    ></v-text-field>
    <v-select
      v-model="select"
      v-validate="'required'"
      :items="items"
      label="Specialty"
      data-vv-name="select"
      required
    ></v-select>
    

    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
 
  import Vue from 'vue'
  import * as VeeValidate from 'vee-validate'

  Vue.use(VeeValidate)

  export default {
    $_veeValidate: {
      validator: 'new',
    }, 

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: [
      'Agricultural',
      'Air Conditioning',
      'Auto Paint & Body',
      'Auto Mechanics',
      'Auto Detailing',
      'Brick Pavers',
      'Brick & Block Masonry',
      'Carpentry (rough and finish)',
      'Cabinetry',
      'Construction Cleaning',
      'Concrete Cutting and Drilling',
      'Concrete Placing & Finishing',
      'Dishwashing',
      'Demolition',
      'Delivery/Driver',
      'Drywall',
      'Electrical',
      'Flooring',
      'Fence',
      'Fire & Security Alarm',
      'Fire Protection',
      'Glass & Windows',
      'General Construction',
      'Granite & Stone Fabrication',
      'Golf Course and Greens keeper',
      'Handyman',
      'Home Remodeling',
      'Housekeeping/ Maid service',
      'Irrigation/Sprinkler',
      'Insulation',
      'Janitorial',
      'Landscaping',
      'Marine',
      'Mechanical Systems',
      'Moving',
      'Painting',
      'Paving & Roadwork',
      'Pest Control',
      'Plumbing',
      'Pool Service',
      'Pool & Spa installation',
      'Roofing',
      'Stucco & Plastering',
      'Tile & Marble',
      'Tree Work',
      'Warehouse',
    ],
    checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address',
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters',
            // custom messages
          },
          select: {
            required: 'Select field is required',
          },
        },
      },
    }),

    mounted () {
      this.$validator.localize('en', this.dictionary)
    },

    methods: {
      submit () {
        this.$validator.validateAll()
      },
      clear () {
        this.name = ''
        this.city = ''
        this.select = null
        this.$validator.reset()
      },
    },
  }
</script>

<style scoped>
.form {
  margin: 20px;
}
</style>