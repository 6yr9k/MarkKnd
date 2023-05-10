<template>
  <div class="divider__wrapper">
    <div class="divider" />
    <div class="text">{{ text }}</div>
    <div class="divider" />
  </div>
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
  width: 100%;
  gap: 20px;
}

.divider {
  height: 2px;
  width: 100%;
  background-color: #000000;
}

.text {
  font-size: 22px;
  padding: 15px 40px;
  border: 3px solid #000000;
  border-radius: 20px;
}
</style>
