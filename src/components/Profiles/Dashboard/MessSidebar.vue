<template>
    <div class="container-fluid">
      <v-row class="row">
        <v-col class="md-4 sidebar">
          <h2 class="text-dark">
            Message Dashboard
          </h2>
          <span class="name">
            {{ user.alias }}
          </span>
        </v-col>
        <div class="col-md-8 content">
          Messages
        </div>

      </v-row>
    </div>
</template>

<script>
import db from "@/./firebase/init";

export default {
  name: "Sidebar",
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  beforeCreate() {
    // fetch data from firestore
    db.collection("users")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let user = doc.data();
          user.id = doc.id;
          this.users.push(user);
        });
      });
  }
}
</script>