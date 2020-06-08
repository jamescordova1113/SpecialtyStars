const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
// const stripe = require("stripe")("sk_test_iacpLjiiby0UAWEkRmfdtzkP00i7lHeKwN");
// const admin = require("firebase-admin");
// const nodemailer = require("nodemailer");
// admin.initializeApp();
// //google account credentials used to send email
// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "specialtystars@gmail.com",
//     pass: "needpass from David",
//   },
// });
// exports.sendEmail = functions.firestore
//   .document("emails/{emailsId}")
//   .onCreate((snap, context) => {
//     const mailOptions = {
//       from: `***********`,
//       to: "specialtystars@gmail.com",
//       subject: "New Message",
//       html: `<h1>A Customer Contacted You</h1>
//                                 <p>
//                                    <b>Name: </b>${snap.data().name}<br>
//                                    <b>Email: </b>${snap.data().email}<br>
//                                    <b>Message: </b>${snap.data().message}<br>
//                                 </p>`,
//     };
//     return transporter.sendMail(mailOptions, (error, data) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log("Sent!");
//     });
//   });

// exports.createSubscription = functions.https.onRequest(
//   async (request, response) => {
//     try {
//       const snapshot = await await snap.ref.set(response, {
//         merge: true,
//       });

//       const snapval = snapshot.val();
//       const customer = snapval.customer_id;
//       // List the customer's payment methods to find one to charge
//       const paymentMethods = await stripe.paymentMethods.list({
//         customer,
//         type: "card",
//       });
//       // Create and confirm a PaymentIntent with the order amount, currency,
//       // Customer and PaymentMethod ID

//       let paymentIntent = stripe.subscriptions.create(
//         {
//           customer: customer,
//           items: [{ plan: "plan_H7BLWIvX5Bxn7s" }],
//         },
//         function(err, subscription) {
//           // asynchronously called
//           console.log("Unknown error occurred", err);
//           userFacingMessage(err);
//         }
//       );
//     } catch (err) {
//       console.log("Unknown error occurred", err);
//       userFacingMessage(err);
//     }
//   }
// );

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
//   return error.type
//     ? error.message
//     : "An error occurred, developers have been alerted";
// }

