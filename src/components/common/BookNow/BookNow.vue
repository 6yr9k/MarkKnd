<template>
  <v-container class="bookNow__wrapper">
    <div class="book">
      <p>Hurry up to, order a design from our team!</p>
    </div>
    <v-btn size="x-large" variant="flat" class="book__btn"><span class="btn">Book now </span> <ModalForm /> </v-btn>
  </v-container>
</template>

<script lang="ts">
import ModalForm from '../ModalForm/ModalForm.vue';

export default {
  components: {
    ModalForm,
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
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
