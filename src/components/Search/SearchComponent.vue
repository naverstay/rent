<template>
  <div class="text-left">

    <div class="flex justify-center pt-5 gap-20">
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


    <div class="grid grid-cols-4 gap-4 place-items-center my-6">

      <div class="flex items-center">
        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="default-radio-1" class="ml-2 text-sm font-medium">Рядом с текущим местоположением</label>
      </div>

      <div>Показать на карте</div>

      <div class="text-gray-400">
        Найдено вариантов
        <span class="title-font font-medium text-gray-900 ml-2">3 977</span>
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
          <option>Сортировка</option>
        </select>
      </div>
    </div>


    <div class="flex flex-row justify-center px-5 my-6 gap-10">
      <TypeTopComponent v-for="(type, id) in types" :src="type.src" :title="type.title" :key="type.title" :id="id"/>
    </div>


<!--    grid grid-cols-4 gap-4 place-items-center my-6-->

<!--    <div class="grid sm:grid-cols-1 xs:grid-cols-1 gap-8 lg:grid-cols-3 mx-0 md:-mx-3 gap-4">-->
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      <CardMain />
      <CardMain />
      <CardMain />
      <CardMain />
      <CardMain />
      <CardMain />
    </div>

    <div class="mt-12 text-center">
      <button class="text-gray-600 hover:text-rent-yellow py-2 px-24 rounded-full border border-gray-400 hover:border-rent-yellow">
        Показать еще...
      </button>
    </div>



<!--    <header class="m-auto py-0 md:py-4 md:container">-->
<!--      <nav-->
<!--        class="bg-white mt-3 border-gray-200 py-4 px-4 lg:px-6 py-2.5 dark:bg-gray-800 rounded-xl py-4"-->
<!--      >-->
<!--        <div-->
<!--          class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"-->
<!--        >-->

<!--        </div>-->
<!--      </nav>-->
<!--    </header>-->


<!--    <div class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill" style="background-image: url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)">-->
<!--      <div class="md:w-1/2">-->
<!--        <p class="font-bold text-sm uppercase">Services</p>-->
<!--        <p class="text-3xl font-bold">Multimedia products</p>-->
<!--        <p class="text-2xl mb-10 leading-none">Atractive designs for your brand</p>-->
<!--        <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>-->
<!--      </div>-->
<!--    </div>-->



<!--    <section-->
<!--      class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"-->
<!--    >-->
<!--      <div-->
<!--        class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"-->
<!--      ></div>-->

<!--      <div-->
<!--        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"-->
<!--      >-->
<!--        <div class="max-w-xl text-center sm:text-left">-->
<!--          <h1 class="text-3xl font-extrabold sm:text-5xl">-->
<!--            Let us find your-->

<!--            <strong class="block font-extrabold text-rose-700">-->
<!--              Forever Home.-->
<!--            </strong>-->
<!--          </h1>-->

<!--          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">-->
<!--            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo-->
<!--            tenetur fuga ducimus numquam ea!-->
<!--          </p>-->

<!--          <div class="mt-8 flex flex-wrap gap-4 text-center">-->
<!--            <a-->
<!--              href="#"-->
<!--              class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"-->
<!--            >-->
<!--              Get Started-->
<!--            </a>-->

<!--            <a-->
<!--              href="#"-->
<!--              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"-->
<!--            >-->
<!--              Learn More-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->




<!--    <img src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80" class="w-full h-screen object-cover rounded-xl">-->


  </div>
</template>

<script>
import CardMain from "src/components/Search/CardMain";
import TypeTopComponent from "components/Search/TypeTopComponent";

export default {
  name: "SearchComponent",

  props: {},

  components: {
    CardMain,
    TypeTopComponent,
  },

  setup() {
    return {};
  },

  data() {
    return {
      types: [
        {
          title: 'Гостевые дома',
          src: 'https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg'
        },
        {
          title: 'Квартиры',
          src: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg'
        },
        {
          title: 'Жилье особого типа',
          src: 'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg'
        },
        {
          title: 'Дома',
          src: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg'
        },
        {
          title: 'У моря',
          src: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg'
        },
        {
          title: 'Oтдельные комнаты',
          src: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg'
        }
      ]
    };
  },

  mounted() {},

  computed: {},

  methods: {},
};
</script>

<style scoped></style>
