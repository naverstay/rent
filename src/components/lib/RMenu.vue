<template>
  <div class="flex items-center lg:order-2">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.link"
      class="text-black hover:bg-gray-5 dark:hover:bg-gray-100 font-medium rounded-lg text-sm px-2 lg:px-2 py-2 lg:py-2.5 mr-2 text-t3"
      >{{ item.label }}</router-link
    >
    <slot name="append"> </slot>
  </div>
</template>

<script>
export default {
  name: "RMenu",
  props: {
    items: { required: true, type: Array },
  },
};
</script>
