<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import "src/css/style.css";
import "src/css/colors.css";
import "src/css/text/text-styles.css";
import "src/css/text/text-styles-1280.css";
import "src/css/text/text-styles-768.css";
import "src/css/text/text-styles-375.css";
import { setCssColors } from "src/utils/StylesUtils";

setCssColors();
export default defineComponent({
  name: "App",
});
</script>
