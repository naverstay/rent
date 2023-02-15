<template>
  <r-counter
    :counter_value="0"
    disable_icon="img:images/icons/bell-grey.svg"
    icon="img:images/icons/bell-red.svg"
  />
</template>

<script>
import RCounter from "src/components/lib/RCounter.vue";

export default {
  name: "NotificationsBell",
  components: {
    RCounter,
  },
};
</script>
