<template>
  <div class="hurry-up">
    <div class="hurry-up__container">
      <div class="hurry-up__fix">
        <div class="hurry-up__title">Hurry up to, order a design from our team!</div>
        <div class="hurry-up__shell">
          <v-btn size="x-large" variant="flat" class="book__btn"
            ><span class="btn text-lg-h5 text-md-h-6 text-sm-body-1"
              >{{ display.md.value ? 'Order now' : 'Book now' }}
            </span>
            <ModalForm />
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ModalForm from '../ModalForm/ModalForm.vue';
import { useDisplay } from 'vuetify';

const display = useDisplay();

let dialog: boolean = false;
</script>

<style scoped lang="scss">
.bookNow__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  color: #ffffff;
  border-radius: 17px;
}

.book__btn {
  font-family: 'Popins', sans-serif;
  background: #ffffff;
  padding: 13px 40px;
  text-transform: inherit;
  border-radius: 10px;
  font-weight: 600;
  font-size: 21px;
  color: #161719;
  transition: all 0.3s ease-in-out;
  line-height: 126%;
  text-align: center;
}

.book {
  font-weight: 600;
  display: inline-block;
  font-size: 20px;
  line-height: 126%;
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
    margin-top: 20px;
  }
}
</style>
