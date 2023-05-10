<template>
  <v-container class="divider__wrapper">
    <v-divider class="border-opacity-100" />
    <div class="text">{{ text }}</div>
    <v-divider class="border-opacity-100" />
  </v-container>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<style scoped>
.divider__wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 100px;
}

.text {
  width: 40%;
  text-align: center;
  font-size: 22px;
  padding: 15px 40px;
  border: 3px solid #000000;
  border-radius: 20px;
}
</style>
