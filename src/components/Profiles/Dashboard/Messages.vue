<template>
  <v-container class="container-fluid">
    <v-col class="col-md-3 sidebar">
    <Sidebar />
    </v-col>
    <v-col class="col-md-6 content">
    <v-card class="messages" min-height="500px" v-chat-scroll>
      <Messages />
      <!-- <h3 inset v-if="!user.isLoggedIn">Login to view Forum</h3>
      <div inset v-if="user.isLoggedIn"> -->
     
    </v-card>
    </v-col>
  </v-container>
</template>

<script>
import Messages from './MessagesFirebase/Messages'
import Sidebar from "./MessSidebar.vue"
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "GeneralForum",
  components: {
    Sidebar,
    Messages
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
  post() {
      var Filter = require("bad-words"),
        filter = new Filter();
      if (this.newMessage) {
        this.filteredMessage = filter.clean(this.newMessage);

        db.collection("genForum").add({
          content: this.filteredMessage,
          alias: this.users.alias,
          timestamp: Date.now(),
          user_id: this.users.user_id,
          email: this.users.email
        });
        this.newMessage = null;
      } else {
        this.feedback = "You Must enter a message in order to post one.";
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

<style scoped>
    .sidebar {
        width: 33.5%;
        display: block;
        float: left;
        position: fixed;
        height: 100%;
        background: rgb(255, 255, 255);
        padding-top: 2em;
        overflow: scroll;
    }
    .content {
        width: 66%;
        display: block;
        float: left;
        margin-left: 34%;
    }
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
