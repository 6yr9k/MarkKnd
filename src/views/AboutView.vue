<template>
  <main class="main">
    <div data-aos="fade-zoom-in">
      <Description />
    </div>

    <div data-aos="fade-zoom-in">
      <QuestionsList />
    </div>
  </main>
</template>

<script setup>
import QuestionsList from '@/components/aboutPage/QuestionsList/QuestionsList.vue';
import Description from '@/components/aboutPage/Description/Description.vue';
</script>
