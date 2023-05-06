<template>
  <div class="bookNow__wrapper">
    <div class="book">Hurry up to book a call with our team!</div>
    <div class="book__btn">
      <v-btn variant="flat" class="btn">Book now</v-btn>
    </div>
  </div>
</template>

<script></script>

<style>
.bookNow__wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 17px;
  padding-left: 30px;
  align-items: center;
  height: 80px;
  background: #000000;
  color: #ffffff;
  border-radius: 17px;
}

.book {
  font-weight: 600;
  font-size: 20px;
  line-height: 126%;
}

.book__btn {
  background: #ffffff;
  padding: 13px 40px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20.8156px;
  line-height: 126%;
}

.btn {
  text-transform: inherit;
  font-size: 20px;
  width: 100%;
  color: #000000;
}
</style>
