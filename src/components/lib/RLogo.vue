<template>
  <div class="flex items-center">
    <q-icon name="img:/logo.png" class="mr-3 h-6 sm:h-9" size="lg" />
    <span
      class="self-center font-semibold whitespace-nowrap uppercase"
      :class="[
        text_color_class,
        text_size_class,
        always_text ? '' : 'r-hidden md:block',
      ]"
      >Rent-a-part</span
    >
    <slot name="append"> </slot>
  </div>
</template>

<script>
export default {
  name: "RLogo",
  props: {
    text_color_class: { required: false, default: "text-black" },
    text_size_class: { required: false, default: "text-h6" },
    always_text: { required: false, default: false },
  },
};
</script>
