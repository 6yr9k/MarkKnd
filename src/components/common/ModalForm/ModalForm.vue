<script lang="ts">
import { ContactForm } from '@/models/contactForm';
import { reactive, ref, Ref, UnwrapRef } from 'vue';
import { BusinessType } from '@/models/businessType';
import { email, required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';
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

<template>
  <v-dialog activator="parent" max-width="1136px">
    <v-card class="card__modal" elevation="20" rounded="xl">
      <v-card-title class="px-0">
        <h2 class="font-weight-medium">Contact Us</h2>
      </v-card-title>
      <v-form class="form" @submit.prevent="onSubmit">
        <div class="inputs">
          <v-text-field
            required
            v-model="state.name"
            :error-messages="v$.name.$errors.map((e) => e.$message as string)"
            @input="v$.name.$touch"
            @blur="v$.name.$touch"
            class="form__input"
            variant="outlined"
            placeholder="Your Name"
          />
          <v-text-field
            required
            v-model="state.email"
            :error-messages="v$.email.$errors.map((e) => e.$message as string)"
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
            :error-messages="v$.businessType.$errors.map((e) => e.$message as string)"
            @change="v$.businessType.$touch"
            @blur="v$.businessType.$touch"
            :items="items"
            class="form__input"
            variant="outlined"
            placeholder="Type of your Business"
          />

          <v-sheet class="submit__wrapper">
            <v-btn size="large" type="submit" class="submit__btn" :disabled="v$.$invalid">Send a Message</v-btn>
            <span class="submit__text">We’ll answer you in the next 24 hours</span>
          </v-sheet>
        </div>

        <div class="textarea">
          <v-textarea
            required
            no-resize
            v-model="state.comments"
            :error-messages="v$.comments.$errors.map((e) => e.$message as string)"
            @change="v$.comments.$touch"
            @blur="v$.comments.$touch"
            rows="3"
            class="comment form__input v-layout--full-height"
            variant="outlined"
            placeholder="Ask a question or leave a request"
          />
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.card__modal {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px 80px;
  border-radius: 30px;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
}

.textarea {
  width: 100%;
}

.comment {
  height: 200px;
}

.inputs {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.submit__wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  .card__modal {
    padding: 30px 40px;
  }
}
</style>
