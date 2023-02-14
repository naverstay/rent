<template>
  <q-header class="bg-transparent">
    <section class="r-header" elevated>
      <r-logo />
      <search-input class="q-mr-md q-ml-md" />
      <q-icon color="grey" name="favorite" size="md" />
      <q-icon color="grey" name="favorite" size="md" />
      <q-icon color="grey" name="favorite" size="md" />
    </section>
  </q-header>
</template>

<style scoped>
.r-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px 20px 30px 30px;
  padding: 27px 23px;
  padding-top: 53px;
  background: #fafcfe;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  max-width: 100vw;
}
</style>

<script>
import RLogo from "src/components/lib/RLogo.vue";
import SearchInput from "src/components/Search/SimpleSearchInput.vue";

export default {
  name: "RHeader",
  components: {
    RLogo,
    SearchInput,
  },
};
</script>
