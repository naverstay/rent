<template>
  <r-header>
    <template v-slot:logo-append>
      <q-btn
        no-caps
        class="bg-gray-100 py-0 rent-btn ml-2 px-2.5"
        text-color="grey"
        rounded
        unelevated
      >
        <span class="font-normal tracking-wider text-[.75rem] md:text-sm">Сдать жильё</span>
      </q-btn>
    </template>
    <template v-slot:content>
      <r-menu :items="menuItems">
        <template v-slot:append>
          <div class="row items-center justify-center q-px-sm mr-3 ml-1">
            <notifications-bell />
            <like-counter />
          </div>
          <r-complex-btn class="px-0 ml-0" />
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
