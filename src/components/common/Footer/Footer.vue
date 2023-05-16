<script>
import { info as information, links, social } from '@/constants';

export default {
  data: () => {
    return {
      links,
      social,
      information,
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__items">
        <div class="footer__item">
          <div class="footer__logo logo-footer">
            <div class="logo-footer__head">
              <div class="logo-footer__image">
                <img src="../../../assets/bj/logo-footer.svg" alt="" class="logo-footer__img" />
              </div>
              <div class="logo-footer__group">Group</div>
            </div>
            <div class="logo-footer__body">© 2023 All rights are reserved</div>
          </div>
        </div>
        <div class="footer__itemo">
          <div class="footer__column">
            <div class="footer__title">Learn</div>
            <RouterLink v-for="link of links" class="footer__link" :to="link.path">{{ link.name }}</RouterLink>
          </div>
          <div class="footer__column">
            <div class="footer__title">Social Media</div>
            <a v-for="soc of social" :href="soc.url" class="footer__link">{{ soc.name }}</a>
          </div>
          <div class="footer__column">
            <div class="footer__title">Information</div>
            <RouterLink class="footer__link" v-for="info of information" :to="info.path">{{ info.name }} </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
