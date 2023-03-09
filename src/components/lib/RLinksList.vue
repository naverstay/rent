<template>
  <div class="flex flex-col justify-start items-start">
    <div class="text-t2 font-semibold tracking-3 mt-5 mb-3">{{ title }}</div>

    <div class="justify-start items-start gap-1"
         :class="allways_col ? 'flex-col flex' : 'grid custom-cols w-full flex-row lg:flex-col'"
    >
      <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.link"
        class="text-t3 text-black opacity-40 no-underline"
      >{{ item.label }}</a>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 375px) {
  .custom-cols {
    grid-template-columns: 175px auto;
  }
}
</style>

<script>
export default {
  name: "RLinksList",
  props: {
    title: {required: true},
    links: {required: true}, // label, link
    allways_col: {required: false, default: true}
  }
};
</script>
