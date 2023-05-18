<script lang="ts" setup>
import type { Contacts } from '@/models';

defineProps<{ contacts: Contacts[] }>();
</script>

<template>
  <div class="contacts__row">
    <div class="contacts__row-item" v-for="contact of contacts" :key="contact.id">
      <div v-if="contact.id === 1">
        <a :href="'mailto:' + contact.contact">Email: {{ contact.contact }}</a>
      </div>
      <div v-else-if="contact.id === 4">
        <a :href="'tel:' + contact.contact">Phone: {{ contact.contact }}</a>
      </div>
      <a :href="contact?.link" v-else class="contacts__row-item-content">
        <img :src="contact?.icon" :alt="contact.id" class="contacts__row-item-img" />
        <span class="contacts__row-item-text">{{ contact.contact }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &-item {
    width: 100%;
    align-self: center;

    &-content {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-img {
      max-width: 20px;
    }
  }

  @media (max-width: 1050px) {
    flex-direction: column;
  }

  &-item {
    width: 100%;
    align-self: center;

    &-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &-img {
      max-width: 20px;
    }
  }
}
</style>
