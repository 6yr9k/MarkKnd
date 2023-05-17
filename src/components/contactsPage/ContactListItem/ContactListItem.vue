<template>
  <div class="contacts__item">
    <img v-if="con.icon" :src="con.icon" :alt="con.contact" class="contacts__item-img" />
    <a v-if="con.id === 1" :href="'mailto:' + con.contact" class="contacts__item-link">
      <span>Email:</span>
      {{ con.contact }}
    </a>
    <a v-else-if="con.id === 4" :href="'tel:' + con.contact" class="contacts__item-link"
      ><span>Phone: </span>{{ con.contact }}</a
    >
    <span v-else>{{ con.contact }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { Contacts } from '@/models';

defineProps<{ con: Contacts }>();
</script>

<style scoped lang="scss">
.contacts__item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  &-link {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
  }

  &-img {
    max-width: 20px;
  }

  @media (max-width: 768px) {
    .contacts__item-link {
      max-width: 240px;
    }
  }
}
</style>
