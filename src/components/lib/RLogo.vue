<template>
  <div :class="[wrapper_class, 'flex items-center']">
    <q-icon :name='getIcon' :class="[logo_gap_class]" size="lg"/>
    <span
      class="self-center font-semibold whitespace-nowrap uppercase"
      :class="[
        text_color_class,
        text_size_class,
        text_gap_class,
        always_text ? '' : 'r-hidden md:block',
      ]">Rent-a-part</span>
    <slot name="append"></slot>
  </div>
</template>

<script>
export default {
  name: "RLogo",
  props: {
    wrapper_class: {required: false, default: ""},
    text_color_class: {required: false, default: "text-black"},
    logo_gap_class: {required: false, default: "mr-4 md:mr-1 lg:mr-0"},
    text_gap_class: {required: false, default: "mr-7 lg:mr-9"},
    text_size_class: {required: false, default: "text-[.85rem] lg:text-[1.2rem]"},
    always_text: {required: false, default: false},
    logo_white: {required: false, default: false}
  },
  computed: {
    getIcon() {
      return 'img:images/logo' + (this.logo_white ? '_white' : '') + '.svg';
    }
  }
};
</script>
