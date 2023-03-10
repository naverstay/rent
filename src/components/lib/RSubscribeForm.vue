<template>
  <div class="m-auto flex flex-col

">
    <div class="flex flex-col">
      <h4 class="leading-125 tracking-1 md:mb-1">
        Хотите узнать <br/>
        больше о Rent-a-Part?
      </h4>
      <p class="font-medium opacity-50 text-[12px] leading-150 mt-1 mb-1
        md:text-[14px] md:mb-4
        lg:text-[16px] lg:mb-3
">
        Подписывайтесь на email рассылку - получайте информацию о новых
        направлениях, полезный контент и доступ к акциям.
      </p>
    </div>
    <div class="mt-4">
      <q-input
        class="full-width subscribe--dense"
        label-color="grey-6"
        rounded
        outlined
        v-model="email"
        label="Email"
      >
        <template v-slot:append>
          <div class="-mt-1">
            <q-btn
              :disable="!email"
              color="yellow"
              no-caps
              rounded
              class="font-extralight py-1 md:px-2 lg:px-6"
            >
              <span class="tracking-wider text-[12px] md:text-[14px] lg:text-[16px] font-medium">Подписаться</span>
            </q-btn>
          </div>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "RSubscribeForm",
  data() {
    return {
      email: ""
    };
  }
};
</script>
