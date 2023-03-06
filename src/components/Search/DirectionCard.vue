<template>
  <q-card
    class="direction-card rounded-2xl flex-shrink-0 w-[309px] h-[351px] mr-2 py-5 px-5 flex flex-col justify-between items-start bg-cover
     lg:w-[426px] lg:h-[434px]"
    :style="getBackgroud"
  >
    <div>
      <p class="text-[12px] text-white font-medium opacity-70 pb-2 tracking-2
      md:text-[16px]
">Направление</p>
      <h3 class="text-white font-bold">{{ title }}</h3>
    </div>
    <q-btn
      rounded
      color="white"
      text-color="black"
      no-caps
      class="selection-btn py-1 md:py-1.5"
    >
      <span class="font-semibold text-[16px] md:text-[20px]"
      >Подобрать жильё</span>
    </q-btn>
  </q-card>
</template>

<style>


@media (min-width: 1280px) {

}

@media (min-width: 768px) and (max-width: 1279px) {
  .selection-btn {
    min-height: 36px;
  }
}

@media (max-width: 768px) {
  .selection-btn {
    min-height: 32px;
  }
}
</style>

<script>
export default {
  name: "DirectionCard",
  props: {
    image: {required: true},
    title: {required: true}
  },
  computed: {
    getBackgroud() {
      return `background-image: url('/images/directions/${this.image}.png');`;
    }
  }
};
</script>
