<template>
  <r-header>
    <template v-slot:logo-append>
      <q-btn
        no-caps
        class="bg-gray-100 py-0 rent-btn ml-2 px-2.5 md:px-6 md:py-2 lg:px-2.5 xl:px-5"
        text-color="grey"
        rounded
        unelevated
      >
        <span class="font-normal tracking-wider text-[.75rem] md:text-sm lg:text-[1rem]">Сдать жильё</span>
      </q-btn>
    </template>
    <template v-slot:content>
      <r-menu :items="menuItems">
        <template v-slot:append>
          <div class="row items-center justify-center q-px-sm mr-1 ml-1 md:mr-7 lg:mr-4 xl:mr-7 xl:pl-0 xl:ml-0">
            <notifications-bell />
            <like-counter />
          </div>
          <r-complex-btn class="px-0 ml-0 md:mr-7" />
        </template>
      </r-menu>
    </template>
  </r-header>
</template>

<script>
import RHeader from "src/components/lib/RHeader.vue";
import RLogo from "src/components/lib/RLogo.vue";
import RMenu from "src/components/lib/RMenu.vue";
import RComplexBtn from "src/components/lib/RComplexBtn.vue";
import LikeCounter from "src/components/Widgets/LikeCounter.vue";
import NotificationsBell from "src/components/Widgets/NotificationsBell.vue";

export default {
  name: "MainHeader",
  components: {
    RLogo,
    RMenu,
    RComplexBtn,
    LikeCounter,
    NotificationsBell,
    RHeader,
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
