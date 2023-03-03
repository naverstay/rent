<template>
  <q-btn flat no-caps>
    <q-icon name="img:images/icons/user-grey.svg" class="q-mr-sm header-ava w-9 h-9 rounded-full p-2.5"/>
    <span class="font-semibold font-medium r-hidden lg:block">
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
