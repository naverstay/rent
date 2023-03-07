<template>
  <div class="py-4 px-5 bg-white rounded-[20px] flex-shrink-0 w-[309px] mr-2.5
      md:w-[511px] md:py-5 md:mr-5
      lg:w-[428px] lg:p-7
      xl:w-[538px]
      xxl:pt-8
">
    <span class="text-gray-400 inline-flex items-center ml-auto leading-none text-[12px] border-gray-200
    md:text-[14px]
    xl:text-[16px]
">08.09.2022</span>
    <div class="mt-3 mb-2
      md:mt-2
      lg:mb-4
      xl:my-3
">
      <h4 class="text-[24px] -tracking-1 leading-100
      md:text-[32px]
      lg:text-[36px]
">
        Самый длинный <br/>
        каток в России
      </h4>
    </div>

    <p class="text-[12px] tracking-1 leading-150 text-gray-800 mb-6
    md:text-[14px]
    lg:text-[16px]
">{{ text }}</p>

    <div class="flex items-center flex-wrap pt-2 mt-auto w-full
     md:pt-3
     lg:pt-1
">
      <span
        class="text-gray-600 py-1 px-2 font-medium tracking-3 text-[12px] leading-140 rounded-full border border-gray-400
         md:text-[14px] md:py-2 md:px-4
         xl:text-[16px] xl:py-1.5
">Новости туризма</span>

      <span
        class="text-gray-400 inline-flex items-center ml-auto leading-none text-sm pr-1 py-1 border-gray-200">
        <a href="#" class="block text-[14px] font-medium hover:underline text-rent-red
        md:text-[20px]
">
          <span>Читать далее </span>
            <q-icon name="arrow_forward" class="p-0 text-[1.25em] md:-mr-2 md:ml-2"/>
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsComponent",

  props: {},

  components: {},

  setup() {
    return {
      text: "Самый длинный каток в России открыли на набережной Оби в Новосибирске. длина катка, который идет от Михайловской набережной до пристани Речного вокзала."
    };
  },

  data() {
    return {};
  },

  mounted() {
  },

  computed: {},

  methods: {}
};
</script>

<style scoped></style>
