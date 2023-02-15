<template>
  <r-counter
    :counter_value="0"
    icon="img:images/icons/heart-red.svg"
    disable_icon="img:images/icons/heart-grey.svg"
  />
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
