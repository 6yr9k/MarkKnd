<template>
  <v-responsive class="hurry-up">
    <div :class="router.path === RouterLink.ABOUT ? 'mt-10' : 'hurry-up__container'">
      <div class="hurry-up__fix">
        <div class="hurry-up__title">Hurry up to, order a design from our team!</div>
        <div class="hurry-up__shell">
          <v-btn :size="display.lgAndUp.value ? 'x-large' : 'large'" class="book__btn">
            Order now
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
  font-weight: 500;
  font-size: 22px;
  line-height: 27px;
  padding: 0 42px;
  letter-spacing: 0;
  border-radius: 15px !important;

  @media (max-width: 991px) {
    padding: 0 30px;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    margin-top: 25px;
    font-size: 15px;
  }
}
</style>
