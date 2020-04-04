<template>
<v-container>
  <div v-if="user.isWorker">
    <WorkerDashBoard />
  </div>
  <div v-if="user.isEmployer">
    <EmployerDashBoard />
  </div>
  </v-container>
</template>

<script>
import WorkerDashBoard from "../WorkerDashBoard"
import EmployerDashBoard from "../EmployerDashBoard"

export default {
  name: "DashBoard",
  components: {
    WorkerDashBoard,
    EmployerDashBoard
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>