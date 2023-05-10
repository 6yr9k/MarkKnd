<template>
  <div class="question__wrapper">
    <div class="question" @click="toggle">
      <div class="question__btn">
        <h4>{{ questions.question }}</h4>
        <span class="material-symbols-outlined">
          {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
        </span>
      </div>
      <div class="question__answer" :class="{ show }">
        <p>{{ questions.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: {
      required: true,
    },
    idx: { type: Number, required: true },
    show: { type: Boolean, default: false },
  },
  methods: {
    toggle() {
      this.$emit('toggle', this.idx);
    },
  },
};
</script>

<style scoped>
.question {
  border: 3px solid #000000;
  border-radius: 14px;
  margin: 30px 0;
  padding: 15px 30px;
  width: 100%;
  font-size: 1.2em;
  transition: max-height 0.5s ease-out;
}

.question__btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3em;
  font-weight: bold;
  cursor: pointer;
}

.question__answer {
  margin-top: 1em;
  max-height: 0;
  font-size: 1em;
  opacity: 0;
  transition: max-height 0.5s ease-out, opacity 0.5s ease-out;
}

.question__answer.show {
  max-height: 500px;
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
