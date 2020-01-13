import firebase from 'firebase'
// import firestore from '/firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDqRa3O0YBOiJWIcmdBTyo5qhSYBrxf40E",
    authDomain: "specialtystars.firebaseapp.com",
    databaseURL: "https://specialtystars.firebaseio.com",
    projectId: "specialtystars",
    storageBucket: "specialtystars.appspot.com",
    messagingSenderId: "876655856558",
    appId: "1:876655856558:web:32bcb997948ca0df15563f",
    measurementId: "G-P43CDSNW7Q"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  let specilistRef = db.ref('specialistProfile')

  export default firebaseApp.firestore()