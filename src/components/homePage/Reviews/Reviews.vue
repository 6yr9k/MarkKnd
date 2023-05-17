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
              <v-btn size="small" @click="props.onClick" class="prev__btn">
                <v-icon icon="mdi-chevron-left" size="x-large" />
              </v-btn>
            </template>

            <template v-for="(review, index) in reviews">
              <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" :key="index">
                <v-row class="flex-nowrap">
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
              <v-btn size="small" @click="props.onClick" class="next__btn">
                <v-icon icon="mdi-chevron-right" size="x-large" />
              </v-btn>
            </template>
          </v-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.prev__btn {
  margin-left: -10px;
}
.next__btn {
  margin-right: -10px;
}
</style>
