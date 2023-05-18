<template>
  <div class="questions__container">
    <v-expansion-panels variant="accordion" class="questions__list">
      <v-expansion-panel
        v-for="q of questions"
        :key="q.id"
        elevation="10"
        class="questions__list-item"
        style="border: 2px solid #000000; border-radius: 15px !important"
      >
        <v-expansion-panel-title class="questions__list-item-title">{{ q.question }}</v-expansion-panel-title>
        <v-expansion-panel-text class="questions__list-item-text">{{ q.answer }}</v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <BookNow />
  </div>
</template>

<script lang="ts" setup>
import BookNow from '@/components/common/BookNow/BookNow.vue';
import { questions as questionList } from '@/constants/questions';

const questions = questionList;
</script>

<style scoped lang="scss">
.questions__list {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &-item {
    &-title {
      font-weight: 600;

      @media (min-width: 1050px) {
        font-size: 22px;
        line-height: 27px;
      }

      @media (max-width: 991px) {
        font-size: 19px;
        line-height: 23px;
      }

      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 24px;
      }
    }

    &-text {
      font-weight: 500;

      @media (min-width: 1050px) {
        font-size: 22px;
        line-height: 155%;
      }

      @media (max-width: 991px) {
        font-size: 18px;
      }

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }
}
</style>
