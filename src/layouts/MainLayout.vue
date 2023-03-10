<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <r-header /> -->
    <main-header class="absolute z-10 inset-x-0" />
    <q-page-container class="relative">
      <router-view></router-view>
    </q-page-container>
    <q-footer></q-footer>
  </q-layout>
</template>

<script>
import MainHeader from "src/components/layouts/MainHeader.vue";

export default {
  name: "MainLayout",
  components: { MainHeader },
};
</script>
