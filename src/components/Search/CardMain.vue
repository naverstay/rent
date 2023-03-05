<template>
  <div class="flex flex-col justify-between shadow-none ">
    <div class="image-holder rounded-[15px] relative cursor-pointer overflow-hidden pb-[100%]">
      <img
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        class="absolute min-w-full object-cover min-h-full"
      />
    </div>

    <div class="flex items-center flex-wrap pt-2 mt-auto w-full">
      <p
        class="rounded-full bg-gray-200 px-3 py-1.5 text-xs font-normal text-gray-400 inline-flex items-center"
      >
        Комната
      </p>

      <svg
        class="h-6 w-6 text-rent-red ml-3 cursor-pointer"
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.9282 24C20.5952 24 25.9999 18.6274 25.9999 12C25.9999 5.37258 20.5952 0 13.9282 0C10.0552 0 6.60827 1.81301 4.39932 4.63182L1.39289 2.30738L0 4.61508L3.27484 6.35128C2.36965 8.03471 1.85645 9.95778 1.85645 12C1.85645 18.6274 7.26114 24 13.9282 24ZM7.15497 8.40838L3.27484 6.35128C3.60075 5.74519 3.97746 5.17017 4.39932 4.63182L7.8325 7.2862C7.83216 7.28666 7.83181 7.28711 7.83147 7.28756L10.0054 8.96784C10.0056 8.96748 10.0059 8.96712 10.0061 8.96675L13.9289 11.9997L13.9257 11.998L13.928 11.9998L12.1161 11.0386L9.59386 9.70139C9.59395 9.70118 9.59404 9.70097 9.59414 9.70076L7.15555 8.40715C7.15536 8.40756 7.15516 8.40797 7.15497 8.40838ZM7.15497 8.40838L9.59386 9.70139C9.34668 10.2592 9.22309 10.8716 9.22309 11.5386C9.22309 12.778 9.62473 13.8136 10.428 14.6454C11.2474 15.4608 12.2675 15.8685 13.4885 15.8685C14.7256 15.8685 15.7377 15.4608 16.5249 14.6454C17.3282 13.8136 17.7299 12.778 17.7299 11.5386C17.7299 10.2828 17.3282 9.24717 16.5249 8.43173C15.7377 7.61629 14.7256 7.20857 13.4885 7.20857C12.6852 7.20857 11.9543 7.39613 11.2956 7.77123C10.7767 8.07407 10.3469 8.47257 10.0061 8.96675L7.8325 7.2862C8.01267 7.04673 8.21112 6.81699 8.42784 6.597C9.72916 5.27598 11.3518 4.61548 13.2957 4.61548C15.2075 4.61548 16.79 5.26783 18.0431 6.57253L18.3564 4.9335H20.4289V18.1436H18.26L17.9949 16.529C16.7418 17.8174 15.1754 18.4616 13.2957 18.4616C11.3518 18.4616 9.72916 17.8011 8.42784 16.4801C7.14259 15.1591 6.49996 13.5119 6.49996 11.5386C6.49996 10.3788 6.7183 9.33541 7.15497 8.40838Z"
          fill="#FF493E"
        />
      </svg>

      <svg
        class="h-6 w-6 text-rent-red ml-3 cursor-pointer"
        viewBox="0 0 28 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.9951 23.1308L26.4925 11.4046C26.4631 11.1395 26.2568 10.8744 25.9917 10.7858L23.4579 9.87248C23.2221 10.3143 22.9864 10.7858 22.7507 11.2279L25.0194 12.0528L26.3158 22.1586L20.9241 20.4203L20.541 14.4688C20.2759 14.5866 19.9812 14.6456 19.6571 14.6456C19.4508 14.6456 19.2152 14.6162 19.0383 14.5572L19.4214 20.4498L14.7072 22.1586L14.7074 11.9939L16.593 11.228L15.8859 9.87257L14.0002 10.6681L8.81485 8.51738C8.63811 8.4584 8.43177 8.42901 8.25501 8.488L2.00889 10.7859C1.74377 10.8743 1.56703 11.11 1.50805 11.4047L0.00550071 23.1309C-0.0238879 23.396 0.0644842 23.6317 0.270619 23.8085C0.476958 23.9852 0.74207 24.0148 0.977778 23.9558L7.72476 21.7755L13.7352 23.9558C13.9119 24.0148 14.0887 24.0148 14.236 23.9558L20.2464 21.7755L26.9934 23.9558C27.0818 23.9852 27.1408 23.9852 27.2291 23.9852C27.4059 23.9852 27.5826 23.9262 27.7006 23.8085C27.9071 23.6317 28.0249 23.396 27.9955 23.1309L27.9951 23.1308ZM7.04701 20.4202L1.65532 22.1585L2.95173 12.0527L7.69524 10.3439L7.04701 20.4202ZM13.2342 22.1585L8.52004 20.4496L9.16823 10.3144L13.2341 11.9939L13.2342 22.1585Z"
          fill="#2F2F2F"
        />
        <path
          d="M19.1268 12.7893C19.3625 13.2607 20.0401 13.2607 20.2759 12.7893C20.2759 12.7893 22.957 7.54489 23.5756 6.30745C24.1945 5.07001 24.2238 3.68526 23.5756 2.3889C22.515 0.237957 19.8928 -0.616359 17.742 0.473712C15.5912 1.56378 14.7663 4.24495 15.827 6.30734C16.8875 8.3699 19.1268 12.7892 19.1268 12.7892V12.7893ZM19.716 2.35944C20.8651 2.35944 21.7784 3.27273 21.7784 4.42178C21.7784 5.57083 20.8651 6.48412 19.716 6.48412C18.567 6.48412 17.6537 5.57083 17.6537 4.42178C17.6537 3.30235 18.567 2.35944 19.716 2.35944Z"
          fill="#2F2F2F"
        />
      </svg>

      <svg
        class="h-6 w-6 text-gray-500 ml-3 cursor-pointer"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <line x1="22" y1="12" x2="18" y2="12"/>
        <line x1="6" y1="12" x2="2" y2="12"/>
        <line x1="12" y1="6" x2="12" y2="2"/>
        <line x1="12" y1="22" x2="12" y2="18"/>
      </svg>

      <span
        class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-1 py-1 border-gray-200"
      >
        <svg
          class="h-6 w-6 text-gray-400 cursor-pointer hover:text-rent-yellow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      </span>

      <span class="text-gray-400 inline-flex items-center leading-none text-sm">
        <svg
          class="h-6 w-6 text-gray-400 cursor-pointer hover:text-rent-red"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          />
        </svg>
      </span>
    </div>

    <div class="mt-2">
      <p
        class="title-font text-xl font-medium text-gray-900 cursor-pointer hover:text-rent-yellow"
      >
        Комната у моря
      </p>
    </div>

    <div class="flex">
      <p class="font-medium text-gray-400">
        Краснодарский край, г.Сочи, ул.Крымская
      </p>
    </div>

    <p class="mt-4 text-lg text-gray-400">
      Цена от:
      <span class="title-font text-xl font-medium text-gray-900 mb-1"
      >3 977 р</span
      >
    </p>
  </div>
</template>

<style>
.image-holder img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>

<script>
// import ...

export default {
  name: "CardMain",

  props: {},

  components: {},

  setup() {
    return {};
  },

  data() {
    return {};
  },

  mounted() {
  },

  computed: {},

  methods: {}
};
</script>

<style scoped></style>
