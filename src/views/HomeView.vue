<template>
  <v-container>
    <Customers />
    <General />
    <Reviews />
  </v-container>
</template>
<script setup>
import Reviews from '@/components/homePage/Reviews/Reviews.vue';
import General from '@/components/homePage/General/General.vue';
import Customers from '@/components/homePage/Customers/Customers.vue';
</script>
