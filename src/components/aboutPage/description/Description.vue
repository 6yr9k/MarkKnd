<template>
  <v-sheet class="description__wrapper">
    <div class="about__description">
      <div class="bg">
        <img src="./img/leftBg.jpg" alt="bg" />
      </div>
      <div class="about__text_wrapper">
        <h1 class="about__title">About Us</h1>
        <p class="about__text">
          BJ Group offers custom Web-Design services, from initial concept to final delivery! We have the expertise,
          experience and unique insight that allows us to create a compelling and unique design for each customer.
        </p>

        <v-btn rounded elevation="10" class="about__btn">Explore Now</v-btn>
      </div>

      <div class="bg">
        <img src="./img/rightBg.jpg" alt="bg" />
      </div>
    </div>
    <FaqDivider />
  </v-sheet>
</template>

<style>
.description__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.about__description {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
}

.about__title {
  font-size: 34px;
  font-weight: 600;
  line-height: 42px;
}

.about__text {
  max-width: 640px;
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  line-height: 155%;
}

.about__text_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 2rem 0;
}

.bg {
  max-width: 200px;
}

@media (min-width: 768px) {
  .about__btn {
    display: none;
  }
}

@media (max-width: 768px) {
  .about__text {
    font-size: 15px;
  }

  .bg {
    display: none;
  }

  .about__btn {
    display: block;
    width: 187px;
    margin-top: 2rem;
    background: #000;
    color: #fff;
    font-size: 19px;
    text-transform: capitalize;
  }
}
</style>
<script setup>
import FaqDivider from '@/components/aboutPage/faqDivider/faqDivider.vue';
</script>
