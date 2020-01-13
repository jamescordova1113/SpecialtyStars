<template>
  <container bg fill-height grid-list-md text-xs-center>
    <layout>
    <v-row justify="center" align="center" no-gutters>
      
      <v-flex xs3 class="main">
        <v-img src="../../assets/images/spec1.png" max-width="350px"> </v-img>
      </v-flex>

      <v-flex xs3 class="main">
        <h1>What's Your Specialty?</h1>
      </v-flex>
      <v-flex xs3 class="main">
        <v-img src="../../assets/images/spec2.png" max-width="350px"> </v-img>
      </v-flex>
    </v-row>
    <br />
    <v-row justify="center" align="center" no-gutters>
      <v-flex xs3>
        <v-list class="list">
          <li>Agricultural</li>
          <li>Air Conditioning</li>
          <li>Auto Paint & Body</li>
          <li>Auto Mechanics</li>
          <li>Auto Detailing</li>
          <li>Brick Pavers Brick & Block Masonry</li>
          <li>Carpentry (rough and finish)</li>
          <li>Cabinetry</li>
          <li>Construction Cleaning</li>
          <li>Cutting and Drilling</li>
          <li>Concrete Placing & Finishing</li>
          <li>Demolition</li>
          <li>Delivery/Driver</li>
          <li>Drywall</li>
          <li>Electrical</li>
        </v-list>
      </v-flex>
      <v-flex xs3>
        <v-list>
          
          <li>Flooring</li>
          <li>Fence</li>
          <li>Fire & Security Alarm</li>
          <li>Fire Protection</li>
          <li>Glass & Windows</li>
          <li>General Construction</li>
          <li>Granite & Stone Fabrication</li>
          <li>Golf Course and Greens keeper</li>
          <li>Handyman</li>
          <li> HVAC </li>
          <li>Home Remodeling</li>
          <li>Housekeeping/ Maid service</li>
          <li>Irrigation/Sprinkler</li>
          <li>Insulation</li>
          <li>Janitorial</li>
        </v-list>
      </v-flex>
      <v-flex xs3>
        <v-list>
          <li>Landscaping</li>
          <li>Marine</li>

          <li>Mechanical Systems</li>
          <li>Moving</li>
          <li>Painting</li>
          <li>Paving & Roadwork</li>
          <li>Pest Control</li>
          <li>Plumbing</li>
          <li>Pool Service</li>
          <li>Pool & Spa installation</li>
          <li>Roofing</li>
          <li>Stucco & Plastering</li>
          <li>Tile & Marble</li>
          <li>Tree Work</li>
          <li>Warehouse</li>
        </v-list>
      </v-flex>
    </v-row>
    </layout>
  </container>
</template>

<script>
export default {
  name: "WhatsYourSpec"
};
</script>

<style scoped>
.main {
  margin-top: 20px;
}
.text {
  display: inline-block;
}
.list {
  background: lightgrey;
}
</style>
