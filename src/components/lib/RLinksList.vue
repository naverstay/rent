<template>
  <div class="flex flex-col justify-start items-start

" :class="allways_col ? 'md:min-w-[137px]' : ''" >
    <div class="text-[14px] leading-140 font-medium tracking-3
      md:text-[20px]
" :class="label_cls">{{ title }}
    </div>

    <div class="justify-start items-start gap-1 md:-mt-1 md:mb-2"
         :class="allways_col ? 'flex-col flex' : 'grid custom-cols w-full flex-wrap flex-row ' +
          'md:flex md:gap-x-6 ' +
           'lg:flex-col lg:gap-0'"
    >
      <a
        v-for="(item, index) in links"
        :key="index"
        :href="item.link"
        class="text-[12px] md:text-[14px] leading-150 text-black opacity-40 no-underline md:flex-grow"
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
    allways_col: {required: false, default: true},
    label_cls: {required: false, default: 'mt-5 mb-3'}
  }
};
</script>
