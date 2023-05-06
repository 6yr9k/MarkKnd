<template>
  <div class="description__wrapper">
    <div class="aboutUs__description">
      <div class="bg">
        <img src="./img/leftBg.jpg" alt="bg" />
      </div>
      <div class="aboutUs__text_wrapper">
        <h1 class="aboutUs__title">About Us</h1>
        <p class="aboutUs__text">
          BJ Group offers custom Web-Design services, from initial concept to final delivery! We have the expertise,
          experience and unique insight that allows us to create a compelling and unique design for each customer.
        </p>
      </div>

      <div class="bg">
        <img src="./img/rightBg.jpg" alt="bg" />
      </div>
    </div>
    <FaqDivider />
  </div>
</template>

<style>
.description__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.aboutUs__description {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
}

.aboutUs__title {
  font-size: 34px;
  font-weight: 600;
  line-height: 42px;
}

.aboutUs__text {
  max-width: 640px;
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  line-height: 155%;
}

.aboutUs__text_wrapper {
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
</style>
<script setup>
import FaqDivider from '@/components/aboutPage/faqDivider/faqDivider.vue';
</script>
