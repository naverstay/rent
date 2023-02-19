<template>
  <div class="bg-gray-100">
    <section
      class="banner-section h-screen w-screen bg-no-repeat bg-cover bg-center pt-40 rounded-2xl"
    >
      <div
        class="container m-auto py-4 mt-4 text-white flex flex-col justify-between h-3/4 items-center text-center xl:text-left xl:items-start flex-nowrap p-5"
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
          <h5
            class="mb-8 font-extralight leading-5 md:leading-7 whitespace-nowrap"
          >
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
        <h5 class="mt-8">
          Rent-a-Part- это гарантированный <br />
          комфорт и сервис в путешествиях!
        </h5>
      </div>
    </section>

    <section class="container m-auto">
      <section class="text-gray-600 body-font bg-gray-100">
        <div class="container py-24 mx-auto">
          <HelloWorld />
          <SearchComponent />
          <!--          <PopularComponent />-->
        </div>
      </section>
    </section>
    <section class="container m-auto mt-10 mb-5 pl-2">
      <h2 class="mb-3">Популярные направления</h2>
      <div
        class="flex flex-row flex-nowrap overflow-x-auto gap-x-2 w-screen pr-3 py-5"
      >
        <direction-card
          v-for="(item, index) in directions"
          :key="index"
          :image="item.image"
          :title="item.title"
        />
      </div>
    </section>
    <section class="container m-auto my-10 q-px-sm">
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
              class="tracking-wider text-t4 md:text-h5 lg:text-h4 q-pa-none font-semibold"
            >
              Оставить заявку
            </p>
          </q-btn>
        </div>
      </q-card>
    </section>
    <section
      class="hosts-section full-width h-screen/3 md:h-screen/2 lg:h-screen*90 bg-no-repeat bg-cover bg-center"
    >
      <div
        class="container m-auto flex flex-col justify-between items-start full-height py-7 px-5 sm:px-0"
      >
        <div class="flex flex-col items-start">
          <r-logo
            class="mb-3"
            text_size_class="text-h5"
            text_color_class="text-white"
            :always_text="true"
          />
          <h3 class="text-white">
            Сдавайте жильё <br />
            в аренду
          </h3>
        </div>
        <q-btn
          rounded
          color="white"
          text-color="black"
          no-caps
          class="w-2/5 py-1 md:py-2 xl:py-4"
        >
          <p
            class="tracking-wider text-t3 md:text-h5 lg:text-h4 q-px-sm whitespace-nowrap font-semibold"
          >
            Узнать подробнее
          </p>
        </q-btn>
      </div>
    </section>

    <section
      class="load-app-section full-width h-screen/3 md:h-screen/2 lg:h-screen*90 bg-no-repeat bg-cover bg-center mb-5"
    >
      <div
        class="container m-auto flex flex-col justify-between items-start full-height py-7 px-5 sm:px-0"
      >
        <div class="flex flex-col items-start">
          <h3 class="text-white mb-3">
            Скачайте бесплатное <br />
            приложение
          </h3>
          <p class="font-light text-t3 text-white">
            Выбирайте маршруты, путешествуйте, <br />
            с комфортом бронируйте жилье
          </p>
        </div>
        <div class="flex flex-row items-center justify-between"></div>
        <q-btn
          rounded
          color="white"
          text-color="black"
          no-caps
          class="w-2/5 py-1 md:py-2 xl:py-4"
        >
          <p
            class="tracking-wider text-t3 md:text-h5 lg:text-h4 q-px-sm whitespace-nowrap font-semibold"
          >
            Скачать
          </p>
        </q-btn>
      </div>
    </section>

    <section class="mt-12">
      <r-contact-form />
    </section>
  </div>
</template>

<style scoped>
.banner-section {
  background-image: url("/images/index-page/main-banner-bg.png");
}
.help-section {
  background-image: url("/images/index-page/help-bg.png");
}

.load-app-section {
  background-image: url("/images/index-page/load-app-bg.png");
}

@media (min-width: 1440px) {
  .hosts-section {
    background-image: url("/images/index-page/hosts-bg-xl.png");
  }
}
@media (min-width: 1280px) and (max-width: 1440px) {
  .hosts-section {
    background-image: url("/images/index-page/hosts-bg-lg.png");
  }
}
@media (min-width: 768px) and (max-width: 1280px) {
  .hosts-section {
    background-image: url("/images/index-page/hosts-bg-md.png");
  }
}
@media (max-width: 768px) {
  .hosts-section {
    background-image: url("/images/index-page/hosts-bg-sm.png");
  }
}
</style>
<script>
import RLogo from "src/components/lib/RLogo.vue";
import RContactForm from "src/components/lib/RContactForm.vue";
import SearchComponent from "src/components/Search/SearchComponent";
import HelloWorld from "components/HelloWorld";
import MainHeader from "src/components/layouts/MainHeader.vue";
import PopularComponent from "components/Search/PopularComponent";
import DirectionCard from "src/components/Search/DirectionCard.vue";

export default {
  name: "App",
  components: {
    SearchComponent,
    MainHeader,
    HelloWorld,
    RLogo,
    PopularComponent,
    DirectionCard,
    RContactForm,
  },
  data() {
    return {
      directions: [
        {
          title: "Горные лыжи",
          image: "mountains-card",
        },
        {
          title: "Городской туризм",
          image: "city-card",
        },
        {
          title: "Пляжный отдых",
          image: "beach-card",
        },
        {
          title: "Для здоровья",
          image: "forhealth-card",
        },
      ],
    };
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
