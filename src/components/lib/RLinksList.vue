<template>
  <div class="flex flex-col justify-start items-start">
    <div class="text-t2 mt-4">{{ title }}</div>

    <div class="flex flex-col justify-start items-start gap-1,5">
      <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.link"
        class="text-t3 text-black opacity-40 no-underline"
        >{{ item.label }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RLinksList",
  props: {
    title: { required: true },
    links: { required: true }, // label, link
  },
};
</script>
