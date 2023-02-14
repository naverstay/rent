<template>
  <section class="text-gray-600 body-font bg-gray-100">
    <div class="container px-48 py-24 mx-auto">
      <HelloWorld />
      <SearchComponent />
    </div>
  </section>
</template>

<script>
import HelloWorld from "src/components/HelloWorld.vue";
import SearchComponent from "src/components/SearchComponent";

export default {
  name: "App",
  components: {
    HelloWorld,
    SearchComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
