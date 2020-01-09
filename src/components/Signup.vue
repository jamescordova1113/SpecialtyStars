<template>
  <div>
    <SignupWorkers />
    <SignupEmployer />
  </div>
</template>

<script>
import firebase from "firebase";
import SignupWorkers from "@/components/SignupWorkers";
import SignupEmployer from "@/components/SignupEmployer";

export default {
  name: "Signup",
  components: {
    SignupWorkers,
    SignupEmployer
  },
  beforeCreate() {
    firebase
      .auth()
      .signInAnonymously()
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('ErrorCode: ' + errorCode +'\n' + 'ErrorMessage: ' + errorMessage)
      });
  }
};

</script>