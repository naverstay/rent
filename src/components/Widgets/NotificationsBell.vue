<template>
  <r-counter :counter_value="0" icon_src="img:images/icons/bell-grey.png" />
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
