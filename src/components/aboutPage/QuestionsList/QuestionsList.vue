<template>
  <v-sheet class="questions__wrapper">
    <questions-list-item
      v-for="(question, idx) of questions"
      :key="question.id"
      :questions="question"
      :idx="idx"
      :show="showIdx === idx"
      @toggle="toggleAnswer(idx)"
    />
    <BookNow />
  </v-sheet>
</template>

<script>
import QuestionsListItem from '@/components/aboutPage/QuestionsListItem/QuestionsListItem.vue';
import BookNow from '@/components/common/BookNow/BookNow.vue';
import { questions } from '@/constants/questions';

export default {
  components: { BookNow, QuestionsListItem },
  data() {
    return {
      showIdx: -1,
      questions,
    };
  },
  methods: {
    toggleAnswer(idx) {
      this.showIdx = this.showIdx === idx ? -1 : idx;
    },
  },
};
</script>

<style scoped>
.questions__wrapper {
  margin-top: -50px;
  margin-bottom: 150px;
}
</style>
