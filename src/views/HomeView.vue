<template>
  <main class="main">
    <div class="py-5" data-aos="fade-zoom-in"><Customers /></div>
    <div class="py-5" data-aos="fade-zoom-in"><BookNow /></div>
    <div class="py-5" data-aos="fade-zoom-in"><General /></div>
    <div class="py-5" data-aos="fade-zoom-in"><Reviews /></div>
    <div class="py-5" data-aos="fade-zoom-in"><ContactForm /></div>
  </main>
</template>

<script setup>
import General from '@/components/homePage/General/General.vue';
import Reviews from '@/components/homePage/Reviews/Reviews.vue';
import BookNow from '@/components/common/BookNow/BookNow.vue';
import ContactForm from '@/components/common/ContactForm/ContactForm.vue';
import Customers from '@/components/homePage/Customers/Customers.vue';
</script>
