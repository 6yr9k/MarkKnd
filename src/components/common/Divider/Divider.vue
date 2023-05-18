<template>
  <div class="divider__container">
    <div class="divider__shell">
      <div class="divider__shell-title">
        <v-tooltip :text="text" location="bottom">
          <template v-slot:activator="{ props }">
            <span v-bind="props">{{ text }}</span>
          </template>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
};
</script>

<style scoped lang="scss">
.divider__shell {
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 65px;

  @media (max-width: 991.98px) {
    margin-bottom: 50px;
  }

  @media (max-width: 767.98px) {
    margin-bottom: 40px;
  }

  &::before {
    content: '';
    width: 40%;
    height: 3px;
    display: block;
    top: 50%;
    left: 0;
    background-color: #000;
    position: absolute;

    @media (max-width: 991.98px) {
      width: 34%;
    }

    @media (max-width: 767.98px) {
      width: 28%;
    }
  }

  &::after {
    content: '';
    width: 40%;
    height: 3px;
    display: block;
    top: 50%;
    right: 0;
    background-color: #000;
    position: absolute;

    @media (max-width: 991.98px) {
      width: 34%;
    }

    @media (max-width: 767.98px) {
      width: 28%;
    }
  }

  &-title {
    display: inline-block;
    font-weight: 600;
    font-size: 22px;
    line-height: 27px;
    text-align: center;
    padding: 15px 40px;
    border: 2px solid #000;
    border-radius: 20px;

    @media (max-width: 991.98px) {
      font-size: 18px;
      line-height: 22px;
      padding: 10px 25px;
    }

    @media (max-width: 767.98px) {
      font-size: 16px;
    }
  }
}
</style>
