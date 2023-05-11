<template>
  <v-container class="contacts" data-aos="fade-zoom-in">
    <ContactList />
    <ContactForm />
  </v-container>
</template>

<script setup>
import ContactList from '@/components/contactsPage/ContactList/ContactList.vue';
import ContactForm from '@/components/common/ContactForm/ContactForm.vue';
</script>

<style scoped>
.contacts {
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-bottom: 60px;
}

.image__wrapper img {
  max-width: 320px;
  max-height: 300px;
}
</style>
