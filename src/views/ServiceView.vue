<template>
  <main class="main">
    <div data-aos="fade-zoom-in">
      <RouterView />
    </div>

    <div class="py-5" data-aos="fade-zoom-in">
      <Notice />
    </div>

    <div class="py-5" data-aos="fade-zoom-in">
      <BookNow />
    </div>
  </main>
</template>

<script lang="ts" setup>
import BookNow from '@/components/common/BookNow/BookNow.vue';
import Notice from '@/components/servicePage/Notice/Notice.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>

<style scoped></style>
