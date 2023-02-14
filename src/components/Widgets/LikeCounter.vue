<template>
  <r-counter :counter_value="0" icon_src="img:images/icons/heart-grey.png" />
</template>

<script>
import RCounter from "src/components/lib/RCounter.vue";

export default {
  name: "LikeCounter",
  components: {
    RCounter,
  },
};
</script>
