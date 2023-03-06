<template>
  <div class="inline-flex flex-col items-center cursor-pointer mr-6
    md:mr-11
" :class="id == 0 ? '' : 'opacity-30'">
    <img
      class="h-10 w-10 mx-auto md:h-12 md:w-12 "
      :class="id == 0 ? '' : 'opacity-60'"
      :src="src"
    />
    <p class="text-black whitespace-nowrap text-[12px] font-semibold mt-2 -tracking-2
      md:text-[14px] md:mt-3
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
