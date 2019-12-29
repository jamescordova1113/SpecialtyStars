<template>
    <v-container class="my-6">
        <v-row justify="space-around">
        <v-card class="mx-auto">
        <v-card-title class="headline deep-purple lighten-2" primary-title>Specialty Stars Sign up</v-card-title>
        <v-card-text>
        <v-form @submit.prevent="signup" class="card-panel">
            
            <v-text-field v-model="email" :rules="emailRules" label="E-mail:" required></v-text-field>
            <v-text-field type="password" v-model="password" label="Password:" required></v-text-field>
            <v-text-field v-model="alias" label="Alias:" required></v-text-field>
            <p class="red--text text-center" v-if="feedback">{{ feedback }}</p>
            <v-card-actions class="text-center">
            <div class="flex-grow-1"></div>
            <button type="submit" class="white--text v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light elevation-13 v-size--default deep-purple--text text--accent-4" null="true"><span class="v-btn__content"><span>Sign Me Up!</span></span></button>
            </v-card-actions>
        </v-form>
        </v-card-text>
        </v-card>
        </v-row>
    </v-container>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import firebase from 'firebase'
export default {
  name: 'Signup',
  data(){
    return{
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
    }
  },
  methods: {
    signup(){
      if(this.alias && this.email && this.password){
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if(doc.exists){
            this.feedback = 'This alias already exists'
          } else {
            // this alias does not yet exists in the db
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(cred => {
              ref.set({
                alias: this.alias,
                geolocation: null,
                user_id: cred.user.uid
              })
            }).then(() => {
              this.$router.push({name: 'Login'})
            })
            .catch(err => {
              this.feedback = err.message
            })
          }
        })
      } else {
        this.feedback = 'Please enter data in all fields'
      }
    }
  }
}
</script>