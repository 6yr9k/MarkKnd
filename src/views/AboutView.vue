<template>
  <div class="about">
    <Description />
    <QuestionsList />
  </div>
</template>

<script>
import QuestionsList from '@/components/aboutPage/questionsList/QuestionsList.vue';
import Description from '@/components/aboutPage/description/Description.vue';

export default {
  components: { Description, QuestionsList },
};
</script>
