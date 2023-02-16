<template>
  <div class="bg-gray-100">
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
        <div class="container py-24 mx-auto">
          <HelloWorld />
          <SearchComponent />
<!--          <PopularComponent />-->
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
import HelloWorld from "components/HelloWorld";
import MainHeader from "src/components/layouts/MainHeader.vue";
import PopularComponent from "components/Search/PopularComponent";

export default {
  name: "App",
  components: {
    SearchComponent,
    MainHeader,
    HelloWorld,
    RLogo,
    PopularComponent
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
