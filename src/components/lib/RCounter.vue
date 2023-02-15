<template>
  <div class="relative-position ml-1">
    <q-icon :name="getIcon" size="sm" class="p-0" />
    <div
      class="absolute-bottom ml-1 counter-value"
      :class="getTextColorClass"
      :style="getFontSize"
    >
      {{ getCounterValue }}
    </div>
  </div>
</template>

<style scoped>
.counter-value {
  left: 11.5px;
  bottom: 1px;
}
</style>

<script>
export default {
  name: "RCounter",
  props: {
    icon: { required: true },
    disable_icon: { required: false, default: false },
    counter_value: { required: true },
  },
  computed: {
    getDisableIcon() {
      if (this.disable_icon == false) return this.icon;
      return this.disable_icon;
    },
    getIcon() {
      if (this.counter_value <= 0) {
        return this.getDisableIcon;
      } else {
        return this.icon;
      }
    },
    getTextColorClass() {
      if (this.counter_value <= 0) {
        return "text-gray-400";
      } else {
        return "text-red";
      }
    },
    getFontSize() {
      if (this.counter_value >= 100) {
        return "font-size: 7px; bottom: 3px; left: 9px";
      }
      if (this.counter_value >= 10) {
        return "font-size: 7px; bottom: 3px; left: 10px";
      }
      return "font-size: 9px";
    },
    getCounterValue() {
      if (this.counter_value >= 100) return "99+";
      return this.counter_value;
    },
  },
};
</script>
