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

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
