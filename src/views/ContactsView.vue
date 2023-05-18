<template>
  <main class="main">
    <div data-aos="fade-zoom-in"><ContactList /></div>
    <div data-aos="fade-zoom-in"><ContactForm /></div>
  </main>
</template>

<script setup>
import ContactList from '@/components/contactsPage/ContactList/ContactList.vue';
import ContactForm from '@/components/common/ContactForm/ContactForm.vue';
</script>

<style scoped></style>
