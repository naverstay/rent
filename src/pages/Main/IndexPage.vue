<template>
  <div class="bg-gray-100 overflow-x-hidden">
    <section
      class="banner-section flex flex-col min-h-screen w-screen bg-no-repeat bg-cover bg-center pt-24 rounded-2xl md:pt-28 lg:min-h-0"
    >
      <div
        class="container mx-auto py-4 mt-2
        text-white flex flex-col justify-between h-3/4 items-center text-center xl:text-left xl:items-start flex-nowrap p-5 flex-grow pb-7 md:pt-14 lg:flex lg:items-start lg:pb-16 xl:pb-14"
      >
        <div
          class="flex flex-col items-center text-center xl:text-left xl:items-start px-5 md:px-0 lg:mr-auto lg:items-start"
        >
          <r-logo
            class="xl:hidden mb-6"
            text_size_class="text-[18px] mr-3 md:mr-0 tracking-5 md:tracking-4 md:text-[24px]"
            text_gap_class=" "
            logo_gap_class="mr-0 small-logo md:mr-2"
            text_color_class="text-white"
            :always_text="true"
          />
          <h1
            class="mb-3 whitespace-nowrap leading-9 tracking-4 md:text-[48px] md:leading-120 lg:mb-2 xl:text-[64px] xl:tracking-3 xl:leading-115 xl:mb-4">
            Жильё и маршруты <br/>
            для ваших поездок
          </h1>
          <h5
            class="mb-4 font-normal leading-6 whitespace-nowrap text-[16px]
            md:leading-7 md:text-[20px] md:mb-6
            lg:mb-7
            xl:text-[24px] xl:leading-125 xl:mb-11"
          >
            Отдых и деловые путешествия по России. <br/>
            Только проверенные объекты. Без рисков
          </h5>
          <q-btn
            color="yellow"
            no-caps
            rounded
            icon-right="arrow_forward"
            class="font-extralight py-1 px-4 get-trip-btn
            md:py-4 md:px-6
            lg:py-4
            xl:py-3.5"
          >
            <span
              class="tracking-2 text-t1 mr-1 font-medium md:mr-2 lg:mr-4 xl:!text-[20px]">Отправиться в путешествие</span>
          </q-btn>
        </div>
        <h5
          class="mt-5 sm:mt-8 font-extra-bold text-[16px] leading-130 md:text-[20px] lg:-mb-1 xl:text-[24px] xl:leading-140">
          Rent-a-Part- это гарантированный <br/>
          комфорт и сервис в путешествиях!
        </h5>
      </div>
    </section>

    <section class="container m-auto">
      <section class="text-gray-600 body-font bg-gray-100">
        <div class="pt-10 pb-10 mx-auto
        md:px-5 md:py-16
        lg:py-20 lg:px-0
">
          <TopBlockSComponent/>
        </div>
      </section>
    </section>

    <section class="container m-auto">
      <h2 class="mb-1 sm:text-center md:text-center lg:text-left xl:text-left">
        Найти
      </h2>
      <div class="pb-12 mx-auto">
        <p
          class="title-font text-base font-medium text-gray-400 sm:text-center md:text-center lg:text-left xl:text-left">
          Аппартаменты, отель, коттедж...
        </p>
        <SearchComponent/>
      </div>
    </section>

    <section class="container m-auto mt-10 mb-5 pl-2">
      <h2 class="mb-3">Популярные направления</h2>
      <div
        class="flex flex-row flex-nowrap overflow-x-auto gap-x-2 w-screen pr-3 py-5 pr-12"
      >
        <direction-card
          v-for="(item, index) in directions"
          :key="index"
          :image="item.image"
          :title="item.title"
        />
      </div>
    </section>

    <section class="container mx-auto">
      <h2 class="mb-8">Отзывы о нас</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3">
        <ReviewsComponent/>
        <ReviewsComponent/>
        <ReviewsComponent/>
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
            Нужна помощь <br/>
            с подбором <br/>
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

    <section class="container mx-auto mt-24 mb-12">
      <div class="flex items-center mb-8">
        <span
          class="q-icon mr-3 h-6 sm:h-9"
          style="font-size: 48px"
          aria-hidden="true"
          role="presentation"
        >
          <img src="img:images/logo.svg"/>
        </span>
        <h2 class="self-center font-semibold whitespace-nowrap">
          Новости Rent-A-part
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3">
        <NewsComponent/>
        <NewsComponent/>
        <NewsComponent/>
      </div>
    </section>

    <section
      class="hosts-section full-width h-screen/2 lg:h-screen*90 bg-no-repeat bg-cover bg-center"
    >
      <div
        class="container m-auto flex flex-col justify-between items-start full-height py-7 px-5 md:px-2"
      >
        <div class="flex flex-col items-start">
          <r-logo
            class="mb-3"
            text_size_class="text-h5"
            text_color_class="text-white"
            :always_text="true"
          />
          <h3 class="text-white">
            Сдавайте жильё <br/>
            в аренду
          </h3>
        </div>
        <q-btn
          rounded
          color="white"
          text-color="black"
          no-caps
          class="w-3/5 md:w-2/5 lg:w-1/5 py-1 md:py-2 xl:py-4"
        >
          <p
            class="tracking-wider text-t3 md:text-h5 lg:text-h4 q-px-sm sm:whitespace-nowrap font-semibold px-0.5"
          >
            Узнать подробнее
          </p>
        </q-btn>
      </div>
    </section>

    <section
      class="load-app-section full-width h-screen/2 md:h-screen/2 bg-no-repeat bg-cover bg-center mb-5"
    >
      <div
        class="container m-auto flex flex-col justify-between items-start full-height py-7 px-5 md:px-2 flex-nowrap"
      >
        <div class="flex flex-col items-start">
          <h3 class="text-white mb-3">
            Скачайте бесплатное <br/>
            приложение
          </h3>
          <p class="font-light text-t3 text-white">
            Выбирайте маршруты, путешествуйте, <br/>
            с комфортом бронируйте жилье
          </p>
        </div>

        <div
          class="flex flex-row items-center justify-between my-2 lg:flex-nowrap"
        >
          <q-btn
            rounded
            color="white"
            text-color="black"
            no-caps
            class="r-hidden lg:block w-2/5 lg:w-1/5 py-1 xl:py-4"
          >
            <p
              class="tracking-wider text-t3 md:text-h5 lg:text-h4 q-px-sm whitespace-nowrap font-semibold text-center"
            >
              Скачать
            </p>
          </q-btn>
          <div
            class="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:ml-10 lg:flex-nowrap"
          >
            <div class="flex flex-row flex-nowrap gap-4 lg:gap-8">
              <img
                class="object-contain w-24 lg:w-32"
                src="/images/icons/app/nash-store.png"
                alt="App store"
              />
              <img
                class="object-contain w-24 lg:w-32"
                src="/images/icons/app/nash-store.png"
                alt="App store"
              />
            </div>

            <div>
              <img
                class="object-contain w-24 lg:w-32"
                src="/images/icons/app/nash-store.png"
                alt="App store"
              />
            </div>
          </div>
        </div>
        <q-btn
          rounded
          color="white"
          text-color="black"
          no-caps
          class="lg:hidden w-2/5 lg:w-1/5 py-1 xl:py-4"
        >
          <p
            class="tracking-wider text-t3 md:text-h5 lg:text-h4 q-px-sm whitespace-nowrap font-semibold text-center"
          >
            Скачать
          </p>
        </q-btn>
      </div>
    </section>

    <section class="container mx-auto px-5 my-12">
      <h3 class="mb-8">Акции в Rent-A-Part</h3>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StocksComponent/>
      </div>
    </section>

    <section class="container mx-auto px-5">
      <h3 class="mb-8">Наши партнеры</h3>
      <div
        class="grid grid-cols-4 gap-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2"
      >
        <PartnersComponent v-for="n in 4" :key="n"/>
      </div>
    </section>

    <section class="mt-12">
      <r-contact-form/>
    </section>
    <q-card class="rounded-2xl rounded-b-none">
      <div class="container m-auto px-5">
        <div
          class="flex flex-row items-center justify-between full-width pt-10 pb-5 gl:pb-10"
        >
          <div
            class="flex flex-row md:flex-col w-full md:w-auto justify-between flex-nowrap md:flex-wrap md:justify-start"
          >
            <r-logo
              text_size_class="text-h5"
              text_color_class="text-black"
              :always_text="true"
            />
            <div
              class="md:hidden flex flex-row items-center justify-start cursor-pointer"
            >
              <img
                class="object-contain w-10 h-8 md:hidden"
                src="/images/icons/travel-bot-icon.png"
                alt="Travel bot"
              />
              <p class="text-t3 p-0 m-0 ml-1">Трэвел-бот</p>
            </div>
            <p class="r-hidden lg:block text-t5 opacity-30 p-0">
              @Rent-a-part. Все права защищены
            </p>
          </div>
          <img class="r-hidden lg:block" src="/images/designed-by.png" alt=""/>
        </div>

        <div class="container m-auto lg:hidden">
          <r-subscribe-form/>
        </div>
        <q-separator class="r-hidden lg:block"/>
        <div
          class="flex flex-row justify-between full-width flex-col lg:flex-row lg:flex-nowrap lg:gap-7 pb-8"
        >
          <div class="flex flex-col justify-between w-full md:w-5/12">
            <div
              class="flex flex-col lg:flex-row flex-row justify-start gap-x-20 mb-4"
            >
              <r-links-list
                :allways_col="false"
                :links="travels"
                title="Путешествия"
              />
              <q-separator class="mt-4 lg:hidden"/>
              <div class="flex flex-row lg:flex-col justify-start gap-x-20">
                <r-links-list :links="excursions" title="Экскурсии"/>
                <r-links-list :links="docs" title="Документы"/>
              </div>
            </div>
            <q-separator/>
            <div class="flex flex-row justify-start gap-x-20 mb-4 lg:gap-x-24">
              <r-links-list
                :links="[
                  { label: '+8 (945) 105-43-21', link: 'tel:+79451054321' },
                ]"
                title="Телефон"
              />
              <r-links-list
                :links="[
                  {
                    label: 'info@rent-a-part.ru',
                    link: 'mailto:info@rent-a-part.ru',
                  },
                ]"
                title="Email"
              />
              <r-links-list
                class="lg:hidden"
                :links="[
                  {
                    label:
                      '119333 Москва г, Москва г,  Ленинский пр-кт, д. 57, А/Я 346',
                    link: '',
                  },
                ]"
                title="Адрес"
              />
            </div>
            <q-separator class="r-hidden lg:block"/>
            <div
              class="r-hidden lg:block flex flex-row justify-between full-width mb-4"
            >
              <r-links-list
                :links="[
                  {
                    label:
                      '119333 Москва г, Москва г,  Ленинский пр-кт, д. 57, А/Я 346',
                    link: '',
                  },
                ]"
                title="Адрес"
              />
            </div>
          </div>

          <div
            class="flex flex-col justify-between w-full md:w-7/12 full-height mt-4"
          >
            <r-subscribe-form class="r-hidden lg:block"/>
            <div class="my-3 mb-5 lg:my-12 lg:ml-4">
              <div class="text-t4 mb-2">Загружайте наше приложение:</div>
              <div
                class="flex flex-row justify-between flex-nowrap md:flex-wrap gap-3 lg:gap-0.5"
              >
                <img
                  class="object-contain w-3/12 md:w-48"
                  src="/images/app-store-btn.png"
                  alt="App store"
                />
                <img
                  class="object-contain w-3/12 md:w-48"
                  src="/images/google-play-btn.png"
                  alt="Google play"
                />
                <img
                  class="object-contain w-3/12 md:w-48"
                  src="/images/nash-store-btn.png"
                  alt="Nash store"
                />
              </div>
            </div>
            <div
              class="flex flex-row no-wrap justify-between items-center lg:justify-start gap-5 lg:ml-4"
            >
              <p class="lg:hidden text-t5 opacity-30 p-0">
                @Rent-a-part. <br/>
                Все права защищены
              </p>
              <img
                class="object-contain w-8 h-8 lg:w-auto lg:h-auto"
                src="/images/icons/vk-icon.png"
                alt="VK"
              />
              <img
                class="object-contain w-8 h-8 lg:w-auto lg:h-auto"
                src="/images/icons/telegram-icon.png"
                alt="Telegram"
              />
              <div
                class="r-hidden md:flex flex flex-row items-center justify-start cursor-pointer"
              >
                <img
                  class="object-contan w-8 h-8 lg:w-auto lg:h-auto"
                  src="/images/icons/travel-bot-icon.png"
                  alt="Travel bot"
                />
                <p class="text-t3 p-0 m-0 ml-3">Трэвел-бот</p>
              </div>
              <img
                class="w-24 h-8 lg:hidden"
                src="/images/designed-by.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<style scoped>
.banner-section {
  background-image: url("/images/index-page/main-banner-bg.png");
}

@media (min-width: 1920px) {
  .banner-section {
    min-height: 46.875vh;
  }

  .banner-section .container {
    padding-bottom: 4rem;
  }
}

@media (min-width: 1440px) {
  .hosts-section {
    background-image: url("/images/index-page/hosts-section/hosts-bg-xl.png");
  }

  .banner-section {
    min-height: 56.5vh;
  }

  .help-section {
    background-image: url("/images/index-page/help-section/help-bg-xl.jpg");
  }

  .load-app-section {
    background-image: url("/images/index-page/load-app-section/load-app-bg-xl.jpg");
  }
}

@media (min-width: 1280px) and (max-width: 1440px) {
  .hosts-section {
    background-image: url("/images/index-page/hosts-section/hosts-bg-lg.png");
  }

  .banner-section {
    min-height: 62.75vh;
  }

  .help-section {
    background-image: url("/images/index-page/help-section/help-bg-lg.jpg");
  }

  .load-app-section {
    background-image: url("/images/index-page/load-app-section/load-app-bg-lg.jpg");
  }
}

@media (min-width: 768px) and (max-width: 1280px) {
  .hosts-section {
    background-image: url("/images/index-page/hosts-section/hosts-bg-md.png");
  }

  .help-section {
    background-image: url("/images/index-page/help-section/help-bg-md.jpg");
  }

  .load-app-section {
    background-image: url("/images/index-page/load-app-section/load-app-bg-md.jpg");
  }
}

@media (max-width: 768px) {
  .hosts-section {
    background-image: url("/images/index-page/hosts-section/hosts-bg-sm.png");
  }

  .help-section {
    background-image: url("/images/index-page/help-section/help-bg-sm.jpg");
  }

  .load-app-section {
    background-image: url("/images/index-page/load-app-section/load-app-bg-sm.jpg");
  }
}
</style>
<script>
import RLogo from "src/components/lib/RLogo.vue";
import RContactForm from "src/components/lib/RContactForm.vue";
import RSubscribeForm from "src/components/lib/RSubscribeForm.vue";
import SearchComponent from "src/components/Search/SearchComponent";
import RLinksList from "src/components/lib/RLinksList.vue";
import TopBlockSComponent from "components/TopBlockSComponent";
import MainHeader from "src/components/layouts/MainHeader.vue";
import DirectionCard from "src/components/Search/DirectionCard.vue";
import ReviewsComponent from "components/Search/ReviewsComponent";
import NewsComponent from "components/Search/NewsComponent";
import StocksComponent from "components/Search/StocksComponent";
import PartnersComponent from "components/Search/PartnersComponent";

export default {
  name: "App",
  components: {
    PartnersComponent,
    StocksComponent,
    SearchComponent,
    MainHeader,
    TopBlockSComponent,
    RLogo,
    DirectionCard,
    RLinksList,
    RContactForm,
    RSubscribeForm,
    ReviewsComponent,
    NewsComponent
  },
  data() {
    return {
      directions: [
        {
          title: "Горные лыжи",
          image: "mountains-card"
        },
        {
          title: "Городской туризм",
          image: "city-card"
        },
        {
          title: "Пляжный отдых",
          image: "beach-card"
        },
        {
          title: "Для здоровья",
          image: "forhealth-card"
        }
      ],
      excursions: [
        {
          label: "Плато",
          link: "#"
        },
        {
          label: "Ярус",
          link: "#"
        },
        {
          label: "Новые горизонты",
          link: "#"
        }
      ],
      docs: [
        {
          label: "Правила пользования",
          link: "#"
        },
        {
          label: "Условия Бронирования",
          link: "#"
        },
        {
          label: "Правила оплаты",
          link: "#"
        }
      ],
      travels: [
        {
          label: "Шерегеш",
          link: "#"
        },
        {
          label: "Краснодарский край",
          link: "#"
        },
        {
          label: "Ставропольский край",
          link: "#"
        },
        {
          label: "Казань",
          link: "#"
        },
        {
          label: "Кировск",
          link: "#"
        },
        {
          label: "Крым",
          link: "#"
        },
        {
          label: "Мурманск",
          link: "#"
        },
        {
          label: "Санкт-Петербург",
          link: "#"
        }
      ]
    };
  }
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
