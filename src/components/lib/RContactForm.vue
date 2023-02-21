<template>
  <div class="container px-5 m-auto flex flex-col">
    <div class="flex flex-col">
      <h3>Не можете выбрать жилье?</h3>
      <p class="font-normal opacity-50 mt-1 mb-7">
        Оставьте заявку - мы перезвоним и поможем
      </p>
    </div>
    <div
      class="flex flex-col md:flex-row items-center justify-between no-wrap gap-5 md:gap-2 mb-7 w-screen*90 sm:w-auto"
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
      class="flex flex-col md:flex-row no-wrap items-center justify-between gap-5 text-t2 mb-8"
    >
      <div class="flex flex-row no-wrap">
        <q-checkbox
          v-model="allowRules"
          checked-icon="radio_button_checked"
          unchecked-icon="radio_button_unchecked"
        />
        <p class="text-t3 whitespace-nowrap">
          Нажимая на кнопку “Отправить заявку”, я соглашаюсь <br />
          с политикой обработки персональных данных
        </p>
      </div>
      <q-btn
        color="yellow"
        no-caps
        rounded
        class="font-extralight py-1 md:py-2 xl:py-4 w-full md:w-2/5"
      >
        <p class="tracking-wider text-t1 font-extralight">Оставить заявку</p>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "RContactForm",
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
