<template>
  <div class="relative-position ml-4 md:ml-8 md:w-9 md:h-9 lg:ml-4 lg:w-6 lg:h-6 xl:ml-8">
    <q-icon :name="getIcon" class="p-0 text-[24px] md:text-[32px] lg:text-[24px]"/>
    <div
      class="absolute counter-value w-3 md:w-[18px] lg:w-3"
      :class="getTextColorClass"
      :style="getFontSize"
    >
      <span class="absolute counter-value-text">
      {{ getCounterValue }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.counter-value {
  border-radius: 100%;
  right: 0;
  bottom: 1px;
  background: #fafcfe;
  border: .25em solid #a7aaac;
}

.counter-value::before {
  content: '';
  display: block;
  padding-bottom: 100%;
}

.counter-value-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (min-width: 768px) {
  .counter-value {
    right: .4em;
    bottom: .8em;
  }
}

@media (min-width: 1280px) {
  .counter-value {
    right: 0;
    bottom: 1px;
  }
}

</style>

<script>
export default {
  name: "RCounter",
  props: {
    icon: {required: true},
    disable_icon: {required: false, default: false},
    counter_value: {required: true}
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
        return "font-size: 7px; bottom: 2.5px; left: 9px";
      }
      if (this.counter_value >= 10) {
        return "font-size: 7px; bottom: 2.5px; left: 10px";
      }
      return "font-size: 9px";
    },
    getCounterValue() {
      if (this.counter_value >= 100) return "99+";
      return this.counter_value;
    }
  }
};
</script>
