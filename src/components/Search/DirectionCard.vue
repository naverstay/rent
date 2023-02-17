<template>
  <q-card
    class="rounded-2xl w-96 h-52 md:h-72 xl:h-96 p-2 md:p-7 flex flex-col justify-between items-start bg-cover pb-4"
    :style="getBackgroud"
  >
    <div>
      <p class="text-t4 text-white font-thin">Направление</p>
      <h4 class="capitalize text-white">{{ title }}</h4>
    </div>
    <q-btn
      rounded
      color="white"
      text-color="black"
      no-caps
      class="w-4/5 py-1 md:py-2 xl:py-4"
    >
      <p
        class="tracking-wider text-t3 md:text-h5 lg:text-h4 q-px-sm whitespace-nowrap"
      >
        Подобрать жильё
      </p>
    </q-btn>
  </q-card>
</template>

<script>
export default {
  name: "DirectionCard",
  props: {
    image: { required: true },
    title: { required: true },
  },
  computed: {
    getBackgroud() {
      return `background-image: url('/images/directions/${this.image}.png');`;
    },
  },
};
</script>
