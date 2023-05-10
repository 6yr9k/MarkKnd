<template>
  <v-item-group mandatory>
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
        <v-item v-slot="{ isSelected, toggle }">
          <v-card :color="isSelected ? '' : ''" class="card" width="337" height="387" @click="toggle">
            <div class="card__title">
              <h2>{{ service.title }}</h2>
            </div>
            <div class="card__text">
              <h4>{{ service.shortDescription }}</h4>
            </div>
            <div>
              <v-img :src="service.bg" :alt="service.title" width="200" height="150" />
            </div>
            <!--            <div class="card__image">-->
            <!--              <img :src="service.bg" :alt="service.title" class="card__img" />-->
            <!--            </div>-->
          </v-card>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script>
import { services } from '@/constants';

export default {
  data() {
    return {
      services,
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
  border: 2px solid #000000;
  border-radius: 25px;
}

.card__title {
  width: 100%;
  padding: 5px 0;
  text-align: center;
  color: #ffffff;
  background-color: #000000;
  border-radius: 15px;
}

.card__text {
  padding: 0 5px;
  text-align: center;
}

.card__image {
  width: 100%;
  height: 100%;
}

.card__img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
