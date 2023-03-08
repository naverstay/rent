<template>
  <div class="text-left pt-4 mt-6 relative lg:pt-0">
    <div class="flex flex-col items-center justify-between no-wrap gap-4 mb-6 mt-5
     md:gap-5 md:mt-7
     lg:flex-row lg:mt-0

">
      <q-select v-model="locationModel" :options="locationOptions" dense options-dense dropdown-icon="expand_more"
                label="Выберите регион, город или место"
                class="border custom-select custom-select-40 border-[rgba(47, 47, 47, 0.2)] text-gray-400 bg-white hover:border-gray-400 text-sm rounded-[21px] md:rounded-[26px] block w-full p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-4 pr-2 md:pl-6 md:pr-4">
        <template v-slot:prepend>
          <q-icon name="img:images/icons/pin.png" class="p-0 text-[16px]"/>
        </template>
      </q-select>

      <q-select v-model="guestModel" :options="guestOptions" dense options-dense dropdown-icon="expand_more"
                label="Количество гостей"
                class="border custom-select custom-select-40 border-[rgba(47, 47, 47, 0.2)] text-gray-400 bg-white hover:border-gray-400 text-sm rounded-[21px] md:rounded-[26px] block w-full p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-2 pr-2 md:px-4 text-[12px]">
        <template v-slot:prepend></template>
      </q-select>

      <div class="grid grid-cols-2 gap-4 w-full md:gap-3">
        <q-select v-model="checkInModel" :options="checkInOptions" dense options-dense dropdown-icon="expand_more"
                  label="Дата заезда"
                  class="border custom-select custom-select-40 border-[rgba(47, 47, 47, 0.2)] text-gray-400 bg-white hover:border-gray-400 text-sm rounded-[21px] md:rounded-[26px] block w-full p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-2 pr-2 md:px-4 text-[12px]">
          <template v-slot:prepend></template>
        </q-select>

        <q-select v-model="checkOutModel" :options="checkOutOptions" dense options-dense dropdown-icon="expand_more"
                  label="Дата выезда"
                  class="border custom-select custom-select-40 border-[rgba(47, 47, 47, 0.2)] text-gray-400 bg-white hover:border-gray-400 text-sm rounded-[21px] md:rounded-[26px] block w-full p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-2 pr-2 md:px-4 text-[12px]">
          <template v-slot:prepend></template>
        </q-select>
      </div>

      <!--      <select class="sm:w-1/2 text-sm text-gray-400 border border-gray-300 rounded-full h-12 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">-->
      <!--        <option>Дата выезда</option>-->
      <!--      </select>-->
    </div>

    <div class="grid grid-cols-6 lg:grid-cols-10 gap-4 place-items-center mt-6 mb-7
    md:gap-y-3 md:mb-10 lg:mb-6
">
      <div
        class="flex items-center items-center absolute top-0 left-0 right-0 justify-center
         lg:relative col-span-2 lg:mr-auto lg:flex-nowrap lg:col-span-3
">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="default-radio-1" class="ml-2 text-[12px] leading-150 font-semibold
        md:text-[14px]
        lg:text-[16px] lg:ml-4 -tracking-2
"
        >Рядом с текущим местоположением</label>
      </div>

      <div class="relative flex col-span-6 md:col-span-2 gap-3 justify-center items-center
      md:order-1 md:ml-10 lg:ml-0
      lg:text-center lg:col-span-3
      lg:-ml-[20px]
      xxl:-ml-[60px]
">
        <div class="w-[28px] h-[24px] lg:w-[42px] lg:h-[36px]">
          <svg width="100%" height="100%" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.9951 23.1307L26.4925 11.4045C26.4631 11.1394 26.2568 10.8742 25.9917 10.7856L23.4579 9.87236C23.2221 10.3142 22.9864 10.7857 22.7507 11.2277L25.0194 12.0527L26.3158 22.1584L20.9241 20.4202L20.541 14.4687C20.2759 14.5865 19.9812 14.6455 19.6571 14.6455C19.4508 14.6455 19.2152 14.6161 19.0383 14.5571L19.4214 20.4496L14.7072 22.1585L14.7074 11.9938L16.593 11.2278L15.8859 9.87244L14.0002 10.668L8.81485 8.51726C8.63811 8.45828 8.43177 8.42889 8.255 8.48787L2.00889 10.7858C1.74377 10.8741 1.56703 11.1099 1.50805 11.4046L0.00550071 23.1308C-0.0238879 23.3959 0.0644842 23.6316 0.270619 23.8084C0.476958 23.9851 0.74207 24.0147 0.977778 23.9557L7.72476 21.7754L13.7352 23.9557C13.9119 24.0147 14.0887 24.0147 14.236 23.9557L20.2464 21.7754L26.9934 23.9557C27.0818 23.9851 27.1408 23.9851 27.2291 23.9851C27.4059 23.9851 27.5826 23.9261 27.7006 23.8084C27.9071 23.6316 28.0249 23.3959 27.9955 23.1308L27.9951 23.1307ZM7.04701 20.4201L1.65532 22.1583L2.95173 12.0526L7.69524 10.3438L7.04701 20.4201ZM13.2342 22.1583L8.52004 20.4495L9.16823 10.3143L13.2341 11.9938L13.2342 22.1583Z"
              fill="#2F2F2F"/>
            <path
              d="M19.1268 12.7893C19.3625 13.2607 20.0401 13.2607 20.2759 12.7893C20.2759 12.7893 22.957 7.54489 23.5756 6.30745C24.1945 5.07001 24.2238 3.68526 23.5756 2.3889C22.515 0.237957 19.8928 -0.616359 17.742 0.473712C15.5912 1.56378 14.7663 4.24495 15.827 6.30734C16.8875 8.3699 19.1268 12.7892 19.1268 12.7892V12.7893ZM19.716 2.35944C20.8651 2.35944 21.7784 3.27273 21.7784 4.42178C21.7784 5.57083 20.8651 6.48412 19.716 6.48412C18.567 6.48412 17.6537 5.57083 17.6537 4.42178C17.6537 3.30235 18.567 2.35944 19.716 2.35944Z"
              fill="#2F2F2F"/>
          </svg>
        </div>

        <span class="pt-1 leading-150 text-[12px] tracking-2 font-medium
          md:text-[14px]
          lg:text-[16px]">Показать на карте</span>
      </div>

      <div class="w-full overflow-x-auto col-span-6
      lg:col-span-10 lg:order-last">
        <div class="my-3 flex-nowrap whitespace-nowrap text-center
      md:mb-4
      lg:mt-4
      xl:mt-6 xl:mb-3
      xxl:mb-4
">
          <TypeTopComponent
            v-for="(type, id) in types"
            :src="type.src"
            :title="type.title"
            :key="type.title"
            :id="id"
          />
        </div>
      </div>

      <div class="text-gray-400 text-[12px] leading-1 font-semibold mr-auto col-span-3
      md:col-span-2 md:text-[14px]
      lg:order-1 lg:text-[16px]
      xxl:pl-3
">
        <span>Найдено вариантов:</span><span class="text-gray-900 pl-[1px]">5213</span>
      </div>

      <div class="relative ml-auto group col-span-3 md:col-span-2 order-1">
        <div class="min-w-[115px] md:min-w-[132px] lg:min-w-[160px]">
          <q-select v-model="sortModel" :options="sortOptions" dense options-dense dropdown-icon="expand_more"
                    label="Сортировка"
                    class="border custom-select custom-select-34 border-[rgba(47, 47, 47, 0.2)] text-gray-400 bg-white hover:border-gray-400 text-sm rounded-[21px] md:rounded-[26px] block w-full p-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-1 md:pl-2 pr-2">
            <template v-slot:prepend></template>
          </q-select>
        </div>
      </div>
    </div>

    <div class="grid card-holder grid-cols-1 gap-10
    md:grid-cols-2 md:gap-6 md:gap-y-10
    lg:grid-cols-3
">
      <CardMain title="Студия с дизайнерским ремонтом 3"/>
      <CardMain title="Дом в горах"/>
      <CardMain title="Комната у моря"/>
      <CardMain title="Студия с дизайнерским ремонтом 3"/>
      <CardMain title="Дом в горах"/>
      <CardMain title="Комната у моря"/>
    </div>

    <div class="mt-10 text-center md:mt-4 lg:mt-11">
      <button
        class="text-[16px] font-medium text-gray-600 hover:text-rent-yellow py-1.5 px-24 rounded-full border border-gray-400 hover:border-rent-yellow w-full
         md:text-[20px] md:p-2
         lg:max-w-[426px] xl:py-2.5 "
      >Показать еще...
      </button>
    </div>
  </div>
</template>

<style>

.custom-select .q-field--auto-height .q-field__control {
  min-height: 42px;
}

.custom-select .q-field__control::before {
  border-bottom: 0 !important;
}

.custom-select .q-field__control:after {
  display: none !important;
}

.custom-select .q-field__marginal {
  padding-left: 0;
}

.custom-select .q-field__label,
.custom-select .q-field__native {
  letter-spacing: .025rem;
  font-weight: 500;
}

@media (min-width: 1280px) {
  .card-holder .card-item:nth-child(n + 7) {
    display: none !important;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .card-holder .card-item:nth-child(n + 5) {
    display: none !important;
  }
}

@media (max-width: 767px) {

  .custom-select .q-field__label,
  .custom-select .q-field__native {
    font-size: 12px;
  }

  .card-holder .card-item:nth-child(n + 4) {
    display: none !important;
  }

  .custom-select.custom-select-34 {
    min-height: 34px;
  }

  .custom-select.custom-select-34.q-field--dense .q-field__control {
    min-height: 34px;
  }

  .custom-select.custom-select-34.q-field--dense .q-field__marginal {
    height: 40px;
  }

  .custom-select.custom-select-34.q-field--dense.q-field--labeled .q-field__native {
    min-height: 20px;
  }

  .custom-select.custom-select-34.q-field--dense.q-field--labeled .q-field__label {
    top: 7px;
  }

  .custom-select.custom-select-34.q-field--auto-height.q-field--dense.q-field--labeled .q-field__control-container {
    padding-top: 10px;
  }

  .custom-select.custom-select-34.q-field--dense .q-field__marginal {
    height: 34px;
  }

  .custom-select.custom-select-40 {
    min-height: 40px;
  }

  .custom-select.custom-select-40.q-field--dense .q-field__control {
    min-height: 40px;
  }

  .custom-select.custom-select-40.q-field--dense .q-field__marginal {
    height: 40px;
  }

  .custom-select.custom-select-40.q-field--dense.q-field--labeled .q-field__native {
    min-height: 20px;
  }

  .custom-select.custom-select-40.q-field--dense.q-field--labeled .q-field__label {
    top: 10px;
  }

  .custom-select.custom-select-40.q-field--auto-height.q-field--dense.q-field--labeled .q-field__control-container {
    padding-top: 12px;
  }

  .custom-select.custom-select-40.q-field--dense .q-field__marginal {
    height: 40px;
  }
}

@media (min-width: 768px) {
  .custom-select .q-field__label,
  .custom-select .q-field__native {
    font-size: 14px;
  }

  .custom-select.custom-select-34 {
    min-height: 43px;
  }

  .custom-select.custom-select-34.q-field--dense .q-field__control {
    min-height: 43px;
  }

  .custom-select.custom-select-34.q-field--dense.q-field--labeled .q-field__label {
    top: 12px;
  }

  .custom-select.custom-select-34.q-field--auto-height.q-field--dense.q-field--labeled .q-field__control-container {
    padding-top: 12px;
  }

  .custom-select.custom-select-34.q-field--dense .q-field__marginal {
    height: 43px;
  }

  .custom-select.custom-select-40 {
    min-height: 50px;
  }

  .custom-select.custom-select-40.q-field--dense .q-field__control {
    min-height: 50px;
  }

  .custom-select.custom-select-40.q-field--dense .q-field__marginal {
    height: 50px;
  }

  .custom-select.custom-select-40.q-field--dense.q-field--labeled .q-field__native {
    min-height: 20px;
    font-size: 14px;
  }

  .custom-select.custom-select-40.q-field--dense.q-field--labeled .q-field__label {
    top: 16px;
    font-size: 14px;
  }

  .custom-select.custom-select-40.q-field--auto-height.q-field--dense.q-field--labeled .q-field__control-container {
    padding-top: 12px;
  }

  .custom-select.custom-select-40.q-field--dense.q-field--float .q-field__label {
    transform: translateY(-50%) scale(0.75);
  }

  .custom-select.custom-select-40.q-field--dense .q-field__marginal {
    height: 50px;
  }
}

@media (min-width: 1280px) {
  .custom-select.custom-select-34,
  .custom-select.custom-select-50 {
    min-height: 50px;
  }

  .custom-select.custom-select-34.q-field--dense .q-field__control,
  .custom-select.custom-select-50.q-field--dense .q-field__control {
    min-height: 50px;
  }

  .custom-select.custom-select-34.q-field--dense .q-field__marginal,
  .custom-select.custom-select-50.q-field--dense .q-field__marginal {
    height: 50px;
  }

  .custom-select.custom-select-34.q-field--dense.q-field--labeled .q-field__native,
  .custom-select.custom-select-50.q-field--dense.q-field--labeled .q-field__native {
    min-height: 20px;
    font-size: 14px;
  }

  .custom-select.custom-select-34.q-field--dense.q-field--labeled .q-field__label,
  .custom-select.custom-select-50.q-field--dense.q-field--labeled .q-field__label {
    top: 16px;
    font-size: 16px;
  }

  .custom-select.custom-select-34.q-field--auto-height.q-field--dense.q-field--labeled .q-field__control-container,
  .custom-select.custom-select-50.q-field--auto-height.q-field--dense.q-field--labeled .q-field__control-container {
    padding-top: 12px;
  }

  .custom-select.custom-select-34.q-field--dense.q-field--float .q-field__label,
  .custom-select.custom-select-50.q-field--dense.q-field--float .q-field__label {
    transform: translateY(-50%) scale(0.75);
  }

  .custom-select.custom-select-34.q-field--dense .q-field__marginal,
  .custom-select.custom-select-50.q-field--dense .q-field__marginal {
    height: 50px;
  }
}

</style>

<script>
import CardMain from "src/components/Search/CardMain";
import TypeTopComponent from "components/Search/TypeTopComponent";

export default {
  name: "SearchComponent",

  props: {},

  components: {
    CardMain,
    TypeTopComponent
  },

  setup() {
    return {};
  },

  data() {
    return {
      sortModel: "",
      sortOptions: [
        'вверх', 'вниз'
      ],
      guestModel: "",
      guestOptions: [
        '1', '2', '3', '4', '5'
      ],
      checkInModel: "",
      checkInOptions: [
        '1', '2', '3', '4', '5'
      ],
      checkOutModel: "",
      checkOutOptions: [
        '1', '2', '3', '4', '5'
      ],
      locationModel: "",
      locationOptions: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      types: [
        {
          title: "Гостевые дома",
          src: "images/index-page/search-section/home.svg"
        },
        {
          title: "Квартиры",
          src: "images/index-page/search-section/flat.svg"
        },
        {
          title: "Жилье особого типа",
          src: "images/index-page/search-section/spec.svg"
        },
        {
          title: "Дома",
          src: "images/index-page/search-section/home.svg"
        },
        {
          title: "Жилье особого типа",
          src: "images/index-page/search-section/diamond.svg"
        },
        {
          title: "У моря",
          src: "images/index-page/search-section/see.svg"
        },
        {
          title: "Oтдельные комнаты",
          src: "images/index-page/search-section/split.svg"
        }
      ]
    };
  },

  mounted() {
  },

  computed: {
    getIcon() {
      if (this.counter_value <= 0) {
        return this.getDisableIcon;
      } else {
        return this.icon;
      }
    }
  },

  methods: {}
};
</script>

<style scoped></style>
