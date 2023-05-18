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
import { onMounted } from 'vue';
import { easterEgg } from '@/constants';

onMounted(() => console.log(easterEgg()));
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
