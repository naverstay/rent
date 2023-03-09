<template>
  <div class="bg-rent-background rounded-[20px] flex justify-center h-[51px] p-2.5
   md:rounded-[50px] md:h-[98px] md:p-5 md:w-[334px] md:mr-5
   lg:w-[302px] lg:mr-9
">
    <img
      class="object-contain h-full"
      :src="`/images/index-page/logos/partner_${index}.png`"
      :alt="`partner_${index}`"
    />
  </div>
</template>

<script>
// import ...

export default {
  name: "PartnersComponent",

  props: {
    index: String
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
