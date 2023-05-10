<template>
  <v-container class="d-flex flex-column service">
    <Divider text="Our Service" />
    <ServiceList />
    <v-sheet class="py-5">
      <Notice />
    </v-sheet>
    <v-sheet class="py-5">
      <BookNow />
    </v-sheet>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import ServiceList from '@/components/servicePage/ServiceList/ServiceList.vue';
import Divider from '@/components/common/Divider/Divider.vue';
import BookNow from '@/components/common/BookNow/BookNow.vue';
import Notice from '@/components/servicePage/Notice/Notice.vue';

export default defineComponent({
  components: { Notice, BookNow, Divider, ServiceList },
});
</script>

<style scoped>
.service {
  margin-bottom: 50px;
}
</style>
