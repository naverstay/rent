<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import "src/css/style.scss";
import "src/css/colors.scss";
import "src/css/quasar-ovveride.scss";
import "src/css/text/text-styles.scss";
import "src/css/text/text-styles-1280.scss";
import "src/css/text/text-styles-768.scss";
import "src/css/text/text-styles-375.scss";
import { setCssColors } from "src/utils/StylesUtils";

setCssColors();
export default defineComponent({
  name: "App",
});
</script>
