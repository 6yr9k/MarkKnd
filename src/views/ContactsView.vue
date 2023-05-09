<template>
  <div class="contacts">
    <ContactList />
    <div class="form__wrapper">
      <div class="image__wrapper">
        <img :src="bg" alt="bg" />
      </div>
      <div class="form__container">
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script setup>
import bg from '../assets/icons/bg.png';
import ContactList from '@/components/contactsPage/ContactList/ContactList.vue';
import ContactForm from '@/components/common/ContactForm/ContactForm.vue';
</script>

<style>
.contacts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.form__wrapper {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 50px;
}

.image__wrapper {
  width: 480px;
  height: 370px;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image__wrapper img {
  max-width: 100%;
  max-height: 100%;
}

.form__container {
  width: 520px;
  max-width: 100%;
}

@media (max-width: 768px) {
  .image__wrapper {
    display: none;
  }
}
</style>
