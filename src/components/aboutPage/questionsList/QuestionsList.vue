<template>
  <questions-list-item
    v-for="(question, idx) of questions"
    :key="question.id"
    :question="question"
    :idx="idx"
    :show="showIdx === idx"
    @toggle="toggleAnswer(idx)"
  />
  <BookNow />
</template>

<script>
import QuestionsListItem from '@/components/aboutPage/questionsListItem/QuestionsListItem.vue';
import BookNow from '@/components/aboutPage/bookNow/BookNow.vue';

export default {
  components: { BookNow, QuestionsListItem },
  data() {
    return {
      showIdx: -1,
      questions: [
        {
          id: 1,
          question: 'Question #1',
          answer: 'lorem  1',
        },
        {
          id: 2,
          question: 'Question #2',
          answer:
            'Our team of experts can help you reach more of your target audience, grow your brand and build your business. We adapt our strategy to your specific business needs. Our team of experts can help you reach more of your target audience, grow your brand and build your business. We adapt our strategy to your specific business needs. ',
        },
        {
          id: 3,
          question: 'Question #3',
          answer: 'lorem  3',
        },
        {
          id: 4,
          question: 'Question #4',
          answer: 'lorem  4',
        },
        {
          id: 5,
          question: 'Question #5',
          answer: 'lorem  5',
        },
      ],
    };
  },
  methods: {
    toggleAnswer(idx) {
      this.showIdx = this.showIdx === idx ? -1 : idx;
    },
  },
};
</script>

<style></style>
