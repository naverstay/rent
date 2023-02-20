<template>
  <div class="flex flex-col items-center cursor-pointer">
    <img class="h-7 w-7 mx-auto " :class="id == 0 ? '' : 'opacity-60'" :src="src">
    <p class="text-black" :class="id == 0 ? 'font-bold' : ''">{{ title }}</p>
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
    return {}
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
