'use strict';

const functions = require('firebase-functions');
const stripe = require('stripe')('sk_test_iacpLjiiby0UAWEkRmfdtzkP00i7lHeKwN')

exports.createSubscription = functions.https.onRequest(async (request, response) => {
    try {
        const snapshot = await  await snap.ref.set(response, {
            merge: true
        })
                    
        const snapval = snapshot.val();
        const customer = snapval.customer_id
        // List the customer's payment methods to find one to charge
        const paymentMethods = await stripe.paymentMethods.list({
            customer,
            type: "card"
        });
        // Create and confirm a PaymentIntent with the order amount, currency, 
        // Customer and PaymentMethod ID

        let paymentIntent = stripe.subscriptions.create(
  {
    customer: customer,
    items: [{plan: 'plan_H7BLWIvX5Bxn7s'}],
  },
  function(err, subscription) {
    // asynchronously called
  }
);
    } catch (err) {
        console.log("Unknown error occurred", err);
    }
});

  

// exports.createStripeCharge = functions.firestore
//     .document('charges/{pushId}')
//     .onCreate(async (snap, context) => {
//     try {
//         const charge = {
//             amount : snap.data().amount * 100,
//             source: snap.data().source.id,
//             currency: 'usd'
//         }
//         const idempotencyKey = context.params.pushId
//         const response = await stripe.charges.create(charge, {
//             idempotency_key: idempotencyKey
//         })

//         await snap.ref.set(response, {
//             merge: true
//         })

//     }  catch (error) {
//         await snap.ref.set({
//             error: userFacingMessage(error)
//         }, {
//             merge: true
//         })
//     }
// })

// function userFacingMessage(error) {
//     return error.type ? error.message : 'An error occurred, developers have been alerted';

// }


exports.WzupWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
