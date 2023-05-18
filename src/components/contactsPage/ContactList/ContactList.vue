<template>
  <div class="contact__container">
    <Divider text="Contacts" />
    <div class="contact__list">
      <ContactItemRow :contacts="contacts.slice(0, 3)" v-if="display.lgAndDown.value && display.mdAndUp.value" />
      <ContactItemRow :contacts="contacts.slice(3, 6)" v-if="display.lgAndDown.value && display.mdAndUp.value" />

      <div v-if="display.smAndDown.value" class="contacts__col_wrap">
        <ContactItemCol :contacts="contacts" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Divider from '@/components/common/Divider/Divider.vue';
import { contacts as i } from '@/constants/contacts';
import { useDisplay } from 'vuetify';
import ContactItemCol from '@/components/contactsPage/ContactItemCol/ContactItemCol.vue';
import ContactItemRow from '@/components/contactsPage/ContactItemRow/ContactItemRow.vue';

const contacts = i;
const display = useDisplay();
</script>

<style scoped lang="scss">
.contact__list {
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 30px;
  font-size: 1.3rem;
  margin-top: 70px;
  border: 2px solid black;
  border-radius: 12px;
  padding: 50px 200px 50px 50px;

  @media (max-width: 1050px) {
    padding: 35px;
    flex-flow: row;
    justify-content: space-around;
  }

  @media (max-width: 400px) {
    padding: 20px;
    flex-flow: row;
  }
}

.contacts__col_wrap {
  width: 100%;
}
</style>
