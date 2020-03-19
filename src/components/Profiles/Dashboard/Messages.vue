<template>
  <v-container class="chat">
    <v-toolbar
      color="primary lighten-3"
      dark
      justify="center"
      max-width="450px"
      flat
    >
      <v-row justify="space-around">
        <v-toolbar-title><h1>Messages</h1></v-toolbar-title>
      </v-row>
    </v-toolbar>
    <v-card class="messages" v-chat-scroll>
      <!-- <h3 inset v-if="!user.isLoggedIn">Login to view Forum</h3>
      <div inset v-if="user.isLoggedIn"> -->
      <v-card-text>
        <div v-for="message in messages" :key="message.id">
          <v-card class="forumCard">
            <span class="orange--text">{{ message.alias }} </span>
            <span class="grey--text text--darken-3"
              >{{ message.content }}
            </span>
            <span class="time grey--text ml-2 ">{{ message.timestamp }}</span>
          </v-card>
          <br />
        </div>
        <!-- </div> -->
        
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "GeneralForum",
  components: {
  },
  data() {
    return {
      alias: null,
      messages: null,
      user_id: null,
      users: {
        alias: null,
        messages: null,
        user_id: null
      }
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    let ref = db.collection("Messages").orderBy("timestamp");
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            alias: doc.data().alias,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll")
          });
        }
      });
    });
  }
};
</script>

<style>
.forumCard {
  margin: 5px;
  padding: 15px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 0.8em;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
.messages::-webkit-scrollbar-track {
  background: orange;
}
.messages::-webkit-scrollbar-thumb {
  background: lightblue;
}
</style>
