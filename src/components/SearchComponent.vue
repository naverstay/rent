<template>
  <hr class="my-12" />

  <div class="text-left">
    <h2
      class="text-2xl text-left font-semibold leading-normal text-gray-800"
      id="basic"
    >
      Найти
    </h2>

    <p class="title-font text-base font-medium text-gray-400">
      Аппартаменты, отель, коттедж...
    </p>

    <div class="pb-8 pt-5">
      <div class="flex flex-row items-center justify-between text-xs mb-3">
        <div class="flex flex-row items-center">
          <div class="relative ml-1 group">
            <svg
              class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select
              class="text-sm text-gray-400 border border-gray-300 rounded-full h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>Выберите регион, город или место</option>
            </select>
          </div>

          <div class="relative ml-1 group">
            <svg
              class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select
              class="text-sm text-gray-400 border border-gray-300 rounded-full h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>Количество гостей</option>
            </select>
          </div>

          <div class="relative ml-1 group">
            <svg
              class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select
              class="text-sm text-gray-400 border border-gray-300 rounded-full h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>Дата заезда</option>
            </select>
          </div>

          <div class="relative ml-1 group">
            <svg
              class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select
              class="text-sm text-gray-400 border border-gray-300 rounded-full h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            >
              <option>Дата выезда</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!--    <div class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">-->
    <!--      <CardMain/>-->
    <!--      <CardMain/>-->
    <!--      <CardMain/>-->
    <!--    </div>-->

    <div class="grid grid-cols-2 gap-8 lg:grid-cols-3 mx-0 md:-mx-3 gap-4">
      <CardMain />
      <CardMain />
      <CardMain />
    </div>
  </div>
</template>

<script>
import CardMain from "src/components/CardMain";

export default {
  name: "SearchComponent",

  props: {},

  components: {
    CardMain,
  },

  setup() {
    return {};
  },

  data() {
    return {};
  },

  mounted() {},

  computed: {},

  methods: {},
};
</script>

<style scoped></style>
