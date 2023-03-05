<template>
  <div class="inline-flex flex-col items-center cursor-pointer mr-6">
    <img
      class="h-7 w-7 mx-auto"
      :class="id == 0 ? '' : 'opacity-60'"
      :src="src"
    />
    <p class="text-black whitespace-nowrap" :class="id == 0 ? 'font-bold' : ''">{{ title }}</p>
  </div>
</template>

<script>
// import ...

export default {
  name: "TypeTopComponent",

  props: {
    title: String,
    src: String,
    id: String,
  },

  components: {},

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
