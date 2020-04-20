'use strict';

const functions = require('firebase-functions');
const stripe = require('stripe')('sk_test_iacpLjiiby0UAWEkRmfdtzkP00i7lHeKwN')

// exports.createStripeCharge = functions.firestore
//     .document('charges/{pushId}')
//     .onCreate(async (snap, context) => {
//     try {
//         const charge = {
//             amount : snap.data().amount * 100,
//             source: snap.data().source.id,
//             currency: 'cad'
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
// stripe.checkout.sessions.create(
//   {
//     success_url: 'https://example.com/success',
//     cancel_url: 'https://example.com/cancel',
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         name: 'Employer unlimited contacts',
//         description: 'Specialty Stars Subscription',
//         amount: 1000,
//         currency: 'usd',
//         quantity: 1,
//         subscription: si_H7bCWOejHSRseu
//       },
//     ],
//   },
//   function(err, session) {
//     // asynchronously called
//   }
// );

// function userFacingMessage(error) {
//     return error.type ? error.message : 'An error occurred, developers have been alerted';

// }
exports.WzupWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
