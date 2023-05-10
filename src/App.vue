<template>
  <v-app>
    <Header />

    <v-container>
      <RouterView />
    </v-container>
    <Footer />
  </v-app>
</template>

<script setup>
import Header from '@/components/common/Header/Header.vue';
import Footer from '@/components/common/Footer/Footer.vue';
</script>
