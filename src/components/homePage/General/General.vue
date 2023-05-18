<script setup lang="ts">
import type { General } from '@/models';
import { general } from '@/constants';

const generals: General[] = general;
</script>

<template>
  <div class="general">
    <div class="general__container">
      <div class="general__items">
        <div class="general__item" v-for="general of generals" :key="general.id">
          <div class="item-general" v-wave>
            <div class="item-general__picture">
              <img class="item-general__image" :src="general.avatar" :alt="general.title" />
            </div>
            <div class="item-general__body">
              <div class="item-general__name">{{ general.title }}</div>
              <div class="item-general__subtitle">{{ general.subtitle }}</div>
              <div class="item-general__text">
                {{ general.text }}
              </div>
              <div class="network__wrapper">
                <div class="network__wrapper-item" v-for="(net, idx) of general.network" :key="idx">
                  <img :src="net.icon" :alt="net.text" style="max-width: 30px" />
                  <v-tooltip :text="net.text" location="top">
                    <template v-slot:activator="{ props }">
                      <a target="_blank" :href="net.link" v-bind="props">{{ net.text }}</a>
                    </template>
                  </v-tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.network__wrapper {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;

  &-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}
</style>
