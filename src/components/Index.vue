<template>
  <div class="home">
    <Jumbotron msg="Welcome to Your Vue.js App" />
    <Whatis />
    <HowImg />
    <HowText />
  </div>
</template>

<script>
// @ is an alias to /src

import Jumbotron from "@/components/Jumbotron.vue";
import Whatis from "@/components/Whatis.vue";
import HowImg from "@/components/HowImg.vue";
import HowText from "@/components/HowText.vue";


export default {
  name: "home",
  components: {
    Jumbotron,
    Whatis,
    HowImg,
    HowText
  }
};
</script>