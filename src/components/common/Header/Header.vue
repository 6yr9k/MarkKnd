<template>
  <header class="header">
    <div class="header__container">
      <div class="header__items">
        <a href="">
          <div class="header__logo">
            <div class="header__title">Group</div>
          </div>
        </a>
        <ul class="header__menu">
          <li class="header__point"><RouterLink class="header__link" to="/">Home</RouterLink></li>
          <li class="header__point"><RouterLink class="header__link" to="/about">About</RouterLink></li>
          <li class="header__point"><RouterLink class="header__link" to="/service">Service</RouterLink></li>
          <li class="header__point"><RouterLink class="header__link" to="/contacts">Contacts</RouterLink></li>
        </ul>
        <a href="" class="header__button">Contact Now</a>
        <div class="burger">
          <input class="burger__checkbox" type="checkbox" id="check-menu" />
          <label class="burger__label" for="check-menu"></label>
          <div class="burger__line burger__line_1"></div>
          <div class="burger__line burger__line_2"></div>
          <div class="burger__line burger__line_3"></div>
          <div class="burger__line burger__line_4"></div>
          <nav class="burger__main-menu">
            <div class="burger__shell"><a href="" class="burger__link">Home</a></div>
            <div class="burger__shell"><a href="" class="burger__link">About</a></div>
            <div class="burger__shell"><a href="" class="burger__link">Service</a></div>
            <div class="burger__shell"><a href="" class="burger__link">Contacts</a></div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header__items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 40px 0;
  /* №3 */
}
@media (max-width: 991.98px) {
  .header__items {
    padding: 25px 0;
  }
}
@media (max-width: 767.98px) {
  .header__items {
    padding: 15px 0;
  }
}
.header__logo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: #000;
  -webkit-transform: translate(0px, -2px);
  -ms-transform: translate(0px, -2px);
  transform: translate(0px, -2px);
  padding: 0px 20px 0px 0px;
  /* №3 */
}
.header__logo::before {
  content: '';
  width: 60px;
  height: 60px;
  display: inline-block;
  background: url('../../../assets/bj/Frame6.svg') 0 0 no-repeat;
  -webkit-transform: translate(0px, 2px);
  -ms-transform: translate(0px, 2px);
  transform: translate(0px, 2px);
  margin-right: 9px;
}
@media (max-width: 991.98px) {
  .header__logo {
    font-size: 24px;
    line-height: 29px;
  }
}
@media (max-width: 767.98px) {
  .header__logo {
    font-size: 19px;
    line-height: 23px;
  }
  .header__logo::before {
    content: '';
    width: 40px;
    height: 40px;
    display: inline-block;
    background: url('../../../assets/bj/Frame6.svg') 0 0/40px 40px no-repeat;
    -webkit-transform: translate(0px, 2px);
    -ms-transform: translate(0px, 2px);
    transform: translate(0px, 2px);
    margin-right: 9px;
  }
}
.header__menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-column-gap: 45px;
  -moz-column-gap: 45px;
  column-gap: 45px;
  font-weight: 500;
  font-size: 21px;
  line-height: 26px;
  /* №3 */
}
@media (max-width: 767.98px) {
  .header__menu {
    display: none;
  }
}
@media (max-width: 991.98px) {
  .header__menu {
    font-size: 16px;
  }
}
.header__point {
  -webkit-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.header__point:hover {
  text-shadow: 0.4px 0px 0px #000000, -0.4px 0px 0px #000000;
}
.header__link {
  color: #000000;
}
.header__button {
  font-weight: 500;
  font-size: 22.5174px;
  line-height: 27px;
  color: #ffffff;
  padding: 14px 42px;
  background: #000000;
  border-radius: 14px;
}
@media (max-width: 767.98px) {
  .header__button {
    display: none;
  }
}
@media (max-width: 768px) {
  .header__button {
    font-size: 16px;
    line-height: 19px;
    padding: 12px 24px;
  }
}
@media (max-width: 991.98px) {
  .header__button {
    font-size: 16px;
    line-height: 19px;
    padding: 12px 24px;
  }
}

.burger {
  width: 220px;
  position: relative;
  color: #ffffff;
  text-align: center;
  height: 40px;
}
@media (min-width: 767.98px) {
  .burger {
    display: none;
  }
}
.burger__checkbox {
  display: none;
}
.burger__checkbox:checked ~ .burger__main-menu {
  height: 290px;
}
.burger__label {
  display: inline-block;
  position: absolute;
  top: 5px;
  right: 0;
  width: 55px;
  height: 100%;
  cursor: pointer;
  z-index: 2;
}
.burger__line {
  z-index: 1;
  position: absolute;
  top: 9px;
  right: 10px;
  width: 35px;
  height: 3px;
  border-radius: 5px;
  background-color: #000000;
  -webkit-transition: all 0.25s linear 0s;
  -o-transition: all 0.25s linear 0s;
  transition: all 0.25s linear 0s;
}
.burger__line_2 {
  top: 19px;
  width: 30px;
  position: absolute;
  right: 15px;
}
.burger__line_3 {
  top: 19px;
  width: 30px;
  position: absolute;
  right: 15px;
}
.burger__line_4 {
  top: 29px;
  width: 25px;
  position: absolute;
  right: 20px;
}
.burger__checkbox:checked ~ .burger__line {
  background-color: #ffffff;
}
.burger__checkbox:checked ~ .burger__line_1 {
  display: none;
}
.burger__checkbox:checked ~ .burger__line_4 {
  display: none;
}
.burger__checkbox:checked ~ .burger__line_2 {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.burger__checkbox:checked ~ .burger__line_3 {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.burger__main-menu {
  display: block;
  position: absolute;
  width: 100%;
  bottom: 44px;
  left: 0;
  -webkit-transform: translateY(100%);
  -ms-transform: translateY(100%);
  transform: translateY(100%);
  background-color: #000000;
  border-radius: 10px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  -webkit-transition: all 0.25s linear 0s;
  -o-transition: all 0.25s linear 0s;
  transition: all 0.25s linear 0s;
}
.burger__shell {
  padding: 15px 0;
  position: relative;
  top: 35px;
}
.burger__link {
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}
</style>
