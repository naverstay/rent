<template>
  <q-btn flat no-caps class="q-mr-sm my-1 p-0 rounded-full md:mr-3 lg:mr-6">
    <q-icon name="img:images/icons/user-grey.svg" class="header-ava w-9 h-9 lg:w-6 lg:h-6 rounded-full p-2.5 lg:p-1.5 lg:mr-3"/>
    <span class="font-semibold font-medium r-hidden lg:block lg:text-[12px]">
      Вход / Регистрация
    </span>
  </q-btn>
</template>

<style scoped>
.header-ava {
  background: #E8EFF4;
  box-sizing: border-box;
}

.header-ava img {
  max-width: 16px;
}

</style>

<script>
export default {
  name: "RComplexBtn"
};
</script>
