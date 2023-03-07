<template>
  <div class="py-2 px-5 bg-white rounded-[20px] flex-shrink-0 w-[309px] mr-2.5
    md:py-4 md:w-[511px]
    lg:w-[538px] lg:px-7 lg:pt-6 lg:pb-7 lg:mr-5
">
    <div class="flex items-center flex-wrap pt-2 pb-4 mt-auto w-full
      md:pb-2
">
      <img
        class="w-8 h-8 rounded-full
        md:w-12 md:h-12
        lg:w-10 lg:h-10
"
        src="http://placekitten.com/g/160/120"
        alt=""
      />
      <div class="ml-2.5 space-y-1 text-[16px] font-bold tracking-2
      md:text-[24px] md:ml-3 lg:ml-4
">Сергей, Казань
      </div>
      <span
        class="text-gray-400 inline-flex items-center ml-auto leading-none text-[12px] border-gray-200 tracking-3 opacity-80
        md:text-[14px]
        lg:text-[16px]
"
      >08.09.2022</span>
    </div>

    <div class="flex items-center py-2
    md:pb-4
    lg:pt-3
">
      <h3 class="mr-1.5 text-[12px] font-medium text-gray-400 dark:text-white
      md:text-[14px]
      lg:text-[16px]
      lg:pr-1.5
">Оценка:</h3>

      <div v-for="n in 5"
           :key="n"
           class="w-3 h-3 mr-1
           md:w-4 md:h-4 md:mr-[3px]
           md:w-5 md:h-5
">
        <svg
          aria-hidden="true"
          width="100%"
          height="100%"
          class="text-rent-red"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>First star</title>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          ></path>
        </svg>
      </div>

    </div>

    <p class="text-[12px] leading-150 font-medium text-gray-800 mb-4
      md:text-[14px] md:mb-5
      lg:text-[16px] lg:mb-3
">{{ text }}</p>

    <a href="#" class="text-[12px] font-semiboold hover:underline text-rent-red
    lg:text-[16px]
">Еще ...</a>
  </div>
</template>

<script>
export default {
  name: "ReviewsComponent",

  props: {},

  components: {},

  setup() {
    return {};
  },

  data() {
    return {
      text: "Были в Москве в ноябре 2022 года. Бронировали жилье через Rent-a-Part. Для меня это самый удобный сервис. На сайте есть фильтры по потребности и в цене. Удобно подбирать жилье. Пользуюсь этим сервисом уже второй год ..."
    };
  },

  mounted() {
  },

  computed: {},

  methods: {}
};
</script>

<style scoped></style>
