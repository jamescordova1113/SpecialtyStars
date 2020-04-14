const functions = require('firebase-functions');
// const cors = require('cors')({ origin: true });
// const stripe = require('stripe')(functions.config().stripe.token)
// exports.paystripe = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     const thisReqMethod = req.method
//     let thisIsTheMessage = 'Make a payment with Stripe!'
    
//     if (thisReqMethod === 'POST') {
//       let token = req.body.token
//       let amount = req.body.amount
//       stripe.charges.create({
//         amount: 1000,
//         currency: "usd",
//         description: "Employer Member",
//         source: token,
//       })
    // .then(function (result) {
    //     res.status(200)
    //       .send('Your payment was accepted');
    //   }).catch(function () {
    //     res.status(200).send('There was an error.');
    //   });
    // } else {
    //   res.status(200).send(thisIsTheMessage);
    // }
//   });
// });
// exports.WzupWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
