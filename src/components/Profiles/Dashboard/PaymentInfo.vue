<template>
  <div class="justify-center" justify="center">
    <section class="row payment-form" justify="center">
      <v-col cols="2"> </v-col>
      <v-col cols="8">
        <h5 class="#e0e0e0 grey lighten-4">
          Employer Subscrition unlimited contacts
          <span class="right">${{amount}}</span>
        </h5>

        <div class="error red center-align white-text">{{stripeValidationError}}</div>

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
          <v-btn
            class="btn col s12 primary lighten-2"
            tile
            dark
            @click="placeOrderButtonPressed"
            >Place Order</v-btn
          >
        </div>
      </v-col>
      <v-col cols="2"> </v-col>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data() {
        return {
            stripe: null,
            cardNumberElement: null,
            cardExpiryElement: null,
            cardCVCElement: null,
            stripeValidationError: "",
            amount:25
        };
    },
    mounted() {
        this.stripe = Stripe("pk_test_******************");
        this.createAndMountFormElements();
    },
    methods: {
        createAndMountFormElements() {
            var elements = this.stripe.elements();
            this.cardNumberElement = elements.create("cardNumber");
            this.cardNumberElement.mount("#card-number-element");
            this.cardExpiryElement = elements.create("cardExpiry");
            this.cardExpiryElement.mount("#card-expiry-element");
            this.cardCvcElement = elements.create("cardCvc");
            this.cardCvcElement.mount("#card-cvc-element");
            this.cardNumberElement.on("change", this.setValidationError);
            this.cardExpiryElement.on("change", this.setValidationError);
            this.cardCvcElement.on("change", this.setValidationError);
        },
        setValidationError(event) {
            this.stripeValidationError = event.error ? event.error.message : "";
        },
        placeOrderButtonPressed() {
            this.stripe.createToken(this.cardNumberElement).then(result => {
                if (result.error) {
                    this.stripeValidationError = result.error.message;
                } else {
                    var stripeObject = {
                        amount: this.amount,
                        source: result.token
                    };
                    this.saveDataToFireStore(stripeObject);
                }
            });
        },
        saveDataToFireStore(stripeObject) {
            const db = firebase.firestore()
            const chargesRef = db.collection("charges")
            const pushId = chargesRef.doc().id
            db.collection("charges").doc(pushId).set(stripeObject)
            chargesRef.doc(pushId).onSnapshot(snapShot => {
                 const charge = snapShot.data();
                        if (charge.error) {
                            alert(charge.error);
                            chargesRef
                            .doc(pushId)
                            .delete();
                            return;
                        }
                        if (charge.status && charge.status == "succeeded") {
                            alert(charge.status);
                        }
            })
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
