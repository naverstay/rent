<template>
  <div class="p-6 bg-white rounded-lg">
    <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-1 py-1 border-gray-200">08.09.2022</span>
    <div class="space-y-1 text-lg font-bold my-2">
        <h4>Самый длинный <br> каток в Росии</h4>
      </div>

    <p class="text-sm leading-6 text-gray-800 mb-6">{{ text }}</p>

    <div class="flex items-center flex-wrap pt-2 mt-auto w-full">
      <span class="text-gray-600 py-2 px-4 rounded-full border border-gray-400">Новости туризма</span>

      <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-1 py-1 border-gray-200">
        <a href="#" class="block text-sm font-medium hover:underline text-rent-red">Читать далее -></a>
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
      text: 'Самый длинный каток в России открыли на набережной Оби в Новосибирске. длина катка, который идет от Михайловской набережной до пристани Речного вокзала.'
    }
  },

  data() {
    return {}
  },

  mounted() {

  },

  computed: {},

  methods: {}

}

</script>

<style scoped>

</style>
