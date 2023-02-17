<template>
  <div>
    <section
      class="banner-section h-screen w-screen bg-no-repeat bg-cover bg-center pt-40 rounded-2xl"
    >
      <div
        class="container m-auto py-4 mt-4 text-white flex flex-col justify-between h-3/4 items-center text-center xl:text-left xl:items-start"
      >
        <div
          class="flex flex-col items-center text-center xl:text-left xl:items-start px-4 md:px-0"
        >
          <r-logo
            class="xl:hidden mb-5"
            text_size_class="text-h5"
            text_color_class="text-white"
            :always_text="true"
          />
          <h1 class="mb-6">
            Жильё и маршруты <br />
            для ваших поездок
          </h1>
          <h5 class="mb-8 font-extralight leading-5 md:leading-7">
            Отдых и деловые путешествия по России. <br />
            Только проверенные объекты. Без рисков
          </h5>
          <q-btn
            color="yellow"
            no-caps
            rounded
            icon-right="arrow_right_alt"
            class="font-extralight py-1 md:py-2 xl:py-4"
          >
            <p class="tracking-wider text-t1 font-extralight">
              Отправиться в путешествие
            </p>
          </q-btn>
        </div>
        <h5>
          Rent-a-Part- это гарантированный <br />
          комфорт и сервис в путешествиях!
        </h5>
      </div>
    </section>
    <div class="container m-auto">
      <section class="text-gray-600 body-font bg-gray-100">
        <div class="container px-48 py-24 mx-auto">
          <SearchComponent />
        </div>
      </section>
    </div>
    <div class="container m-auto my-10 q-px-sm">
      <q-card
        class="w-full h-48 md:h-80 lg:h-96 help-section bg-no-repeat bg-contain bg-right-bottom rounded-2xl"
      >
        <div
          class="flex flex-col h-full justify-between align-start p-5 md:p-7"
        >
          <h3>
            Нужна помощь <br />
            с подбором <br />
            жилья?
          </h3>
          <q-btn
            rounded
            color="black"
            text-color="white"
            class="w-1/3 py-1 md:py-2 xl:py-4"
          >
            <p
              class="tracking-wider text-t5 md:text-t3 lg:text-t4 q-pa-none whitespace-nowrap"
            >
              Оставить заявку
            </p>
          </q-btn>
        </div>
      </q-card>
    </div>
  </div>
</template>

<style scoped>
.banner-section {
  background-image: url("/images/index-page/main-banner-bg.png");
}
.help-section {
  background-image: url("/images/index-page/help-bg.png");
}
</style>
<script>
import RLogo from "src/components/lib/RLogo.vue";
import SearchComponent from "src/components/Search/SearchComponent";

export default {
  name: "App",
  components: {
    SearchComponent,
    RLogo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
