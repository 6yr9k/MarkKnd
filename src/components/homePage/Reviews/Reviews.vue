<template>
  <div class="reviews">
    <div class="reviews__container">
      <Divider text="Reviews" />
      <div class="reviews__carousel">
        <div class="reviews__picture-button">
          <img class="reviews__carousel-button" src="../../../assets/bj/carousel-button.svg" alt="" />
        </div>
        <div class="reviews__items">
          <div class="reviews__item reviews__item_1">
            <div class="item-reviews">
              <div class="item-reviews__head">
                <div class="item-reviews__picture">
                  <img class="item-reviews__image" src="../../../assets/bj/reviews1.svg" alt="" />
                </div>
                <div class="item-reviews__item">
                  <div class="item-reviews__name">Allan Becker</div>
                  <div class="item-reviews__job">Influencer</div>
                </div>
              </div>
              <div class="item-reviews__body">
                <div class="item-reviews__text">
                  I am very pleased with the work of this agency! Always in touch, always answer all questions and never
                  leave. I'm lucky that I contacted them! I am answer all questions and never leave. I'm lucky that I
                  contacted them!
                </div>
              </div>
              <div class="item-reviews__grade">
                <a href="" class="item-reviews__button">Rating</a>
                <div class="item-reviews__stars">
                  <img class="item-reviews__star" src="../../../assets/bj/reviews-stars.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="reviews__item reviews__item_2">
            <div class="item-reviews">
              <div class="item-reviews__head">
                <div class="item-reviews__picture">
                  <img class="item-reviews__image" src="../../../assets/bj/reviews1.svg" alt="" />
                </div>
                <div class="item-reviews__item">
                  <div class="item-reviews__name">Allan Becker</div>
                  <div class="item-reviews__job">Influencer</div>
                </div>
              </div>
              <div class="item-reviews__body">
                <div class="item-reviews__text">
                  I am very pleased with the work of this agency! Always in touch, always answer all questions and never
                  leave. I'm lucky that I contacted them!
                </div>
              </div>
              <div class="item-reviews__grade">
                <a href="" class="item-reviews__button">Rating</a>
                <div class="item-reviews__stars">
                  <img class="item-reviews__star" src="../../../assets/bj/reviews-stars.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="reviews__item reviews__item_3">
            <div class="item-reviews">
              <div class="item-reviews__head">
                <div class="item-reviews__picture">
                  <img class="item-reviews__image" src="../../../assets/bj/reviews1.svg" alt="" />
                </div>
                <div class="item-reviews__item">
                  <div class="item-reviews__name">Allan Becker</div>
                  <div class="item-reviews__job">Influencer</div>
                </div>
              </div>
              <div class="item-reviews__body">
                <div class="item-reviews__text">
                  I am very pleased with the work of this agency! Always in touch, always answer all questions and never
                  leave. I'm lucky that I contacted them!
                </div>
              </div>
              <div class="item-reviews__grade">
                <a href="" class="item-reviews__button">Rating</a>
                <div class="item-reviews__stars">
                  <img class="item-reviews__star" src="../../../assets/bj/reviews-stars.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews__picture-button">
          <img class="item-reviews__carousel-button2" src="../../../assets/bj/carousel-button2.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from '@/components/common/Divider/Divider.vue';

export default {
  components: { Divider },
};
</script>
