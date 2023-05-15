<template>
  <div class="wrapper">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/common/Header/Header.vue';
import Footer from '@/components/common/Footer/Footer.vue';
</script>

<style lang="scss">
.wrapper {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
