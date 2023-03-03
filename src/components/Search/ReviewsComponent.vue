<template>
  <div class="p-6 bg-white rounded-lg">
    <div class="flex items-center flex-wrap pt-2 mt-auto w-full">
      <img
        class="w-10 h-10 rounded-full"
        src="http://placekitten.com/g/160/120"
        alt=""
      />
      <div class="ml-4 space-y-1 text-lg font-bold mb-2">
        <p>Сергей, Казань</p>
      </div>
      <span
        class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-1 py-1 border-gray-200"
        >08.09.2022</span
      >
    </div>

    <div class="flex items-center">
      <h3 class="my-2 mr-3 text-sm font-semibold text-gray-400 dark:text-white">
        Оценка:
      </h3>
      <svg
        v-for="n in 5"
        :key="n"
        aria-hidden="true"
        class="w-5 h-5 text-rent-red"
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

    <p class="text-sm leading-6 text-gray-800">{{ text }}</p>

    <a
      href="#"
      class="block mt-5 text-sm font-medium hover:underline text-rent-red"
      >Еще ...</a
    >
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
      text: "Были в Москве в ноябре 2022 года. Бронировали жилье через Rent-a-Part. Для меня это самый удобный сервис. На сайте есть фильтры по потребности и в цене. Удобно подбирать жилье. Пользуюсь этим сервисом уже второй год ...",
    };
  },

  mounted() {},

  computed: {},

  methods: {},
};
</script>

<style scoped></style>
