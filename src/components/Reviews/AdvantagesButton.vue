<template>
  <div class="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 text-center rounded-lg text-rent-black">
    <button @click="setHospitality()" :class="{'bg-rent-yellow': hospitality, 'text-white':  hospitality}"
             class="py-2 duration-150 cursor-pointer hover:text-white hover:bg-rent-yellow px-1 rounded-full bg-rent-light-grey font-semibold text-[16px] sm:text-[12px] md:text-[14px] lg:text-[16px]">Гостеприимство арендодателя</button>
    <div @click="setPurity()" :class="{'bg-rent-yellow': purity, 'text-white':  purity}" class="py-2 duration-150 cursor-pointer hover:text-white hover:bg-rent-yellow px-1 rounded-full bg-rent-light-grey font-semibold text-[16px] sm:text-[12px] md:text-[14px] lg:text-[16px]">Расположение объекта</div>
    <div @click="setLocation()" :class="{'bg-rent-yellow': location, 'text-white':  location}" class="py-2 duration-150 cursor-pointer hover:text-white hover:bg-rent-yellow px-1 rounded-full bg-rent-light-grey font-semibold text-[16px] sm:text-[12px] md:text-[14px] lg:text-[16px]">Чистота и порядок</div>
    <div @click="setExpectations()" :class="{'bg-rent-yellow': expectations, 'text-white':  expectations}" class="py-2 duration-150 cursor-pointer hover:text-white hover:bg-rent-yellow px-1 rounded-full bg-rent-light-grey font-semibold text-[16px] sm:text-[12px] md:text-[14px] lg:text-[16px]">Соответствие ожиданиям</div>
  </div>
</template>

<script>

export default {

  name: "AdvantagesButton",

  props: {},

  components: {},

  setup() {
    return {}
  },

  data() {
    return {
      hospitality: false,
      purity: false,
      location: false,
      expectations: false,
    }
  },

  mounted() {

  },

  computed: {},

  methods: {
    setHospitality(){
      this.hospitality ? this.hospitality = false : this.hospitality = true
      console.log('hospitality ' + this.hospitality)
    },
    setPurity(){
      this.purity ? this.purity = false : this.purity = true
      console.log('purity ' + this.purity)
    },
    setLocation(){
      this.location ? this.location = false : this.location = true
      console.log('location ' + this.location)
    },
    setExpectations(){
      this.expectations ? this.expectations = false : this.expectations = true
      console.log('expectations ' + this.expectations)
    },
  }

}

</script>

<style scoped>

</style>
