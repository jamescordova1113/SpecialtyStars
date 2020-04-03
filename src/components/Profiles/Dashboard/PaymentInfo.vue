<template>
  <v-container>
    <StripeCheckout />
    <StripeElements />
  </v-container>
</template>

<script>
import StripeCheckout from '../../../components/Checkout';
import StripeElements from '../../../components/Elements';
export default {
  name: 'PaymentInfo',
  components: {
    StripeCheckout,
    StripeElements
  }
}
</script>
