<template>
  <div class="container px-4 m-auto flex flex-col items-start
  md:!px-9
  lg:!px-4 lg:-mt-2
">
    <div class="flex flex-col">
      <h3 class="font-bold tracking-2 leading-100 mb-1.5
        lg:tracking-1 lg:mb-3
        xl:mb-2
">
        Не можете <br class="lg:hidden"/>
        выбрать жилье?
      </h3>
      <p class="font-normal text-[16px] leading-140 opacity-50 mt-1 mb-7 max-w-[180px]
      md:max-w-none md:text-[20px]
      lg:mb-10
      xl:text-[24px] xl:mb-7
">
        Оставьте заявку - мы перезвоним и поможем
      </p>
    </div>
    <div
      class="flex flex-col items-center justify-between no-wrap gap-4 mb-4 w-screen*90 w-auto full-width
      lg:flex-row lg:gap-5 lg:mb-5
"
    >
      <q-input
        class="full-width mobile--dense"
        label-color="grey-6"
        rounded
        outlined
        v-model="name"
        label="Ваше имя..."
      />
      <q-input
        class="full-width mobile--dense"
        label-color="grey-6"
        rounded
        outlined
        v-model="email"
        label="Email..."
      />
      <q-input
        class="full-width mobile--dense"
        input-class="contact__input-inner"
        label-color="grey-6"
        rounded
        outlined
        v-model="phone"
        label="Телефон"
      />
    </div>
    <div
      class="flex flex-col lg:flex-row no-wrap items-center justify-between gap-8 text-t2 mb-10 full-width
       md:mb-16
       lg:gap-10
"
    >
      <div class="flex flex-row no-wrap full-width items-center
         lg:!w-4/6">
        <q-checkbox
          v-model="allowRules"
          checked-icon="radio_button_checked"
          unchecked-icon="radio_button_unchecked"
          style="margin-left: -10px"
        />
        <p class="text-[12px] leading-150
        md:text-[14px]
        lg:text-[16px]
">
          Нажимая на кнопку “Отправить заявку”, я соглашаюсь с политикой
          обработки
          <r-inline-button href="#" label="персональных данных"/>
        </p>
      </div>
      <q-btn
        color="yellow"
        no-caps
        rounded
        class="font-extralight py-1 w-full
         md:py-3
         lg:w-2/6
"
      >
        <span class="tracking-wider text-[16px] font-medium
         md:text-[20px] ">Оставить заявку</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
import RInlineButton from "./RInlineButton.vue";

export default {
  name: "RContactForm",
  components: {
    RInlineButton
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      allowRules: false
    };
  }
};
</script>
