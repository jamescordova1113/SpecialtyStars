<template>
  <div>
    <SignupWorkers />
    <SignupEmployer />
  </div>
</template>

<script>

import SignupWorkers from "@/components/SignupWorkers";
import SignupEmployer from "@/components/SignupEmployer";


export default {
  name: "Signup",
  components: {
    SignupWorkers,
    SignupEmployer
  }
};

</script>