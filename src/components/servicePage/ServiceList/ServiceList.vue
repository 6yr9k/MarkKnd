<template>
  <div class="services__container">
    <v-item-group mandatory>
      <Divider text="Our Service" />
      <v-row>
        <v-col
          v-for="service in services"
          :key="service.id"
          class="d-flex flex-row flex-wrap justify-center"
          cols="12"
          md="6"
          lg="4"
          sm="9"
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

<script lang="ts" setup>
import { services } from '@/constants';
import ServiceListItem from '@/components/servicePage/ServiceListItem/ServiceListItem.vue';
import Divider from '@/components/common/Divider/Divider.vue';
</script>
