<script lang="ts">
import { reactive, ref, Ref, UnwrapRef } from 'vue';
import bg from '@/assets/icons/bg.svg';
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import type { ContactForm } from '@/models/contactForm';
import axios from 'axios';
import { BusinessType } from '@/models/businessType';
import { useDisplay } from 'vuetify';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const initialState: ContactForm = {
      name: '',
      email: '',
      businessType: null,
      comments: '',
    };

    const businessType: Ref<UnwrapRef<BusinessType[]>> = ref([
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

    return { businessType, state, v$ };
  },
  data() {
    const router = useRoute();
    const display = useDisplay();
    return {
      bg,
      router,
      display,
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
  <div class="contact">
    <div class="contact__container">
      <div class="contact__form_wrapper">
        <div class="form__wrapper">
          <div :class="display.smAndDown ? 'd-flex flex-row justify-center' : ''">
            <div class="contact__form_title" v-if="router.path === '/'">
              <span>Contact Us</span>
            </div>
          </div>
          <v-form class="form" @submit.prevent="onSubmit">
            <div class="form__input">
              <v-text-field
                required
                v-model="state.name"
                :error-messages="v$.name.$errors.map((e) => e.$message as string)"
                @input="v$.name.$touch"
                @blur="v$.name.$touch"
                variant="outlined"
                placeholder="Your Name"
                class="input-field"
              />
            </div>
            <div class="form__input">
              <v-text-field
                required
                v-model="state.email"
                :error-messages="v$.email.$errors.map((e) => e.$message as string)"
                @input="v$.email.$touch"
                @blur="v$.email.$touch"
                @change="v$.email"
                variant="outlined"
                placeholder="Email"
                class="input-field"
              />
            </div>
            <div class="form__input">
              <v-select
                required
                v-model="state.businessType"
                :error-messages="v$.businessType.$errors.map((e) => e.$message as string)"
                @change="v$.businessType.$touch"
                @blur="v$.businessType.$touch"
                :items="businessType"
                variant="outlined"
                placeholder="Type of your Business"
                class="input-field"
              />
            </div>
            <div class="comment form__input">
              <v-textarea
                required
                no-resize
                v-model="state.comments"
                :error-messages="v$.comments.$errors.map((e) => e.$message as string)"
                @change="v$.comments.$touch"
                @blur="v$.comments.$touch"
                rows="3"
                density="comfortable"
                variant="outlined"
                placeholder="Ask a question or leave a request"
                class="input-field"
              />
            </div>

            <div class="submit__wrapper">
              <div class="submit__wrapper-btn">
                <v-btn
                  size="large"
                  type="submit"
                  color="black"
                  class="submit__btn"
                  style="text-transform: capitalize"
                  :disabled="v$.$invalid"
                  @click="snackbar.open = true"
                >
                  Send a Message
                  <v-snackbar v-if="snackbar.message" color="black" v-model="snackbar.open" close-delay="2000">
                    <p style="font-weight: bold; color: #b00020" class="text-center text-uppercase fa-bold">
                      {{ snackbar.message }} ...
                    </p>
                  </v-snackbar>
                </v-btn>
              </div>
              <div class="submit__wrapper-text">
                <span>We’ll answer you in the next 24 hours</span>
              </div>
            </div>
          </v-form>
        </div>
        <div class="contact-form__image" v-if="!display.smAndDown">
          <img :src="bg" alt="bg" class="contact-form__img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input-field {
  width: 100%;
}
.contact {
  width: 100%;
  margin: 50px 0 100px 0;
}

.contact__form_wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .form__wrapper {
    flex: 0 0 50%;
  }

  .contact-form__image {
    padding: 40px 80px;
    background: #ffffff;
    border-radius: 21px;
    flex: 0 0 45%;
  }

  @media (max-width: 999px) {
    display: block;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.contact__form_title {
  max-width: 210px;
  font-size: 23px;
  font-weight: 600;
  padding: 14px 40px;
  border: 3px solid #000000;
  border-radius: 15px;
  margin: 40px 0;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &__input {
    width: 100%;
  }
}

.submit__wrapper {
  width: 100%;
  display: flex;
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  justify-content: space-between;

  &-text {
    opacity: 0.8;
    order: 2;
    font-size: 14px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &-btn {
    max-width: 240px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .contact__form_wrapper {
    flex-direction: column;
  }

  .form__wrapper,
  .contact-form__image {
    width: 100%;
    flex: 1;
  }

  .contact__form_title {
    width: 100% !important ;
  }

  .contact-form__image {
    margin-top: 20px;
  }
}

.submit__btn {
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;

  &:disabled {
    background: #b4b4b4 !important ;
  }

  @media (max-width: 991px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
}
</style>
