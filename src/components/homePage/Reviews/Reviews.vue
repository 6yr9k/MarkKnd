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
          <v-carousel hide-delimiters show-arrows class="w-100">
            <template v-slot:prev="{ props }">
              <v-btn class="prev__btn">
                <img class="reviews__carousel-button" :src="prev" alt="" @click="props.onClick" />
              </v-btn>
            </template>
            <template v-for="(review, index) in reviews">
              <v-carousel-item v-if="(index + 1) % columns === 1 || columns === 1" :key="index">
                <v-row class="flex-nowrap" style="height: 100%">
                  <template v-for="(n, i) in columns">
                    <template v-if="+index + i < reviews.length">
                      <v-col :key="i">
                        <div v-if="+index + i < reviews.length" style="height: 100%">
                          <v-row class="fill-height" align="center" justify="center">
                            <ReviewsCards :review="review" />
                          </v-row>
                        </div>
                      </v-col>
                    </template>
                  </template>
                </v-row>
              </v-carousel-item>
            </template>
            <template v-slot:next="{ props }">
              <v-btn class="next__btn" flat>
                <img class="reviews__carousel-button" :src="next" alt="" @click="props.onClick" />
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
  max-width: 40px;
  margin-left: -15px;
  bottom: 1%;
}

.next__btn {
  max-width: 40px;
  margin-right: -15px;
  bottom: 3%;
}
</style>
