<template>
  <div class="inline-flex flex-col items-center cursor-pointer mr-6
    md:mr-11 lg:mr-10
" :class="id == 0 ? '' : 'opacity-30'">
    <img
      class="h-10 w-10 mx-auto
      md:h-12 md:w-12
      lg:h-11 lg:w-11
      xl:h-12 xl:w-12 "
      :class="id == 0 ? '' : 'opacity-60'"
      :src="src"
    />
    <p class="text-black whitespace-nowrap text-[12px] font-semibold mt-2 -tracking-2
      md:mt-3 md:text-[14px]
      lg:text-[16px]
      xxl:mt-2
">{{ title }}</p>
  </div>
</template>

<script>
// import ...

export default {
  name: "TypeTopComponent",

  props: {
    title: String,
    src: String,
    id: String
  },

  components: {},

  setup() {
    return {};
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
