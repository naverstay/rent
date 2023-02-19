<template>
  <div class="container md:px-5 m-auto flex flex-col">
    <div class="flex flex-col">
      <h4>
        Хотите узнать <br />
        больше о Rent-a-Part?
      </h4>
      <p class="font-normal opacity-50 mt-1 mb-7">
        Подписывайтесь на email рассылку - получайте информацию <br />
        о новых направлениях, полезный контент и доступ к акциям.
      </p>
    </div>
    <div class="mt-4">
      <q-input
        class="full-width"
        label-color="grey-6"
        rounded
        outlined
        v-model="email"
        label="Ваше имя..."
      >
        <template v-slot:append>
          <div class="py-6">
            <q-btn
              :disable="!email"
              color="yellow"
              no-caps
              rounded
              class="font-extralight py-1"
            >
              <p class="tracking-wider text-t3 font-extralight">Подписаться</p>
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
      email: "",
    };
  },
};
</script>
