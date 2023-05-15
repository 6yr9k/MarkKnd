<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { services } from '@/constants';

const route = useRoute();
const id = route.params['id'];

const service = computed(() => {
  return services.find((v) => v.id == id);
});
</script>

<template>
  <div class="mb-10">
    <v-breadcrumbs class="text-lg-h6"> Services <v-icon icon="mdi-chevron-right" /> {{ service.title }} </v-breadcrumbs>
    <v-sheet elevation="12" class="d-flex flex-row py-14 px-16">
      <div class="d-flex flex-column justify-lg-space-between">
        <span class="text-lg-h4">
          {{ service.title }}
        </span>
        <div>
          <span>
            {{ service.longDescription }}
          </span>
          <v-list density="comfortable">
            <v-list-item v-for="(item, i) of service.providedList" :key="i" class="px-0">
              <div class="list__item_content">
                <div class="dot" />
                <v-list-item-title v-text="item" />
              </div>
            </v-list-item>
          </v-list>
        </div>
        <v-img :src="service.bg" :alt="service.title"></v-img>
      </div>
      <div class="btn_row">
        <v-btn color="black" rounded="lg">Order Now</v-btn>
        <v-btn variant="flat" append-icon="mdi-chevron-right">See reviews</v-btn>
      </div>
    </v-sheet>
  </div>
</template>

<style lang="scss">
.list__item_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #000000;
}

.btn_row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
