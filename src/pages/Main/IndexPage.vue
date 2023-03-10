<template>
  <ModalComponent :open="test"/>
  <div class="bg-gray-100">
    <section
      class="banner-section flex flex-col min-h-screen w-screen bg-no-repeat bg-cover bg-center pt-24 rounded-2xl md:pt-28 lg:min-h-0"
    >
      <div
        class="container mx-auto py-4 mt-2 text-white flex flex-col justify-between h-3/4 items-center flex-nowrap p-5 flex-grow pb-7 text-center
         md:pt-14 md:pb-16
         lg:flex lg:items-start lg:pb-16
         lg:!px-6 xl:text-left xl:items-start xl:pb-14
         xxl:!px-2"
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
            class="mb-3 whitespace-nowrap leading-9 tracking-1
            md:text-[48px] md:leading-120
            lg:mb-3 lg:pt-1 lg:leading-110
            xl:text-[64px] xl:mb-4">
            Жильё и маршруты <br/>
            для ваших поездок
          </h1>
          <h5
            class="mb-4 font-normal leading-6 whitespace-nowrap text-[16px]
            md:leading-7 md:text-[20px] md:mb-6
            lg:mb-7
            xl:text-[24px] xl:leading-140 xl:mb-10"
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
              class="tracking-2 text-t1 mr-1 font-medium md:mr-2 lg:mr-4 xl:!text-[20px] text-helvetica-neue">Отправиться в путешествие</span>
          </q-btn>
        </div>
        <h5
          class="mt-5 sm:mt-8 font-bold tracking-2 text-[16px] leading-130
          md:text-[20px]
          lg:-mb-1 lg:text-left
          xl:text-[24px] xl:leading-140">
          Rent-a-Part- это гарантированный <br/>
          комфорт и сервис в путешествиях!
        </h5>
      </div>
    </section>

    <section class="container m-auto text-gray-600 body-font bg-gray-100">
      <div class="py-10 mx-auto
        md:py-16
        lg:-mx-[20px]
        lg:pt-20 lg:pb-14 lg:px-0 lg:mb-20
">
        <TopBlockSComponent/>
      </div>
    </section>

    <section class="container m-auto">
      <div class="lg:-mx-[20px]">
        <h2 class="mb-1 tracking-2 text-center
        md:text-center
        lg:text-left lg:mb-3
">Найти</h2>
        <div class="pb-12 mx-auto">
          <p class="text-[16px] font-medium text-gray-400 text-center leading-140 opacity-50 tracking-1
        md:py-1 md:text-[20px]
        lg:text-left lg:text-[24px] xl:pb-3


">
            Аппартаменты, отель, коттедж...
          </p>
          <SearchComponent/>
        </div>
      </div>
    </section>

    <section class="container m-auto mt-8 mb-14
    md:mb-14
    lg:mb-24 lg:mt-20
    xl:mt-14
    xxl:mb-20
">
      <div class="md:-mx-[20px] xl:pt-4">
        <div class="flex">
          <h2 class="mb-5 tracking-2
        md:mb-4
        xl:mb-5
">Популярные направления</h2>
          <div class="ml-auto hidden lg:!flex -mr-3">
            <div class="cursor-pointer flex relative swiper-button swiper-button-prev w-10 h-10 items-center dirPrev">
              <q-icon name="chevron_left" class="absolute text-[2.5rem]"/>
            </div>
            <div class="cursor-pointer flex relative swiper-button swiper-button-next w-10 h-10 items-center dirNext">
              <q-icon name="chevron_right" class="absolute text-[2.5rem]"/>
            </div>
          </div>
        </div>

        <div class="py-5 pr-4 lg:pr-12">
          <swiper
            class="!overflow-visible"
            :slidesPerView="'auto'"
            :slidesPerChange="1"
            :spaceBetween="0"
            freeMode
            :navigation="{ nextEl: '.dirPrev', prevEl: '.dirNext'}"
            :modules="swiperModules"
            @init="onInit"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(item, index) in directions"
                          :key="index"
                          class="!w-auto">
              <direction-card
                :image="item.image"
                :title="item.title"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="container mx-auto">
      <div class="lg:-mx-[20px] xxl:pt-6">
        <div class="flex">
          <h2 class="mb-3 md:mb-4">Отзывы о нас</h2>
          <div class="ml-auto hidden lg:!flex -mr-3">
            <div class="cursor-pointer flex relative swiper-button swiper-button-prev w-10 h-10 items-center revPrev">
              <q-icon name="chevron_left" class="absolute text-[2.5rem]"/>
            </div>
            <div class="cursor-pointer flex relative swiper-button swiper-button-next w-10 h-10 items-center revNext">
              <q-icon name="chevron_right" class="absolute text-[2.5rem]"/>
            </div>
          </div>
        </div>
        <p class="cursor-pointer" @click="test = true">Показать модальное окно</p>

        <div class="py-5">
          <swiper
            class="!overflow-visible"
            :slidesPerView="'auto'"
            :slidesPerChange="1"
            :spaceBetween="0"
            freeMode
            :navigation="{ nextEl: '.revPrev', prevEl: '.revNext'}"
            :modules="swiperModules"
            @init="onInit"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="!w-auto">
              <ReviewsComponent/>
            </swiper-slide>
            <swiper-slide class="!w-auto">
              <ReviewsComponent/>
            </swiper-slide>
            <swiper-slide class="!w-auto">
              <ReviewsComponent/>
            </swiper-slide>
            <swiper-slide class="!w-auto">
              <ReviewsComponent/>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="container m-auto my-12 q-px-sm
    md:mt-14
    lg:mt-24
    xl:mt-28
    xxl:mt-20
    xxl:pt-2
">
      <div class="lg:-mx-[20px] xl:pt-4">
        <q-card
          class="w-full h-[226px] help-section bg-no-repeat bg-contain bg-right-bottom rounded-[20px]
        md:h-[270px]
        lg:h-[612px]
">
          <div class="flex flex-col h-full justify-between align-start p-5
        md:p-7
        lg:pt-16 lg:px-9 lg:pb-14
">
            <h3 class="lg:max-w-[490px]
    lg:text-[64px]
    lg:mx-5
">Нужна помощь с&nbsp;<span class="lg:hidden"><br/></span>подбором жилья?</h3>
            <div class="md:pb-1 xl:ml-5">
              <q-btn
                rounded
                color="black"
                text-color="white"
                size="xs md:l"
                class="flex items-center flex-col px-3 py-1.5 order-btn
              md:py-3 md:px-4
              lg:py-1.5
              xl:py-2"
              >
            <span class="tracking-wider whitespace-nowrap text-[8px] q-pa-none font-bold
            md:text-[16px] md:-tracking-2 leading-100
            lg:text-[20px] lg:py-2.5 lg:px-2
            xl:py-2
">Оставить заявку</span>
              </q-btn>
            </div>
          </div>
        </q-card>
      </div>
    </section>

    <section class="container mx-auto mt-16 mb-10 pt-2
    md:pt-4 md:mb-10
    lg:mt-24
    xl:mt-20
">
      <div class="lg:-mx-[20px] xl:pt-4">
        <div class="flex items-center mb-5 lg:pt-2">
          <div class="flex items-center">
                    <span
                      class="q-icon mr-3 text-[48px]
          md:text-[66px] md:mr-6
          lg:text-[74px]
"
                      aria-hidden="true"
                      role="presentation"
                    >
          <q-icon class="" name="img:images/logo.svg"/>
        </span>
            <h2 class="self-center font-bold tracking-3 whitespace-nowrap">
              Новости<br/>
              Rent-a-Part
            </h2>
          </div>
          <div class="ml-auto hidden lg:!flex -mr-3">
            <div class="cursor-pointer flex relative swiper-button swiper-button-prev w-10 h-10 items-center newsPrev">
              <q-icon name="chevron_left" class="absolute text-[2.5rem]"/>
            </div>
            <div class="cursor-pointer flex relative swiper-button swiper-button-next w-10 h-10 items-center newsNext">
              <q-icon name="chevron_right" class="absolute text-[2.5rem]"/>
            </div>
          </div>
        </div>

        <div class="py-5 pr-4 lg:pr-12">
          <swiper
            class="!overflow-visible"
            :slidesPerView="'auto'"
            :slidesPerChange="1"
            :spaceBetween="0"
            freeMode
            :navigation="{ nextEl: '.newsPrev', prevEl: '.newsNext'}"
            :modules="swiperModules"
            @init="onInit"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide class="!w-auto">
              <NewsComponent/>
            </swiper-slide>
            <swiper-slide class="!w-auto">
              <NewsComponent/>
            </swiper-slide>
            <swiper-slide class="!w-auto">
              <NewsComponent/>
            </swiper-slide>
            <swiper-slide class="!w-auto">
              <NewsComponent/>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section
      class="hosts-section full-width h-[343px] bg-no-repeat bg-cover bg-center
    md:h-[867px]
    lg:h-[700px]
    xl:h-[800px]
    xxl:container xxl:!mx-auto xxl:rounded-[20px] xxl:mt-24 xxl:mb-16
"
    >
      <div
        class="container m-auto flex flex-col justify-between items-start full-height pt-7 pb-8 px-5
         md:px-2 md:pt-14 md:pb-14
         lg:!px-5 lg:pt-14 lg:pb-14
"
      >
        <div class="flex flex-col items-start md:mt-1">
          <r-logo
            class="mb-3 md:mb-6 lg:mb-8"
            text_size_class="text-[9px] tracking-5 md:tracking-1 md:text-[22px] lg:text-[30px] xl:text-[32px]"
            text_color_class="text-white"
            logo_gap_class="mr-1 !text-[14px] md:mr-2 md:!text-[32px] lg:!text-[42px] lg:mr-4"
            :always_text="true"
            :logo_white="true"
          />
          <h3 class="text-white leading-120 text-[24px] md:text-[48px] lg:text-[64px] lg:leading-110">
            Сдавайте жильё <br/>
            в аренду
          </h3>
        </div>
        <q-btn
          rounded
          color="white"
          text-color="black"
          no-caps
          size="xs md:l"
          class="flex items-center flex-col px-4 py-2 leading-100 order-btn
              md:py-3 md:px-4 md:mb-1
              lg:py-1.5
              xl:mb-0
"
        >
          <span
            class="tracking-wider uppercase leading-100 whitespace-nowrap text-[7px] q-pa-none font-bold
            md:text-[16px] md:-tracking-2
            lg:text-[20px] lg:py-2.5 lg:px-2

"
          >Узнать подробнее</span>
        </q-btn>
      </div>
    </section>

    <section
      class="load-app-section full-width h-[348px] bg-no-repeat bg-cover bg-center mb-5
         md:h-[404px]
         lg:h-[408px]
         xxl:container xxl:!mx-auto xxl:rounded-[20px] xxl:mt-16 xxl:mb-16
"
    >
      <div
        class="container m-auto flex flex-nowrap flex-col justify-between items-start full-height py-7 px-8
        md:px-2 md:py-10
        lg:!px-5
"
      >
        <div class="flex flex-col items-start lg:mt-6">
          <h3 class="text-white mb-2 leading-115
          md:text-[28px] md:leading-125 md:mb-3
          lg:text-[48px] lg:leading-100 lg:mb-5
          xxl:mb-3
">
            Скачайте бесплатное <br/>
            приложение
          </h3>
          <p class="font-light text-white text-[12px] leading-150
            md:text-[14px] md:leading-125
            lg:text-[20px]
">
            Выбирайте маршруты, путешествуйте, <br/>
            с комфортом бронируйте жилье
          </p>
        </div>

        <div class="flex flex-col justify-between pt-5 pb-1 flex-grow items-start
         md:pt-8 md:pb-0
         lg:flex-nowrap lg:flex-row lg:items-center lg:mt-auto lg:pt-14
">
          <div class="flex flex-row gap-4
            md:gap-12 md:-ml-1
            lg:mx-12 lg:flex-nowrap lg:gap-14
">
            <a href="#" class="w-[59px] md:w-[118px] lg:w-[145px]">
              <img
                class="object-contain w-full"
                src="/images/icons/app/as.svg"
                alt="App store"
              />
            </a>
            <a href="#" class="w-[63px] md:w-[129px] lg:w-[155px]">
              <img
                class="object-contain w-full"
                src="/images/icons/app/gp.svg"
                alt="Google Play"
              />
            </a>
          </div>

          <a href="#" class="w-[74px] mt-5
           md:w-[148px] md:mt-6
           lg:w-[181px] lg:mt-0 lg:ml-2
">
            <img
              class="object-contain w-full"
              src="/images/icons/app/ns.svg"
              alt="Nash Store"
            />
          </a>

          <q-btn
            rounded
            color="white"
            text-color="black"
            no-caps
            size="xs md:l"
            class="py-2 px-8 mt-auto order-btn
             md:py-3 md:px-6
             lg:-order-1 lg:mt-0 lg:py-3 lg:px-4
"
          >
            <span
              class="tracking-wider text-[8px] leading-100 q-px-sm whitespace-nowrap font-semibold text-center uppercase
              md:text-[16px]
              lg:text-h4 lg:normal-case lg:text-[20px]
">Скачать</span>
          </q-btn>
        </div>
      </div>
    </section>

    <section class="container mx-auto mt-10 mb-20
      md:mt-16 md:mb-30
      lg:!px-5
">
      <h3 class="mb-5 text-center tracking-1
      md:text-left md:mb-9
      lg:tracking-2
">Акции в Rent-A-Part</h3>
      <div class="">
        <StocksComponent/>
      </div>
    </section>

    <section class="container mx-auto pb-10 mb-7
    md:pt-10
    lg:!px-5 xxl:pt-12 lg:mb-16 ">
      <div class="md:flex">
        <h3 class="mb-7 text-center tracking-1
      md:text-left md:mb-10
      lg:mb-14
">Наши партнеры</h3>
        <div class="ml-auto hidden lg:!flex -mr-3">
          <div class="cursor-pointer flex relative swiper-button swiper-button-prev w-10 h-10 items-center partPrev">
            <q-icon name="chevron_left" class="absolute text-[2.5rem]"/>
          </div>
          <div class="cursor-pointer flex relative swiper-button swiper-button-next w-10 h-10 items-center partNext">
            <q-icon name="chevron_right" class="absolute text-[2.5rem]"/>
          </div>
        </div>
      </div>

      <div class="partners-holder">
        <swiper
          class="!overflow-visible"
          :slidesPerView="'auto'"
          :slidesPerChange="1"
          :spaceBetween="0"
          :breakpoints="{ 768: 'destroy' }"
          freeMode
          :navigation="{ nextEl: '.partPrev', prevEl: '.partNext'}"
          :modules="swiperModules"
          @init="onInit"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="n in 4"
                        :key="n"
                        class="!w-auto">
            <PartnersComponent :index="n"/>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="container mx-auto !px-5 text-white
     md:pt-8
     lg:pb-16
     xxl:pt-5">
      <div class="rounded-[20px] relative region-image p-5
        h-[708px]
        md:h-[984px] md:mx-5 md:p-7
        lg:h-[615px] lg:mx-0 lg:p-16 lg:pb-14
">
        <div class="h-full flex flex-col items-start lg:-mt-1 lg:-mx-1">
          <div class="rounded-[50px] mb-8 border border-2 border-white py-2 px-3 text-[8px] font-semibold leading-100
      md:text-[16px] md:py-3 md:px-4 md:mb-7
      lg:px-6 lg:mb-8
">Регион месяца
          </div>

          <h3 class="mb-5 text-[40px] text-yauzatygra leading-115
      md:text-[64px] md:mb-4
      lg:mb-5 lg:text-[88px]
">Крым</h3>
          <div class="text-[12px] text-helvetica-neue font-medium leading-125
      md:text-[16px]
      lg:text-[14px] lg:font-normal lg:w-3/5
">
            Горнолыжный курорт Роза Хутор находится в Краснодарском крае в 50 км от Чёрного моря, у подножия Главного
            Кавказского хребта. Горнолыжная инфраструктура расположена на склоне хребта Аибга. На курорте кататься можно
            не
            только на лыжах, но и на санях и «ватрушках» (на специальной трассе), собачьих упряжках и на коньках. А еще
            есть
            родельбан с тремя кольцами-виражами. Другие популярные развлечения — вылетающие за край обрыва горные качели
            на
            Пике, парапланы в тандеме с инструктором, термальные комплексы, бассейны и многое другое.
          </div>
          <q-btn
            rounded
            color="white"
            text-color="black"
            no-caps
            size="xs md:l"
            class="py-2 px-8 mt-auto order-btn
             md:px-6 md:py-3
             lg:py-3 lg:px-4
"
          >
            <span
              class="tracking-wider uppercase leading-100 whitespace-nowrap text-[7px] q-pa-none font-bold
            md:text-[16px] md:-tracking-2
            lg:text-[20px] lg:py-1.5 lg:px-2
"
            >Читать далее</span>
          </q-btn>
        </div>
      </div>
    </section>

    <section class="mt-10 md:mt-16">
      <r-contact-form/>
    </section>

    <q-card class="rounded-[20px] rounded-b-none shadow-none footer-holder">
      <div class="container m-auto px-5 lg:!px-5 flex footer-grid lg:grid lg:gap-x-8">
        <div class="footer-logo flex -order-2 flex-row items-center justify-between full-width pt-6 pb-5
        md:pt-10 md:pb-7
        lg:pt-16 lg:pb-[3rem] lg:mb-2 lg:gap-4
        xl:pb-10">
          <div
            class="flex flex-row md:flex-col w-full md:w-auto justify-between flex-nowrap md:flex-wrap md:justify-start">
            <r-logo
              logo_gap_class="mr-2 !text-[20px] md:mr-3 lg:!text-[32px] lg:mr-4"
              text_size_class="text-[14px] md:text-[18px] lg:text-[22px] "
              text_color_class="text-black"
              :always_text="true"
            />
          </div>
        </div>

        <!--        <div class="flex flex-row justify-between full-width flex-col lg:flex-row lg:flex-nowrap lg:gap-7 pb-8 pt-4">-->
        <div class="footer-menu flex flex-col justify-between w-full

">
          <div class="flex flex-col lg:flex-row flex-row justify-start gap-x-20 mb-4
          lg:mb-3 lg:gap-x-10">
            <r-links-list
              :allways_col="false"
              :links="travels"
              title="Путешествия"
            />

            <q-separator class="mt-4 md:mb-2 lg:hidden footer-separator"/>

            <div class="flex flex-col sm:flex-row lg:flex-col justify-start gap-x-20
            md:gap-x-10">
              <r-links-list :links="excursions" title="Экскурсии"/>
              <r-links-list :links="docs" title="Документы"/>
            </div>
          </div>

          <q-separator class="md:mb-2 lg:mb-0 footer-separator"/>

          <div class="flex flex-row justify-start gap-x-20 mb-4
          md:gap-x-10 md:mb-0
          lg:pt-2
          ">
            <r-links-list
              :links="[
                  { label: '+8 (945) 105-43-21', link: 'tel:+79451054321' },
                ]"
              label_cls="mt-5 mb-2 lg:mb-3"
              title="Телефон"
            />
            <r-links-list
              :links="[
                  {
                    label: 'info@rent-a-part.ru',
                    link: 'mailto:info@rent-a-part.ru',
                  },
                ]"
              label_cls="mt-5 mb-2 lg:mb-3"
              title="Email"
            />
            <r-links-list
              class="md:max-w-[250px] lg:max-w-none"
              :links="[
                  {
                    label:
                      '119333 Москва г, Москва г,  Ленинский пр-кт, д. 57, А/Я 346',
                    link: '',
                  },
                ]"
              label_cls="mt-7 mb-2 md:mt-5 lg:my-3"
              title="Адрес"
            />
          </div>

          <q-separator class="r-hidden lg:block footer-separator"/>

        </div>

        <div class="footer-form -order-1 mb-4
        md:mb-1
        lg:order-0 lg:pt-5
">
          <r-subscribe-form/>
        </div>

        <div class="footer-contacts flex flex-col justify-between w-full full-height mt-4
        lg:mt-10 lg:block
">
          <div class="my-3 mb-5
           md:mt-2
           lg:mt-4 lg:mb-10 ">
            <div class="text-[12px] mb-2 leading-140 font-medium
    md:text-[15px] lg:text-[14.5px]
">Загружайте <br class="md:hidden"/> наше приложение:
            </div>
            <div
              class="flex flex-row items-center justify-between flex-nowrap gap-3
              md:gap-7 md:justify-start
              lg:gap-3 lg:justify-between"
            >
              <div class="w-[92px] md:w-[140px] lg:w-[158px]">
                <img
                  class="object-contain"
                  src="/images/app-store-btn.png"
                  alt="App store"
                />
              </div>
              <div class="w-[96px] md:w-[144px] lg:w-[162px]">
                <img
                  class="object-contain"
                  src="/images/google-play-btn.png"
                  alt="Google play"
                />
              </div>

              <div class="w-[113px] md:w-[172px] lg:w-[192px]">
                <img
                  class="object-contain"
                  src="/images/nash-store-btn.png"
                  alt="Nash store"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-row no-wrap justify-between items-center pt-2 pb-4 gap-1
          md:pt-6 md:gap-3
          lg:justify-start
">
            <p class="text-[8px] p-0 mr-auto
             md:text-[9.5px] lg:opacity-30
             lg:absolute lg:top-[6rem] lg:left-[3.75rem] lg:text-[12.5px]
">
              @Rent-a-part. Все права защищены
            </p>
            <a href="#" class="w-6 h-6 md:w-12 md:h-12 ">
              <img
                class="object-contain"
                src="/images/icons/vk-icon.png"
                alt="VK"
              />
            </a>

            <a href="#" class="w-6 h-6 md:w-12 md:h-12 ">
              <img
                class="object-contain"
                src="/images/icons/telegram-icon.png"
                alt="Telegram"
              />
            </a>

            <div class="flex flex-row items-center justify-start cursor-pointer absolute top-6 right-5
              md:relative md:top-0 md:right-0">
              <img
                class="object-contain w-6 h-6
                  md:w-12 md:h-12
                  "
                src="/images/icons/travel-bot-icon.png"
                alt="Travel bot"
              />
              <span class="text-[12px] font-semibold leading-150 p-0 ml-2
              md:text-[14px] md:ml-3 md:mr-1
">Трэвел-бот</span>
            </div>

            <div class="w-[71px] ml-9
            md:w-[115px] md:ml-16
            lg:absolute lg:top-[4.25rem] lg:right-[3.75rem] md:w-[141px]
">
              <img
                src="/images/designed-by.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <!--        </div>-->
      </div>
    </q-card>
  </div>
</template>

<style>

.footer-holder {
  filter: drop-shadow(0 0 50px rgba(0, 0, 0, 0.1));
}

.footer-separator {
  background: rgba(47, 47, 47, .1);
}

.banner-section {
  background-image: url("/images/index-page/main-banner-bg.png");
}

.swiper-button.swiper-button-disabled {
  color: #dbdbdb;
  pointer-events: none;
}

@media (max-width: 768px) {
  .region-image {
    background-image: url("/images/index-page/region-section/region_sm.png");
  }

  .hosts-section {
    background-image: url("/images/index-page/hosts-section/hosts-bg-sm.png");
  }

  .help-section {
    background-image: url("/images/index-page/help-section/help-bg-sm.png");
    background-position: right bottom;
    background-size: 60%;
  }

  .load-app-section {
    background-image: url("/images/index-page/load-app-section/load-app-bg-sm.jpg");
  }
}

@media (min-width: 1280px) {
  .footer-grid {
    grid-template-columns: 1.1fr 1.13fr;
    grid-template-areas: "logo logo"
                         "menu form"
                         "menu contacts";
  }

  .footer-logo {
    grid-area: logo;
    border-bottom: 1px solid rgba(47, 47, 47, .1);
  }

  .footer-menu {
    grid-area: menu;
  }

  .footer-form {
    grid-area: form;
  }

  .footer-contacts {
    grid-area: contacts;
  }

}

@media (min-width: 768px) and (max-width: 1280px) {
  .region-image {
    background-image: url("/images/index-page/region-section/region_md.png");
  }

  .hosts-section {
    background-image: url("/images/index-page/hosts-section/hosts-bg-md.png");
  }

  .help-section {
    background-image: url("/images/index-page/help-section/help-bg-md.png");
    background-position: right bottom;
    background-size: 52%;
  }

  .load-app-section {
    background-image: url("/images/index-page/load-app-section/load-app-bg-md.jpg");
  }
}

@media (min-width: 1280px) and (max-width: 1440px) {
  .region-image {
    background-image: url("/images/index-page/region-section/region_lg.png");
  }

  .hosts-section {
    background-image: url("/images/index-page/hosts-section/hosts-bg-lg.png");
  }

  .banner-section {
    /* min-height: 55.875vw; */
    min-height: 715px;
  }

  .help-section {
    background-image: url("/images/index-page/help-section/help-bg-lg.png");
    background-position: right bottom;
    background-size: 66%;
  }

  .load-app-section {
    background-image: url("/images/index-page/load-app-section/load-app-bg-lg.jpg");
  }
}

@media (max-width: 767px) {
  .partners-holder .swiper-wrapper {
    transform: none !important;
    display: grid;
    gap: 1.25rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .partners-holder {
  }
}

@media (min-width: 1440px) {
  .region-image {
    background-image: url("/images/index-page/region-section/region_xl.png");
  }

  .hosts-section {
    background-image: url("/images/index-page/hosts-section/hosts-bg-xl.png");
  }

  .banner-section {
    /*  min-height: 58vw;*/
    min-height: 835px;
  }

  .help-section {
    background-image: url("/images/index-page/help-section/help-bg-xl.png");
    background-position: right bottom;
    background-size: 63%;
  }

  .load-app-section {
    background-image: url("/images/index-page/load-app-section/load-app-bg-xl.jpg");
  }
}

@media (min-width: 1920px) {
  .banner-section {
    /*min-height: 48vw; */

    min-height: 915px;
  }

  .banner-section .container {
    padding-bottom: 3.5rem;
  }
}

.region-image {
  background-repeat: no-repeat;
  background-size: cover;
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
import {Swiper, SwiperSlide} from 'swiper/vue';
import {FreeMode, Grid, Manipulation, Navigation} from 'swiper'
// Import Swiper styles
import 'swiper/css';
import ModalComponent from "components/Reviews/ModalComponent";

export default {
  name: "App",
  components: {
    Swiper,
    SwiperSlide,
    ModalComponent,
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
  setup() {
    const onSwiper = (swiper) => {

    };
    const onInit = (swiper) => {

    };
    const onSlideChange = (swp) => {

    };
    return {
      swiperModules: [FreeMode, Navigation, Manipulation, Grid],
      onInit,
      onSwiper,
      onSlideChange
    };
  },
  data() {
    return {
      test: false,
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
