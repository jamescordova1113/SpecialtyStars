<template>
  <v-container>
    <div v-if="!user.isEmployer">
      <h2> Please login as Employer </h2>
      <router-link to="../../Login">
        <v-btn class="primary lighten-2" tile dark> Login </v-btn>
      </router-link>
    </div>

    <div v-if="user.isEmployer"> 
      <v-row>
        <v-col cols="6">
      <v-card >
      <v-form class="ccForm">
        <v-label for="card-element">
          Credit or debit card
        </v-label>
        <div id="card-element">
          <!-- {{ strip.elements() }} -->
        </div>
        <!-- Used to display form errors. -->
    <div id="card-errors" role="alert"></div>
 
  <v-btn class="primary lighten-2" tile dark @click="submitPayment"> Submit </v-btn>
      </v-form>
      </v-card>
        </v-col>
        </v-row>
    </div>
     
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
var stripe = Stripe('pk_test_En90iQenaRlLeWqZQhKA5Urs00CcluZKIw');

// Create an instance of Elements.
// var elements = stripe.elements()
export default {
  name: "PaymentInfo",
data: {
          currentUser: null,
          sources: {},
          stripeCustomerInitialized: false,
          newCreditCard: {
            number: '4242424242424242',
            cvc: '111',
            exp_month: 1,
            exp_year: 2020,
            address_zip: '00000'
          },
          charges: {},
          newCharge: {
            source: null,
            amount: 2000
          }
         
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  // Stripe.setPublishableKey( /* TODO: add your stripe publishable key */ );
  //     var firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
  //     var firebaseAuthOptions = {
  //       callbacks: {
  //         signInSuccess: (currentUser, credential, redirectUrl) => { return false; },
  //         uiShown: () => { document.getElementById('loader').style.display = 'none'; }
  //       },
  //       signInFlow: 'popup',
  //       signInSuccessUrl: '/',
  //       signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID ],
  //       tosUrl: '/'
  //     };
  //     firebase.auth().onAuthStateChanged(firebaseUser => {
  //       if (firebaseUser) {
  //         document.getElementById('loader').style.display = 'none';
  //         app.currentUser = firebaseUser;
  //         app.listen();
  //       } else {
  //         firebaseUI.start('#firebaseui-auth-container', firebaseAuthOptions);
  //         app.currentUser = null;
  //       }
  //     })
      
  //       },
  //       ready: () => {
        },
  methods: {
// submitPayment() {
//   var form = document.getElementById('payment-form');
// form.addEventListener('submit', function(event) {
//   event.preventDefault();

//   stripe.createToken(card).then(function(result) {
//     if (result.error) {
//       // Inform the user if there was an error.
//       var errorElement = document.getElementById('card-errors');
//       errorElement.textContent = result.error.message;
//     } else {
//       // Send the token to your server.
//       stripeTokenHandler(result.token);
//     }
//   });
// });
// },

          listen: function() {
            firebase.firestore().collection('stripe_customers').doc(`${this.currentUser.uid}`).onSnapshot(snapshot => {
              this.stripeCustomerInitialized = (snapshot.data() !== null);
            }, () => {
              this.stripeCustomerInitialized = false;
            });
            firebase.firestore().collection('stripe_customers').doc(`${this.currentUser.uid}`).collection('sources').onSnapshot(snapshot => {
             let newSources = {};
              snapshot.forEach(doc => {
                const id = doc.id;
                newSources[id] = doc.data();
              })
              this.sources = newSources;
            }, () => {
              this.sources = {};
            });
            firebase.firestore().collection('stripe_customers').doc(`${this.currentUser.uid}`).collection('charges').onSnapshot(snapshot => {
            let newCharges = {};
             snapshot.forEach(doc => {
               const id = doc.id;
               newCharges[id] = doc.data();
             })
             this.charges = newCharges;
            }, () => {
              this.charges = {};
            });
          },
          submitNewCreditCard: function() {
            Stripe.card.createToken({
              number: this.newCreditCard.number,
              cvc: this.newCreditCard.cvc,
              exp_month: this.newCreditCard.exp_month,
              exp_year: this.newCreditCard.exp_year,
              address_zip: this.newCreditCard.address_zip
            }, (status, response) => {
              if (response.error) {
                this.newCreditCard.error = response.error.message;
              } else {
                firebase.firestore().collection('stripe_customers').doc(this.currentUser.uid).collection('tokens').add({token: response.id}).then(() => {
                  this.newCreditCard = {
                    number: '',
                    cvc: '',
                    exp_month: 1,
                    exp_year: 2017,
                    address_zip: ''
                  };
                });
              }
            });
          },
          submitNewCharge: function() {
            firebase.firestore().collection('stripe_customers').doc(this.currentUser.uid).collection('charges').add({
              source: this.newCharge.source,
              amount: parseInt(this.newCharge.amount)
            });
          },
          signOut: function() {
            firebase.auth().signOut()
          }
        }
      }

    </script>

<style scoped>
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
