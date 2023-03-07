<template>
  <q-card
    class="direction-card rounded-[20px] flex-shrink-0 w-[309px] h-[351px] mr-2 py-5 px-5 flex flex-col justify-between items-start bg-cover
     lg:w-[426px] lg:h-[434px] lg:p-8 lg:mr-4"
    :style="getBackgroud"
  >
    <div>
      <p class="text-[12px] text-white font-medium opacity-70 pb-2 tracking-2
      md:text-[14px] xl:text-[16px] xl:pb-1
">Направление</p>
      <h3 class="text-white font-bold lg:-tracking-1">{{ title }}</h3>
    </div>
    <q-btn
      rounded
      color="white"
      text-color="black"
      no-caps
      class="selection-btn py-1 md:py-1.5 lg:px-6"
    >
      <span class="font-semibold text-[16px] md:text-[20px]"
      >Подобрать жильё</span>
    </q-btn>
  </q-card>
</template>

<style>

@media (max-width: 767px) {
  .selection-btn {
    min-height: 32px;
  }
}

@media (min-width: 768px) and (max-width: 1279px) {
  .selection-btn {
    min-height: 36px;
  }
}

@media (min-width: 1280px) {
  .selection-btn {
    min-height: 44px;
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
