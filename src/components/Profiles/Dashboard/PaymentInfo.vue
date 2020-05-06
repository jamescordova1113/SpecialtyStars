<template>
  <!-- <div>
    <center>
      <v-row>
        <v-col cols="2"> </v-col>
        <v-col class="text-center xs-8" fluid>
          <h3 class=" text-center">Membership is a monthly subscription</h3>
          <p class=" text-center">
            Payments are securley processed using Stripe
          </p>
          <p class="text-center">
            The Employer Membership gives you Direct contact to workers via
            contact if of whatsapp for just $10 a month for unlimited contacts.
            No refunds on current month unsubcribe per request see<a
              href="https://www.iubenda.com/terms-and-conditions/39705548"
              >Terms and Conditions</a
            >for more information.
          </p>
        </v-col>
        <v-col cols="2"> </v-col>
      </v-row>
      <form action="/process-payment" method="POST">
        <stripe-checkout
          stripe-key="pk_test_En90iQenaRlLeWqZQhKA5Urs00CcluZKIw"
          product="product"
        >
          token={this.onToken}
        </stripe-checkout>
      </form>
    </center>
  </div> -->
  <div class="paymentCard">
    <v-row>
      <v-col cols="xs-12">
        <h3 class=" text-center">Membership is a monthly subscription</h3>
        <p class=" text-center">Payments are securley processed using Stripe</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="xs12">
        <section class="row payment-form text-center">
          <v-col cols="2"> </v-col>
          <v-col cols="xs-12 md-8">
            <h5 class="#e0e0e0 grey lighten-4">
              Employer Subscription unlimited contacts for
              <span class="right">${{ amount }}</span>
            </h5>

            <div class="error red center-align white-text">
              {{ stripeValidationError }}
            </div>

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
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      stripeObject: {
        id: "sub_H7bCnnzXV0SDOd",
        object: "subscription",
        collection_method: "charge_automatically",
        customer: "",
        items: {
          object: "list",
          data: [
            {
              id: "si_H7bCWOejHSRseu",
              object: "subscription_item",
              billing_thresholds: null,

              plan: {
                id: "plan_H7BLWIvX5Bxn7s",
                object: "plan",
                active: true,
                aggregate_usage: null,
                amount: 1000,
                amount_decimal: "1000",
                billing_scheme: "per_unit",
                currency: "usd",
                interval: "month",
                nickname: "Monthly employer",
                product: "prod_H7BKITXxHj7FR1",
              },
              quantity: 1,
              subscription: "sub_H7bCnnzXV0SDOd",
            },
          ],
        },
        plan: {
          id: "plan_H7BLWIvX5Bxn7s",
          object: "plan",
          active: true,
        },
      },
      isPaidEmployer: true,
      Users: {
        user_id: null,
      },

      stripe: null,
      cardNumberElement: null,
      cardExpiryElement: null,
      cardCVCElement: null,
      stripeValidationError: "",
      amount: 10,
    };
  },
  firestore() {
    return {
      Users: db.collection("users").orderBy("createdAt"),
    };
  },

  mounted() {
    this.stripe = Stripe("pk_test_En90iQenaRlLeWqZQhKA5Urs00CcluZKIw");
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
      this.stripe.createToken(this.cardNumberElement).then((result) => {
        if (result.error) {
          this.stripeValidationError = result.error.message;
        } else {
          var stripeObject = {
            subscription: "sub_H7bCnnzXV0SDOd",
            id: "plan_H7BLWIvX5Bxn7s",
            amount: 1000,
            source: result.token,
          };
          this.saveDataToFireStore(stripeObject);
        }
      });
    },
    saveDataToFireStore(stripeObject) {
      console.log("Amount = " + stripeObject.amount);
      const db = firebase.firestore();
      const chargesRef = db.collection("users");
      const pushId = chargesRef.doc(firebase.auth().currentUser.uid).id;
      db.collection("charges")
        .doc(pushId)
        .set(stripeObject);
      chargesRef.doc(pushId).onSnapshot((snapShot) => {
        const charge = snapShot.data();
        if (charge.error) {
          alert(charge.error);
          chargesRef.doc(pushId).delete();
          return;
        }
        if (charge.status && charge.status == "Payment succeeded") {
          alert(charge.status);
        }
      });
    },
  },
};
</script>

<style scoped>
body {
  display: grid;
  place-items: center;
  height: auto;
}
.payment-form {
  max-width: 500px;
  margin: 20px auto;
  border: 1px solid #ececec;
  display: flex;
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
