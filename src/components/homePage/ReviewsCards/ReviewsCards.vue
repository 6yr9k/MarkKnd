<template>
  <div class="pl-13 pr-13">
    <div class="item-reviews">
      <div class="item-reviews__head">
        <div class="item-reviews__picture">
          <img class="item-reviews__image" :src="review.picture" alt="" />
        </div>
        <div class="item-reviews__item">
          <div class="item-reviews__name">{{ review.name }}</div>
          <div class="item-reviews__job">{{ review.job }}</div>
        </div>
      </div>
      <div class="item-reviews__body">
        <div class="item-reviews__text">{{ review.text }}</div>
      </div>
      <div class="item-reviews__grade">
        <a href="" class="item-reviews__button">Rating</a>
        <div class="item-reviews__stars">
          <v-rating density="compact" v-model="rating" readonly></v-rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Reviews } from '@/models';

defineProps<{ review: Reviews }>();

const rating = Math.floor(Math.random() * (5 - 3 + 1) + 3);
</script>
