<script lang="ts" setup>
import axios from 'axios';
import type { Characters } from '@/models';
import type { Ref } from 'vue';
import { onMounted, ref } from 'vue';

const characters: Ref<Characters> = ref<Characters>({});

const getCharacters = async () => {
  try {
    const response = await axios.get<Characters>('https://api.jikan.moe/v4/random/characters');

    characters.value = response.data.data;
  } catch (err) {
    console.error('Error while fetching characters:', err);
  }
};

onMounted(() => {
  getCharacters();
});
</script>

<template>
  <div class="error-404 error__container">
    <div class="error-404__content">
      <v-responsive>
        <h1 class="error-404__title">404</h1>
        <p class="error-404__message">Oops! Page not found</p>
        <p class="error-404__description">
          The requested page could not be found. But don't worry, here's a friendly anime character to keep you company:
        </p>
        <div class="d-flex flex-row align-center justify-center flex-wrap px-16">
          <div class="d-flex flex-column align-center">
            <p class="error-404__character py-2">Name: {{ characters.name }}</p>
            <img class="error-404__image py-2" :src="characters.images?.jpg.image_url" :alt="'#!'" />
            <code class="text-justify w-75">About: {{ characters.about }}</code>
          </div>
        </div>
      </v-responsive>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-404 {
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-404__content {
  text-align: center;
  margin: 0 0 50px 0;
}

.error-404__title {
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 20px;
}

.error-404__message {
  font-size: 24px;
  margin-bottom: 10px;
}

.error-404__description {
  font-size: 18px;
  margin-bottom: 20px;
}

.error-404__image {
  width: 200px;
  height: auto;
  margin-bottom: 10px;
}

.error-404__character {
  font-size: 20px;
  font-weight: bold;
}
</style>
