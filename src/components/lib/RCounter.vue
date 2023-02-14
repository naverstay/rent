<template>
  <div class="relative-position ml-1">
    <q-icon :name="icon_src" size="sm" class="p-1" />
    <div class="text-gray-400 absolute -bottom-1 right-0 ml-1">
      {{ counter_value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RCounter",
  props: {
    icon_src: { required: true },
    counter_value: { required: true },
  },
};
</script>
