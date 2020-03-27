<template>
  <div>
    <!-- show single message -->
    <single-message> </single-message>
    <!-- message form -->
    <message-form> </message-form>
  </div>
</template>

<script>
import firebase from "firebase";
import SingleMessage from './SingleMessage'
import MessageForm from './MessageForm'
import {mapGetters} from 'vuex'

export default {
  name: 'Messages',
  components: {
    SingleMessage,
    MessageForm
  },
  data() {
    return {
      messagesRef: firebase.db().ref('messages'),
      messages: [],
      channel: ''
    }
  },
  computed: {
    ...mapGetters(["currentChannel"])
  },
  methods: {
    addListeners() {
      // listen to child added events on current channel
      this.messagesRef.child(this.currentChannel.id).on('child_added', (snapshot) => {
        this.messages.push(snapshot.val())
      })
    }
  }
}
</script>