<template>
  <div>
    <section
      class="banner-section h-screen w-screen bg-no-repeat bg-cover bg-center"
    >
      <main-header class="pt-3" />
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
          <h4 class="mb-8 leading-7 font-extralight">
            Отдых и деловые путешествия по России. <br />
            Только проверенные объекты. Без рисков
          </h4>
          <q-btn
            color="yellow"
            no-caps
            rounded
            icon-right="arrow_right_alt"
            class="font-extralight"
            size="xl"
          >
            <div class="font-extralight">Отправиться в путешествие</div>
          </q-btn>
        </div>
        <h4>
          Rent-a-Part- это гарантированный <br />
          комфорт и сервис в путешествиях!
        </h4>
      </div>
    </section>
    <div class="container m-auto">
      <section class="text-gray-600 body-font bg-gray-100">
        <div class="container px-48 py-24 mx-auto">
          <SearchComponent />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.banner-section {
  background-image: url("/images/main-banner-bg.png");
}
</style>
<script>
import RLogo from "src/components/lib/RLogo.vue";
import SearchComponent from "src/components/Search/SearchComponent";
import MainHeader from "src/components/layouts/MainHeader.vue";

export default {
  name: "App",
  components: {
    SearchComponent,
    MainHeader,
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
