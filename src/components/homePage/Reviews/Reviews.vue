<script lang="ts">
import Divider from '@/components/common/Divider/Divider.vue';
import ReviewsCards from '@/components/homePage/ReviewsCards/ReviewsCards.vue';
import { reviews } from '@/constants';
import prev from '../../../assets/bj/carousel-button.svg';
import next from '../../../assets/bj/carousel-button2.svg';

export default {
  components: { Divider, ReviewsCards },
  data: () => ({
    prev,
    next,
    reviews,
  }),
  computed: {
    columns() {
      if (this.$vuetify.display.xl) {
        return 3;
      }

      if (this.$vuetify.display.lg) {
        return 3;
      }

      if (this.$vuetify.display.md) {
        return 2;
      }

      return 1;
    },
  },
};
</script>

<template>
  <div class="reviews">
    <div class="reviews__container">
      <Divider text="Reviews" />
      <div class="reviews__carousel">
        <div class="reviews__items">
          <v-carousel hide-delimiters show-arrows style="height: auto">
            <template v-slot:prev="{ props }">
              <div class="reviews__picture-button" @click="props.onClick">
                <img class="reviews__carousel-button" src="@/assets/bj/carousel-button.svg" alt="" />
              </div>
            </template>

            <template v-for="(review, index) in reviews">
              <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" :key="index">
                <v-row class="flex-nowrap review__row" style="">
                  <template v-for="(n, i) in columns">
                    <template v-if="+index + i < reviews.length">
                      <div v-if="+index + i < reviews.length">
                        <ReviewsCards :review="review" />
                      </div>
                    </template>
                  </template>
                </v-row>
              </v-carousel-item>
            </template>

            <template v-slot:next="{ props }">
              <div class="reviews__picture-button" @click="props.onClick">
                <img class="item-reviews__carousel-button2" src="@/assets/bj/carousel-button2.svg" alt="" />
              </div>
            </template>
          </v-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.prev__btn {
  margin-left: -15px;
}

.review__row {
  gap: 70px;
  margin: 0 50px;

  @media (min-width: 1200px) {
    gap: 40px;
    margin: 0 70px;
  }
}

.next__btn {
  margin-right: -15px;
}
</style>
