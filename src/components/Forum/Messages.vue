<template>
  <div>Messages</div>
</template>

<script>
import SingleMessage from "./SingleMessage";
import MessageForm from ".MessageForm";
import { mapGetters } from "vuex";

export default {
  name: "Messages",
  coponents: { singleMessage, MessageForum },
  data() {
    return {
      privateMessageRef: firebase.database().ref("privateMessages"),
      messages: [],
      channel: "",
    };
  },
  computed: {
    ...mapGetters(["currentChannel", "currentUser", "isPrivate"]),
  },

  watch: {
    currentChannel: function() {
      //if current channel changes watch for it's messages
      this.messages = [];
      this.addListeners();
      this.channel = this.currentChannel;
    },
  },
  methods: {
    addListeners() {
      // listen to child added events on current channel
      this.messageRef
        .child(this.currentChannel.id)
        .on("child_added", (snapshot) => {
          this.message.push(snapshot.val());

          // scroll to the top
          this.$nextTick(() => {
            $("html, body").scrollTop($(document).height());
          });
        });
    },
  },
};
</script>
