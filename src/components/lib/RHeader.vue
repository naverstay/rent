<template>
  <header class="m-auto py-0 md:py-4 md:container">
    <nav
      class="bg-white mt-3 border-gray-200 py-4 px-4 lg:px-6 py-2.5 dark:bg-gray-800 rounded-xl py-4 mx-0.5 sm:mx-0"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <r-logo>
          <template v-slot:append>
            <slot name="logo-append"> </slot>
          </template>
        </r-logo>
        <slot name="content"> </slot>
      </div>
    </nav>
  </header>
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

export default {
  name: "RHeader",
  components: {
    RLogo,
  },
};
</script>
