<template>
  <q-input
    input-class="search-input"
    class="q-pa-none"
    rounded
    standout="bg-grey"
    v-model="text"
    label="Искать жильё"
  >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<style scoped>
.search-input {
  padding: 1px 34px;
}
</style>
<script>
export default {
  name: "SimpleSearchInput",
};
</script>
