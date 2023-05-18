<script setup lang="ts">
import type { Contacts } from '@/models';

defineProps<{ contacts: Contacts[] }>();
</script>

<template>
  <div class="contacts__col">
    <div v-for="contact of contacts" :key="contact.id">
      <div v-if="contact.id === 1">
        <a :href="'mailto:' + contact.contact">Email: {{ contact.contact }}</a>
      </div>
      <div v-else-if="contact.id === 4">
        <a :href="'tel:' + contact.contact">Phone: {{ contact.contact }}</a>
      </div>
    </div>
  </div>
  <div class="contacts__col-content">
    <div class="contacts__col-content-item">
      <div
        v-for="contact in contacts.filter((item) => item.id === 2 || item.id === 3)"
        :key="contact.id"
        class="contacts__col-content-item-row"
      >
        <img :src="contact?.icon" :alt="contact.id" class="contacts__col-item-img" />
        <span class="contacts__col-item-text">{{ contact.contact }}</span>
      </div>
    </div>
    <div class="contacts__col-content-item">
      <div
        v-for="contact in contacts.filter((item) => item.id === 5 || item.id === 6)"
        :key="contact.id"
        class="contacts__col-content-item-row"
      >
        <img :src="contact?.icon" :alt="contact.id" class="contacts__col-item-img" />
        <span class="contacts__col-item-text">{{ contact.contact }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts__col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &-content {
    margin-top: 30px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 77px;

    &-item {
      display: flex;
      flex-direction: column;
      gap: 50px;

      &-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
      }
    }
  }
}

a,
span {
  font-size: 15px;
  font-weight: 600;
}
</style>
