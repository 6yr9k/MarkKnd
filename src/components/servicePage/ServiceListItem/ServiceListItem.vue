<template>
  <v-item v-slot="{ isSelected, toggle }">
    <v-card class="card" width="337" height="387" @click="toggle" :to="{ name: 'service details', params: { id } }">
      <div class="card__title">
        <span>{{ title }}</span>
      </div>
      <div class="card__text">
        <h4>{{ shortDescription }}</h4>
      </div>
      <div>
        <v-img :src="bg" :alt="title" width="200" height="150" />
      </div>
    </v-card>
  </v-item>
</template>

<script setup lang="ts">
import type { Services } from '@/models';

defineProps<Services>();
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  border: 2px solid #000000;
  border-radius: 25px;

  &__title {
    width: 100%;
    font-size: 17px;
    padding: 12px 10px;
    text-align: center;
    color: #ffffff;
    background-color: #000000;
    border-radius: 15px;
  }

  &__text {
    padding: 0 5px;
    text-align: center;
  }
}
</style>
