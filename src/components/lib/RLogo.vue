<template>
  <div class="flex items-center">
    <q-icon name="img:/logo.png" class="mr-3 h-6 sm:h-9" size="lg" />
    <span
      class="self-center text-h6 font-semibold whitespace-nowrap text-black uppercase r-hidden md:block"
      >Rent-a-part</span
    >
    <slot name="append"> </slot>
  </div>
</template>

<script>
export default {
  name: "RLogo",
};
</script>
