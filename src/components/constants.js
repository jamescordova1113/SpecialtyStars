export const STRIPE_CHECKOUT_URL = 'https://js.stripe.com';
var stripe = Stripe('pk_test_En90iQenaRlLeWqZQhKA5Urs00CcluZKIw')

export const SUPPORTED_LANGS = [
  'auto',
  'da',
  'de',
  'en',
  'es',
  'fi',
  'fr',
  'it',
  'ja',
  'nb',
  'nl',
  'pl',
  'pt',
  'sv',
  'zh'
];

export const SUPPORTED_SUBMIT_TYPES = [
  'auto', 
  'book', 
  'donate', 
  'pay'
];

export const BILLING_ADDRESS_COLLECTION_TYPES = [
  'required', 
  'auto'
];