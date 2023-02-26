<template>
  <div class="container px-5 m-auto flex flex-col items-start">
    <div class="flex flex-col ml-1">
      <h3>
        Не можете <br class="md:hidden" />
        выбрать жилье?
      </h3>
      <p class="font-normal opacity-50 mt-1 mb-7">
        Оставьте заявку - мы перезвоним и поможем
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row items-center justify-between no-wrap gap-5 md:gap-2 mb-7 w-screen*90 sm:w-auto full-width"
    >
      <q-input
        class="full-width"
        label-color="grey-6"
        rounded
        outlined
        v-model="name"
        label="Ваше имя..."
      />
      <q-input
        class="full-width"
        label-color="grey-6"
        rounded
        outlined
        v-model="email"
        label="Email..."
      />
      <q-input
        class="full-width"
        input-class="contact__input-inner"
        label-color="grey-6"
        rounded
        outlined
        v-model="phone"
        label="Телефон"
      />
    </div>
    <div
      class="flex flex-col md:flex-row no-wrap items-center justify-between gap-5 text-t2 mb-8 full-width"
    >
      <div class="flex flex-row no-wrap full-width items-center">
        <q-checkbox
          v-model="allowRules"
          checked-icon="radio_button_checked"
          unchecked-icon="radio_button_unchecked"
          style="margin-left: -9px"
        />
        <p class="text-t3 w-4/5">
          Нажимая на кнопку “Отправить заявку”, я соглашаюсь с политикой
          обработки
          <r-inline-button href="#" label="персональных данных" />
        </p>
      </div>
      <q-btn
        color="yellow"
        no-caps
        rounded
        class="font-extralight py-1 md:py-2 xl:py-4 w-full md:w-2/5"
      >
        <p class="tracking-wider text-t1 font-medium">Оставить заявку</p>
      </q-btn>
    </div>
  </div>
</template>

<script>
import RInlineButton from "./RInlineButton.vue";
export default {
  name: "RContactForm",
  components: {
    RInlineButton,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      allowRules: false,
    };
  },
};
</script>
