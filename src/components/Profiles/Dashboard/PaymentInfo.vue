<template>
<div class="justify-center" justify="center">
    <section class="row payment-form" justify="center">
      
      <v-col cols="2">
</v-col>
<v-col cols="8">
        <h5 class="#e0e0e0 grey lighten-4">
            Employer Subscrition unlimited contacts
            <span class="right">$10 per month</span>
        </h5>

        <div class="error red center-align white-text"></div>

        <div class="col-12 card-element">
            <label>Card Number</label>
            <div id="card-number-element" class="input-value"></div>
        </div>

        <div class="col s6 card-element">
            <label>Expiry Date</label>
            <div id="card-expiry-element"></div>
        </div>

        <div class="col s6 card-element">
            <label>CVC</label>
            <div id="card-cvc-element"></div>
        </div>

        <div class="col s12 place-order-button-block">
            <v-btn class="btn col s12 primary lighten-2" tile dark>Place Order</v-btn>
        </div>
</v-col>
<v-col cols="2">
</v-col>
    </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      stripe: null,
      cardNumberElement: null,
      cardExpiryElement: null,
      cardCVCElement: null
    };
  },
  mounted: function() {
    this.stripe = Stripe("pk_test_En90iQenaRlLeWqZQhKA5Urs00CcluZKIw");
    this.createAndMountFormElements();
  },
  methods: {
    createAndMountFormElement() {
      var elements = this.stripe.elements();

      this.cardNumberElement = elements.create("cardNumber");
      this.cardNumberElement.mount("#card-number-element");

      this.cardExpiryElement = elements.create("cardExpiry");
      this.cardExpiryElement.mount("#card-expiry-element");

      this.cardCvcElement = elements.create("cardCvc");
      this.cardCvcElement.mount("#card-cvc-element");
    }
  }
};
</script>

<style>
.payment-form {
    max-width: 500px;
    margin: 20px auto;
    border: 1px solid #ececec;
}
.payment-form h5 {
    margin: 0;
    padding: 10px;
    font-size: 1.2rem;
}
.card-element {
    margin-top: 5px;
}
#card-number-element,
#card-expiry-element,
#card-cvc-element {
    background: white;
    padding: 12px;
    border: 1px solid #ececec;
}
.place-order-button-block {
    margin: 10px 0;
}
</style>
