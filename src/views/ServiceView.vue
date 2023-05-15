<template>
  <v-container class="d-flex flex-column service">
    <v-sheet data-aos="fade-zoom-in">
      <RouterView />
    </v-sheet>

    <v-sheet class="py-5" data-aos="fade-zoom-in">
      <Notice />
    </v-sheet>

    <v-sheet class="py-5" data-aos="fade-zoom-in">
      <BookNow />
    </v-sheet>
  </v-container>
</template>

<script lang="ts" setup>
import BookNow from '@/components/common/BookNow/BookNow.vue';
import Notice from '@/components/servicePage/Notice/Notice.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
</script>

<style scoped>
.service {
  margin-bottom: 50px;
}
</style>
