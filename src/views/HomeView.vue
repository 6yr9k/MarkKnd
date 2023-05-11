<template>
  <v-container>
    <div data-aos="fade-zoom-in">
      <Customers />
    </div>
    <div data-aos="fade-zoom-in">
      <General />
    </div>
    <div data-aos="fade-zoom-in">
      <Reviews />
    </div>
    <div data-aos="fade-zoom-in">
      <ContactForm />
    </div>
  </v-container>
</template>
<script setup>
import Reviews from '@/components/homePage/Reviews/Reviews.vue';
import General from '@/components/homePage/General/General.vue';
import Customers from '@/components/homePage/Customers/Customers.vue';
import ContactForm from '@/components/common/ContactForm/ContactForm.vue';
</script>
