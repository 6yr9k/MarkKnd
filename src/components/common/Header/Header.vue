<script>
import { links } from '@/constants/';
import { RouterLink } from '@/enums';

export default {
  computed: {
    RouterLink() {
      return RouterLink;
    },
  },
  data: () => {
    return {
      links,
    };
  },
};
</script>

<template>
  <header class="header">
    <div class="header__container">
      <div class="header__items">
        <RouterLink :to="RouterLink.HOME">
          <div class="header__logo">
            <div class="header__title">Group</div>
          </div>
        </RouterLink>
        <ul class="header__menu" v-for="link of links">
          <li class="header__point">
            <RouterLink class="header__link" :to="link.path">{{ link.name }}</RouterLink>
          </li>
        </ul>
        <v-btn size="x-large" :to="RouterLink.CONTACT" class="header__button">Contact Now</v-btn>
        <div class="burger">
          <input class="burger__checkbox" type="checkbox" id="check-menu" />
          <label class="burger__label" for="check-menu"></label>
          <div class="burger__line burger__line_1"></div>
          <div class="burger__line burger__line_2"></div>
          <div class="burger__line burger__line_3"></div>
          <div class="burger__line burger__line_4"></div>
          <nav class="burger__main-menu">
            <div class="burger__shell" v-for="link of links">
              <RouterLink :to="link.path" class="burger__link">{{ link.name }}</RouterLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header__button {
  font-weight: 500;
  font-size: 23px;
  line-height: 27px;
  color: #ffffff;
  background: #000000;
  border-radius: 15px;
  text-transform: inherit;

  @media (max-width: 766px) {
    display: none;
  }
}
</style>
