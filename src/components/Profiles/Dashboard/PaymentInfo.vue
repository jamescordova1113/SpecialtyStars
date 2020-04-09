<template>
<v-container>
  <div ref="card"></div>
  <v-btn class="primary lighten-2" tile dark @click="purchase">Purchase</v-btn>
</v-container>
</template>

<script>


export default {
  mounted: function () {
    card = elements.create('card');
    card.mount(this.$refs.card);
  },

  purchase: function () {

  let self = this;

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      self.hasCardErrors = true;
      self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
      return;
    }
let stripe = Stripe(`pk_test_En90iQenaRlLeWqZQhKA5Urs00CcluZKIw`),
    elements = stripe.elements(),
    card = undefined;
  });
}

};
</script>
