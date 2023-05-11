<template>
  <div class="form__wrapper">
    <div class="image__wrapper">
      <img :src="bg" alt="bg" />
    </div>
    <div class="form__container">
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
          v-model="state.businessType"
          :error-messages="v$.businessType.$errors.map((e) => e.$message)"
          @change="v$.businessType.$touch"
          @blur="v$.businessType.$touch"
          :items="items"
          class="form__input"
          variant="outlined"
          placeholder="Type of your Business"
        />
        <v-textarea
          required
          no-resize
          v-model="state.comments"
          :error-messages="v$.comments.$errors.map((e) => e.$message)"
          @change="v$.comments.$touch"
          @blur="v$.comments.$touch"
          rows="3"
          class="comment form__input"
          variant="outlined"
          placeholder="Ask a question or leave a request"
        />

        <v-sheet class="submit__wrapper">
          <v-btn size="large" type="submit" class="submit__btn" :disabled="v$.$invalid" @click="snackbar.open = true"
            >Send a Message
            <v-snackbar
              v-if="snackbar.message"
              color="#212121"
              v-model="snackbar.open"
              close-delay="2000"
              position="sticky"
              origin="top right"
              >{{ snackbar.message }}
            </v-snackbar></v-btn
          >
          <span class="submit__text">We’ll answer you in the next 24 hours</span>
        </v-sheet>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, Ref, ref, UnwrapRef } from 'vue';
import bg from '@/assets/icons/bg.png';
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import type { ContactForm } from '@/models/contactForm';
import type { BusinessType } from '@/models/businessType';
import axios from 'axios';

export default {
  setup() {
    const initialState: ContactForm = {
      name: '',
      email: '',
      businessType: null,
      comments: '',
    };

    const items: Ref<UnwrapRef<BusinessType[]>> = ref([
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
      businessType: { required, $lazy: true },
      comments: { required, $lazy: true },
    };

    const v$ = useVuelidate(rules, state);

    return { items, state, v$ };
  },
  data() {
    return {
      bg,
      snackbar: {
        open: false,
        message: '',
        color: '',
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        const isValid = this.v$.$validate();

        if (isValid) {
          const res = await axios.post<{ message: string }>('http://localhost:5152/api/email/sent', this.state);

          this.snackbar.message = res.data.message;
        }

        this.state.name = '';
        this.state.email = '';
        this.state.businessType = null;
        this.state.comments = '';
      } catch (err) {
        if (err) {
          this.snackbar.message = err.message;
        }
      }
    },
  },
};
</script>

<style scoped>
.form__wrapper {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 30px;
}

.image__wrapper {
  width: 478px;
  height: 337px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

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

@media (max-width: 768px) {
  .form__wrapper {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }

  .form__container {
    width: 100%;
  }
  .image__wrapper {
    display: none;
  }
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
