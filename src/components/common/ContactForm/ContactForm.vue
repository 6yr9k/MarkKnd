<template>
  <v-form class="form" @submit.prevent="onSubmit">
    <v-text-field
      required
      v-model="state.name"
      :error-messages="v$.name.$errors.map((e) => e.$message)"
      @input="v$.name.$touch"
      @blur="v$.name.$touch"
      class="form__input"
      variant="outlined"
      placeholder="Your Name"
    />
    <v-text-field
      required
      v-model="state.email"
      :error-messages="v$.email.$errors.map((e) => e.$message)"
      @input="v$.email.$touch"
      @blur="v$.email.$touch"
      @change="v$.email"
      class="form__input"
      variant="outlined"
      placeholder="Email"
    />
    <v-select
      required
      v-model="state.typeBusiness"
      :error-messages="v$.typeBusiness.$errors.map((e) => e.$message)"
      @change="v$.typeBusiness.$touch"
      @blur="v$.typeBusiness.$touch"
      :items="items"
      class="form__input"
      variant="outlined"
      placeholder="Type of your Business"
    />
    <v-textarea
      required
      no-resize
      v-model="state.comment"
      :error-messages="v$.comment.$errors.map((e) => e.$message)"
      @change="v$.comment.$touch"
      @blur="v$.comment.$touch"
      rows="3"
      class="comment form__input"
      variant="outlined"
      placeholder="Ask a question or leave a request"
    />

    <v-sheet class="submit__wrapper">
      <v-btn size="large" type="submit" class="submit__btn" @click="onSubmit" :disabled="v$.$invalid"
        >Send a Message
      </v-btn>
      <span class="submit__text">We’ll answer you in the next 24 hours</span>
    </v-sheet>
  </v-form>
</template>

<script>
import { reactive, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';

export default {
  setup() {
    const initialState = {
      name: '',
      email: '',
      typeBusiness: null,
      comment: '',
      formFilled: false,
    };
    const items = ref([
      'Finances',
      'Construction',
      'Food',
      'Medicine',
      'Agency',
      'Gaming',
      'Portfolio',
      'Web 3.0',
      'E-Commerce',
      'Other',
    ]);

    const state = reactive({
      ...initialState,
    });

    const rules = {
      name: { required, $lazy: true },
      email: { required, email, $lazy: true },
      typeBusiness: { required, $lazy: true },
      comment: { required, $lazy: true },
    };

    const v$ = useVuelidate(rules, state);

    return { items, state, v$ };
  },
  methods: {
    onSubmit() {
      const isValid = this.v$.$validate();

      if (isValid) {
        console.log(this.values);
      }
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.submit__wrapper {
  width: 100%;
  display: flex;
  font-size: 16px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
}

.submit__text {
  opacity: 0.8;
  font-size: 14px;
}

.submit__btn {
  max-width: 240px;
  font-size: 1.1em;
  background: #000;
  color: #fff;
  text-transform: capitalize;
  border-radius: 10px;
}

@media (max-width: 390px) {
  .submit__wrapper {
    flex-direction: column-reverse;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .submit__text {
    font-size: 9px;
  }

  .submit__btn {
    max-width: 150px;
    font-size: 12px;
  }
}
</style>
