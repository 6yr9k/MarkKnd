<template>
  <div class="terms">
    <div class="privacy__container">
      <v-card class="privacy__card" width="auto">
        <v-card-title class="privacy__card-title">Privacy Policy</v-card-title>
        <v-card-text class="privacy__card-text">
          <v-responsive>
            We are a design agency that helps customers with creating a cool, unique and beautiful design. We offer
            support all through the design process, from initial concept to final delivery! We are a design agency that
            helps customers with creating a cool, unique and beautiful design. We offer support all through the design
            process, from initial concept to final delivery! We are a design agency that helps customers with creating a
            cool, unique and beautiful design. We offer support all through the design process, from initial concept to
            final delivery! We are a design agency that helps customers with creating a cool, unique and beautiful
            design. We offer support all through the design process, from initial concept to final delivery!
          </v-responsive>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.terms {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .privacy__card {
    width: 100%;
    max-width: 1150px;
    height: 836px;
    background: #ffffff;
    border-radius: 35px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;

    &-title {
      font-weight: 600;
      font-size: 55px;
      line-height: 67px;
      text-align: center;
      margin-bottom: 20px;
    }

    &-text {
      font-style: normal;
      font-weight: 500;
      font-size: 26px;
      line-height: 155%;
      text-align: center;
    }
  }

  @media (max-width: 1050px) {
    .privacy__card {
      max-width: 900px;
      height: auto;
      padding: 30px;

      &-title {
        font-size: 48px;
        line-height: 60px;
      }

      &-text {
        font-size: 22px;
        line-height: 140%;
      }
    }
  }

  @media (max-width: 991px) {
    .privacy__card {
      max-width: 700px;

      &-title {
        font-size: 40px;
        line-height: 50px;
      }

      &-text {
        font-size: 20px;
        line-height: 130%;
      }
    }
  }

  @media (max-width: 768px) {
    .privacy__card {
      max-width: 500px;

      &-title {
        font-size: 32px;
        line-height: 40px;
      }

      &-text {
        font-size: 18px;
        line-height: 120%;
      }
    }
  }
}
</style>
<script setup></script>
