<template>
  <main class="main">
    <Customers />
    <BookNow />
    <General />
    <Reviews />
    <ContactForm />
  </main>
</template>

<script setup>
import General from '@/components/homePage/General/General.vue';
import Reviews from '@/components/homePage/Reviews/Reviews.vue';
import BookNow from '@/components/common/BookNow/BookNow.vue';
import ContactForm from '@/components/common/ContactForm/ContactForm.vue';
import Customers from '@/components/homePage/Customers/Customers.vue';
</script>
