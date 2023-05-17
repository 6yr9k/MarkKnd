<script lang="ts" setup>
import ModalForm from '../../common/ModalForm/ModalForm.vue';

import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { services } from '@/constants';
import { useDisplay } from 'vuetify';
import { RouterLink } from '@/enums';

const display = useDisplay();

const route = useRoute();
const id = route.params['id'];

const service = computed(() => {
  return services.find((v) => v.id == id);
});
</script>

<template>
  <div class="detailed">
    <div class="service-detail__container">
      <v-breadcrumbs class="text-lg-h6 mb-5" style="opacity: 0.7">
        Services
        <v-icon icon="mdi-chevron-right" />
        {{ service.title }}
      </v-breadcrumbs>

      <v-card elevation="10" rounded="xl" class="detail__card">
        <div class="detail__card-content">
          <div class="detail__card-content-title">
            <span class="title">{{ service.title }}</span>
          </div>

          <div class="detail__card_list-wrapper">
            <v-list class="detail__card_list" density="compact">
              <div class="detail__card-content-description">
                <span class="description">{{ service.longDescription }}</span>
              </div>
              <div class="detail__card_list-item-container">
                <v-list-item v-for="(item, idx) of service.providedList" :key="idx" class="px-0">
                  <div class="detail__card_list-item">
                    <div class="detail__card_list-item-dot" />
                    <v-list-item-title v-text="item" class="detail__card_list-item-text" />
                  </div>
                </v-list-item>
              </div>
            </v-list>

            <div class="detail__card_list-img">
              <v-img :src="service.bg" :alt="service.title" />
            </div>
          </div>

          <div class="detail__card_btn">
            <v-btn
              color="black"
              :size="display.lgAndUp.value ? 'x-large' : 'default'"
              rounded="lg"
              :class="display.lgAndUp.value ? 'px-16' : 'px-7'"
              style="text-transform: capitalize"
              >Order Now
              <ModalForm />
            </v-btn>
            <v-btn variant="flat" append-icon="mdi-chevron-right" :to="RouterLink.HOME" style="text-transform: inherit"
              >See reviews</v-btn
            >
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detail__card {
  padding: 56px 64px;
  border: 1px solid #000000;
}

.detail__card-content {
  &-title {
    font-size: 33px;
    line-height: 46px;
    margin-bottom: 30px;
  }

  &-description {
    font-size: 18px;
    text-align: justify;
    line-height: 25px;
    margin-bottom: 30px;
  }
}

.detail__card_list-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;

    .detail__card_list {
      width: 100%;
    }

    .detail__card_list-item-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .detail__card_list-img {
      width: 40%;
      height: 330px;
      align-self: flex-end;
    }
  }
}

.detail__card_list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;

    &-text {
      font-size: 20px;
      line-height: 155%;
    }

    &-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #000000;
    }
  }
}

.detail__card_btn {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 30px;
}
</style>
