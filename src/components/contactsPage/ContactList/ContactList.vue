<template>
  <div class="contact__list_wrapper">
    <Divider text="Contacts" />
    <div class="contact__list">
      <div class="contacts__row">
        <ContactListItem v-for="contact of contacts.slice(0, 3)" :key="contact.id" :contact="contact" />
      </div>
      <div class="contacts__row">
        <ContactListItem v-for="contact of contacts.slice(3, 6)" :key="contact.id" :contact="contact" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Divider from '@/components/common/Divider/Divider.vue';
import { contacts } from '@/constants/contacts';
import ContactListItem from '@/components/contactsPage/ContactListItem/ContactListItem.vue';

export default {
  components: {
    ContactListItem,
    Divider,
  },
  data() {
    return {
      contacts,
    };
  },
};
</script>

<style scoped>
.contact__list_wrapper {
  font-size: 1vh;
}

.contact__list {
  display: flex;
  flex-flow: column;
  gap: 30px;
  font-size: 1.3rem;

  margin-top: 70px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 50px 200px 50px 50px;
}

.contacts__row {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}

@media (max-width: 768px) {
  .contact__list {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 50px;
  }
  .contacts__row {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
