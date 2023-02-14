<template>
  <header class="container m-auto py-4">
    <nav
      class="bg-white mt-3 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 rounded-xl py-4"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
      >
        <r-logo />
        <q-btn no-caps class="bg-gray-100" text-color="grey" rounded unelevated>
          <p class="font-normal tracking-wider text-sm">Сдать жильё</p>
        </q-btn>
        <r-menu :items="menuItems">
          <template v-slot:append>
            <div class="row items-center justify-center q-px-sm mr-2 ml-1">
              <like-counter />
              <notifications-bell />
            </div>
            <r-complex-btn />
          </template>
        </r-menu>
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
import RMenu from "src/components/lib/RMenu.vue";
import RComplexBtn from "src/components/lib/RComplexBtn.vue";
import LikeCounter from "src/components/Widgets/LikeCounter.vue";
import NotificationsBell from "src/components/Widgets/NotificationsBell.vue";
import SearchInput from "src/components/Search/SimpleSearchInput.vue";

export default {
  name: "RHeader",
  components: {
    RLogo,
    SearchInput,
    RMenu,
    RComplexBtn,
    LikeCounter,
    NotificationsBell,
  },
  data() {
    return {
      menuItems: [
        {
          label: "Промокод",
          link: "/",
        },
        {
          label: "Чат-бот",
          link: "/",
        },
        {
          label: "F.A.Q.",
          link: "/",
        },
        {
          label: "Роли доступа",
          link: "/",
        },
        {
          label: "Арендодателям",
          link: "/",
        },
        {
          label: "Контакты",
          link: "/",
        },
      ],
    };
  },
};
</script>
