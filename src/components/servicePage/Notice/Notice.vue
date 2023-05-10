<template>
  <v-container class="notice">
    <div class="dot"></div>
    <v-sheet class="text">
      <strong>IMPORTANT TO NOTICE!</strong>
      We are a marketing agency that helps big and small companies to grow and expand as well as give them the best
      customer service. We have a dedicated team of full-time staff that ensure your company has the best customer
      service in the
    </v-sheet>
  </v-container>
</template>

<style scoped>
.notice {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.dot {
  width: 3.5%;
  height: 14px;
  border-radius: 50%;
  background-color: #1e1e1e;
  margin-top: 10px;
}

.text {
  font-weight: 600;
  font-size: 22.5185px;
  line-height: 155%;
}
</style>
