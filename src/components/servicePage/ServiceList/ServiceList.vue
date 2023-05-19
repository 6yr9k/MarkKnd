<script lang="ts" setup>
import { services } from '@/constants';
import ServiceListItem from '@/components/servicePage/ServiceListItem/ServiceListItem.vue';
import Divider from '@/components/common/Divider/Divider.vue';
</script>

<template>
  <div class="services__container">
    <v-item-group mandatory>
      <Divider text="Our Service" />
      <v-row>
        <v-col
          v-for="service in services"
          align-self="center"
          :key="service.id"
          class="service__item"
          cols="12"
          md="5"
          lg="4"
          sm="7"
        >
          <service-list-item
            :title="service.title"
            :short-description="service.shortDescription"
            :bg="service.bg"
            :id="service?.id"
          />
        </v-col>
      </v-row>
    </v-item-group>
  </div>
</template>

<style scoped lang="scss">
.service__item {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
