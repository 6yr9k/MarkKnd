<template>
  <div>
    <Description />
    <QuestionsList />
  </div>
</template>

<script>
import QuestionsList from '@/components/aboutPage/QuestionsList/QuestionsList.vue';
import Description from '@/components/aboutPage/Description/Description.vue';

export default {
  components: { Description, QuestionsList },
};
</script>
