<template>
  <div class="flex items-center flex-wrap mt-auto  inline-flex">
    <star-rating
      @update:rating ="setRating"
      :show-rating="false"
      :star-size="starsSize">
    </star-rating>
  </div>
</template>

<script>

import StarRating from 'vue-star-rating'

export default {

  name: "EstimationComponent",

  props: {},

  components: {
    StarRating
  },

  setup() {
    return {}
  },

  data() {
    return {
      rating: 0,
      width: 0,
    }
  },

  created() {
    window.addEventListener('resize', this.updateWidth);
  },

  mounted() {

  },

  computed: {
    starsSize(){
      if (this.width <= 768){
        return 30
      }

      return 40
    }
  },

  methods: {
    setRating(rating){
      this.rating = rating
      console.log('Rating ' + this.rating)
    },

    updateWidth() {
      this.width = window.innerWidth
      console.log(this.width)
    },
  }

}

</script>

<style scoped>

</style>
