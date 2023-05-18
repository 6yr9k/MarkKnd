<template>
  <div class="customers">
    <div class="customers__container">
      <div class="customers__items">
        <div class="customers__img_1">
          <img src="../../../assets/bj/99.Report1.svg" alt="" class="customers__image_1" />
        </div>
        <div class="customers__item">
          <div class="customers__title">Today Customers Tomorrow Friends</div>
          <div class="customers__text">
            A Design Agency that can make your dream design come true! We offer various design services, such as UI, UX,
            Web, Mobile and many others!
          </div>
          <v-btn size="x-large" rounded="lg" color="black" variant="flat" class="explore__btn">
            <span class="explore__btn-text">{{ display.mdAndDown.value ? 'Explore Now' : 'Book now' }} </span>
            <ModalForm />
          </v-btn>
        </div>
        <div class="customers__img_2">
          <img src="../../../assets/bj/101Thinking1.svg" alt="" class="customers__image_2" />
        </div>
      </div>
    </div>
  </div>
  <div class="who items-who">
    <div class="items-who__container">
      <div class="items-who__image">
        <img src="../../../assets/bj/who.svg" alt="" class="items-who__img" />
      </div>
      <div class="items-who__item">
        <h2 class="items-who__title">Who are We?</h2>
        <div class="items-who__text">
          We are a design agency that helps customers with creating a cool, unique and beautiful design. We offer
          support all through the design process, from initial concept to final delivery!
        </div>
      </div>
    </div>
  </div>
  <div class="who items-who items-who_2">
    <div class="items-who__container items-who__container_2">
      <div class="items-who__image items-who__image_2">
        <img src="../../../assets/bj/who2.svg" alt="who2" class="items-who__img items-who__img_2" />
      </div>
      <div class="items-who__item items-who__item_2">
        <h2 class="items-who__title items-who__title_2">We work for You!</h2>
        <div class="items-who__text items-who__text_2">
          Our team has years of experience creating custom designs for businesses and individuals. From logo design to
          full websites, all our projects look professional, timeless, and always pleasantly surprise our clients.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ModalForm from '@/components/common/ModalForm/ModalForm.vue';
import { useDisplay } from 'vuetify';

const display = useDisplay();
</script>

<style scoped lang="scss">
.explore__btn {
  text-transform: inherit;

  &-text {
    font-weight: 500;
    font-size: 22px;
    line-height: 27px;

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
</style>
