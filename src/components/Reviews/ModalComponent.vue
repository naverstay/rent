<template>
  <div id="overlay" class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60" v-if="open"></div>

  <div v-if="open" data-te-modal-init=""
       class="fixed lg:top-20 md:top-2 sm:top-8 sm:px-4 left-0 z-[1055] h-full w-full overflow-y overflow-x-hidden outline-none"
       id="exampleModalXl" tabindex="-1" aria-labelledby="exampleModalXlLabel" style="display: block;" aria-modal="true"
       role="dialog" data-te-open="true">
    <div data-te-modal-dialog-ref=""
         class="pointer-events-none relative w-auto translate-y-[-50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1120px] min-[768px]:max-w-[700px] transform-none opacity-100">
      <div
        class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
        <div class="px-8 pt-6 sm:px-4 lg:px-8 md:px-8">
          <div class="flex flex-shrink-0 items-center justify-between rounded-t-md dark:border-opacity-50">
            <p
              class="font-bold lg:text-[36px] tracking-2 font-semibold text-gray-900 md:text-[32px] sm:text-[24px] md:pt-1">
              Оставьте отзыв</p>
            <button type="button"
                    @click="closeModal()"
                    class="p-1 bg-rent-red rounded-full box-content border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                    data-te-modal-dismiss="" aria-label="Close">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="h-8 w-8 sm:h-6 sm:w-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="relative">
            <p class="relative z-1 text-[24px] sm:text-[14px] leading-140 font-normal mb-3 opacity-70 text-rent-light-h md:text-[20px] md:pr-20 lg:pr-40 xl:leading-140 lg:text-[24px]">
              Поделитесь опытом Вашего пребывания, чтобы <br>другим пользователям было проще выбирать!
            </p>
            <p
              class="relative text-rent-blue cursor-pointer hover:text-rent-yellow z-1 text-[16px] fo font-medium mb-3 opacity-70 text-gray-400 md:text-[16px] md:pr-20 lg:pr-40 xl:leading-140 md:text-[14px] sm:text-[12px] hover:underline">
              Перейти на страницу отзывов
            </p>
          </div>

          <div v-if="!starsSize" class="border border-gray-100 my-6 sm:my-2"></div>

          <div v-if="!starsSize" class="flex items-center flex-wrap mt-auto w-full md:my-4 ">
            <p class="relative mr-3 z-1 text-[24px] lg:text-[24px] sm:text-[16px] leading-140 font-extrabold opacity-70 lg:text-[20px] md:text-[20px] md:pr-20 lg:pr-40 xl:leading-140">Ваша оценка:</p>

            <EstimationComponent />
          </div>

          <div class="border border-gray-100 my-6 sm:my-2"></div>


          <p class="relative z-1 text-[24px] md:text-[20px] sm:text-[16px] leading-140 font-extrabold mb-3 opacity-70 md:pr-20 lg:pr-40 xl:leading-140 lg:text-[24px]">
            Преимущества
          </p>


          <div class="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4 mb-8">
            <div class="col-span-2">
              <div class="">
                <p
                  class="relative z-1 text-[16px] lg:text-[16px] sm:text-[12px] leading-140 font-semibold mb-3 text-gray-400 md:text-[16px] md:pr-20 lg:pr-40 xl:leading-140">
                  Рыба! Укажите преимущества, которые Вам понравились
                </p>
                <AdvantagesButton/>
              </div>

              <div v-if="starsSize" class="flex items-center flex-wrap pt-16 mt-auto w-full">
                <p class="relative mr-3 z-1 text-[24px] lg:text-[24px] sm:text-[16px] leading-140 font-extrabold opacity-70 lg:text-[20px] md:text-[20px] md:pr-20 lg:pr-20 xl:leading-140">
                  Ваша оценка:
                </p>

                <EstimationComponent/>
              </div>
            </div>
            <div class="h-full">
              <span class="text-[12px] text-gray-400">Ваш комментарий</span>
              <textarea class="resize-none text-sm mt-4 p-2 w-full min-h-[100px] ring-1 ring-slate-900/10 shadow-sm rounded-md dark:bg-slate-800 dark:ring-0 dark:highlight-white/5" rows="3"></textarea>
              <div @click="sendReviews()" class="md:text-[20px] sm:text-[16px] font-medium cursor-pointer text-rent-black hover:text-rent-yellow py-3 px-24 sm:px-12 rounded-full border border-gray-400 hover:border-rent-yellow col-span-2 text-center lg:mt-16 md:mt-6 sm:mt-4">
                Оставить отзыв
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<style>

</style>

<script>
// import ...

import AdvantagesButton from "components/Reviews/AdvantagesButton";
import EstimationComponent from "components/Reviews/EstimationComponent";
import StarRating from 'vue-star-rating'

export default {
  name: "ModalComponent",

  props: {
    open: String
  },

  components: {EstimationComponent, AdvantagesButton, StarRating},

  setup() {
    return {};
  },

  data() {
    return {
      width2: 0
    };
  },

  created() {
    this.width2 = window.innerWidth
    window.addEventListener('resize', this.updateWidth);
  },

  mounted() {
  },

  computed: {
    starsSize(){
      if (this.width2 >= 768){
        return true
      }

      return false
    },
  },

  methods: {
    sendReviews(){
      console.log('Send Reviews')
    },

    closeModal() {
      // this.isOpen = false
    },

    updateWidth() {
      this.width2 = window.innerWidth
    },
  }
};
</script>

<style scoped></style>
