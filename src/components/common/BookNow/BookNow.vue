<template>
  <v-responsive class="hurry-up">
    <div class="hurry-up__container">
      <div class="hurry-up__fix">
        <div class="hurry-up__title">Hurry up to, order a design from our team!</div>
        <div class="hurry-up__shell">
          <v-btn :size="display.lgAndUp.value ? 'x-large' : 'default'" class="book__btn"
            ><span class="btn text-lg-h5 text-md-h-6 text-sm-body-1">
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

const display = useDisplay();
</script>

<style scoped lang="scss">
.book {
  font-weight: 600;
  display: inline-block;
  font-size: 20px;
  line-height: 126%;
}

.btn {
  font-weight: 500;
  font-size: 22px;
  text-transform: initial;
  line-height: 27px;
  border-radius: 14px;

  @media (max-width: 991px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
}

@media (max-width: 768px) {
  .bookNow__wrapper {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 20px 40px;
    text-align: center;
  }

  .book__btn {
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }
}
</style>
