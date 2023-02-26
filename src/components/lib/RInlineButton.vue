<template>
  <div
    class="text-blue text-t3 cursor-pointer hover:bg-blue-100 max-w-min whitespace-nowrap"
    @click="actionClick"
  >
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "RInlineButton",
  props: {
    is_outside: { required: false, default: false },
    href: { required: true },
    label: { required: true },
  },
  methods: {
    actionClick() {},
  },
};
</script>
