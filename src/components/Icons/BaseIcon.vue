<template>
  <component :is="iconComponent" role="img" class="inline-block fill-current" />
</template>

<script>
import kebabCase from "lodash/kebabCase";

const icons = {};
const requireComponents = require.context("./", false, /[\w]+Icon\.vue$/);

requireComponents.keys().forEach((fileName) => {
  const iconName = kebabCase(fileName.replace(/^\.\/(.+)Icon\.vue/, "$1"));
  const componentConfig = requireComponents(fileName);
  icons[iconName] = componentConfig.default || componentConfig;
});
export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      },
    },
  },

  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>
