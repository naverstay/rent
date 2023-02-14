<template>
  <div>
    <section
      class="banner-section h-screen w-screen bg-no-repeat bg-cover bg-center"
    >
      <main-header class="pt-3" />
    </section>
    <div class="container m-auto">
      <section class="text-gray-600 body-font bg-gray-100">
        <div class="container px-48 py-24 mx-auto">
          <SearchComponent />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.banner-section {
  background-image: url("/images/main-banner-bg.png");
}
</style>
<script>
import SearchComponent from "src/components/Search/SearchComponent";
import MainHeader from "src/components/layouts/MainHeader.vue";

export default {
  name: "App",
  components: {
    SearchComponent,
    MainHeader,
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
