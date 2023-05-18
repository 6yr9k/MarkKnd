<template>
  <v-responsive class="hurry-up">
    <div :class="router.path === RouterLink.ABOUT ? 'mt-10' : 'hurry-up__container'">
      <div class="hurry-up__fix">
        <div class="hurry-up__title">Hurry up to, order a design from our team!</div>
        <div class="hurry-up__shell">
          <v-btn :size="display.lgAndUp.value ? 'x-large' : 'default'" class="book__btn">
            <span class="btn">
              {{ display.lgAndUp.value ? 'Book now' : 'Order now' }}
            </span>
            <ModalForm />
          </v-btn>
        </div>
      </div>
    </div>
  </v-responsive>
</template>

<script lang="ts" setup>
import ModalForm from '../ModalForm/ModalForm.vue';
import { useDisplay } from 'vuetify';
import { useRoute } from 'vue-router';
import { RouterLink } from '@/enums';

const display = useDisplay();

const router = useRoute();
</script>

<style scoped lang="scss">
.book__btn {
  text-transform: inherit;

  .btn {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 126%;
    text-transform: inherit;

    @media (max-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 25px;
  }
}
</style>
