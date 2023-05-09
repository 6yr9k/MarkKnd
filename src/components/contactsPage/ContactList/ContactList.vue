<template>
  <div class="contact__list_wrapper">
    <Divider text="Contacts" />
    <div class="contact__list">
      <ContactListItem />
    </div>
  </div>
</template>

<script>
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

<style>
.contact__list {
  margin-top: 70px;
  border: 2px solid black;
  border-radius: 12px;
  font-size: 20px;
  padding: 50px 300px 50px 50px;
}
</style>
