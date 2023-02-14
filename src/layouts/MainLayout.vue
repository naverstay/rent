<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <r-header /> -->
    <q-page-container class="relative position">
      <router-view> </router-view>
    </q-page-container>
    <q-footer> </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {},
};
</script>
