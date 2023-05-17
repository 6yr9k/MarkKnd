<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const display = useDisplay();
</script>

<template>
  <div class="notice__container mt-10" v-if="!display.md.value">
    <div class="notice__wrapper">
      <div class="notice__wrapper-dot"></div>

      <div class="notice__wrapper-text">
        <strong>IMPORTANT TO NOTICE!</strong>
        We are a marketing agency that helps big and small companies to grow and expand as well as give them the best
        customer service. We have a dedicated team of full-time staff that ensure your company has the best customer
        service in the
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notice__wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;

  &-dot {
    width: 3.5%;
    height: 14px;
    border-radius: 50%;
    background-color: #1e1e1e;
    margin-top: 10px;
  }

  &-text {
    font-weight: 600;
    font-size: 23px;
    line-height: 155%;
  }
}
</style>
