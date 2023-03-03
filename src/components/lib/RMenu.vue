<template>
  <div class="flex items-center lg:order-2">
    <router-link
      v-for="(item, index) in items"
      :key="index"
      :to="item.link"
      class="r-hidden lg:block text-black hover:bg-gray-5 dark:hover:bg-gray-100 font-medium rounded-lg text-sm px-2 lg:px-2 py-2 lg:py-2.5 mr-2 text-t3"
      >{{ item.label }}</router-link
    >

    <slot name="append"> </slot>
    <div class="lg:hidden cursor-pointer mr-1 ml-2">
      <div class="w-6 md:w-8 h-[3px] bg-gray-600 my-1"></div>
      <div class="w-6 md:w-8 h-[3px] bg-gray-600"></div>
      <q-menu>
        <q-list style="min-width: 100px">
          <q-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.link"
            clickable
            v-close-popup
            class="row no-wrap items-center"
          >
            <q-item-section
              class="text-black font-medium rounded-lg px-2 lg:px-2 py-2 lg:py-2.5 mr-2 text-t2"
              >{{ item.label }}</q-item-section
            >
            <!-- <q-icon name="logout" size="sm" color="black" /> -->
          </q-item>
          <q-separator v-if="isLoggedIn" />
          <q-item v-if="isLoggedIn" clickable v-close-popup>
            <q-item-section
              class="text-red font-medium rounded-lg px-2 lg:px-2 py-2 lg:py-2.5 mr-2 text-t3"
              >Выйти</q-item-section
            >
          </q-item>
          <q-separator />
        </q-list>
      </q-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "RMenu",
  props: {
    items: { required: true, type: Array },
  },
  data() {
    return {
      isLoggedIn: true,
    };
  },
};
</script>
