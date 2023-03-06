<template>
  <header class="m-auto py-0 page-header
  md:container
  md:px-0
  lg:py-4">
    <nav
      class="bg-white mt-3 border-gray-200 px-5 py-4 dark:bg-gray-800 rounded-header mx-0.5
      sm:mx-0
      md:pt-8 md:pb-6 md:px-8 md:py-5
      lg:mt-[30px] lg:py-4 lg:px-6 lg:rounded-[20px]
      xl:pl-9 xl:pr-4 xl:py-4"
    >
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <r-logo
          wrapper_class="flex-grow"
          text_size_class="text-[.85rem] md:text-[1rem] lg:text-[.9rem] mr-3 tracking-1 xl:text-[1.1rem]"
          logo_gap_class="header-logo mr-auto md:mr-3 lg:mr-1 xl:mr-2"
        >
          <template v-slot:append>
            <slot name="logo-append"></slot>
          </template>
        </r-logo>
        <slot name="content"></slot>
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
  padding: 53px 23px 27px;
  background: #fafcfe;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
  max-width: 100vw;
}
</style>

<script>
import RLogo from "src/components/lib/RLogo.vue";

export default {
  name: "RHeader",
  components: {
    RLogo
  }
};
</script>
