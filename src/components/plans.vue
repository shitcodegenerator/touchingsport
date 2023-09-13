<script setup lang="ts">
  type Plans = 'park' | 'gym' | 'studio' | 'home'

  const bgUrl = ref('')
  const activeType = ref<Plans>('gym')

  const changeBackground = (type: Plans) => {
    activeType.value = type
    bgUrl.value = new URL(`../assets/images/${type}.jpg`, import.meta.url).href
  }

  const plans: { title: string; value: Plans; price: string }[] = [
    {
      title: '公園',
      price: '新北板橋、中和地區免費，其他地區依照距離計算價格',
      value: 'park'
    },
    {
      title: '健身房',
      price: '依據各家健身房的場租費用計算收費',
      value: 'gym'
    },
    {
      title: '練舞室',
      price: '需要大片鏡子看動作的最佳去處！依據各家練舞室的場租費用計算收費',
      value: 'studio'
    },
    {
      title: '到府服務',
      price: '不方便出門的首選！教練到府上課去！新北板橋、中和地區免費，其他地區依照距離計算價格',
      value: 'home'
    }
  ]

  onMounted(() => {
    bgUrl.value = new URL(`../assets/images/gym.jpg`, import.meta.url).href
  })
</script>
<template>
  <HomeBlock
    id="plans"
    class="plan-section"
    :style="{
      backgroundImage: `url(${toRaw(bgUrl)})`
    }"
  >
    <h2
      class="animate-underline text-4xl text-white text-center font-bold absolute z-10 left-1/2 -translate-x-1/2"
      >場地方案自由配</h2
    >

    <div
      class="grid grid-cols-2 sm:grid-cols-4 items-start gap-10 justify-between w-full sm:w-3/4 max-w-[1180px] sm:px-0 px-4 sm:mx-auto mt-14"
    >
      <div
        v-for="i in plans"
        :key="i.value"
        class="flex flex-col z-10 gap-2"
        @click="changeBackground(i.value)"
      >
        <div
          :class="{ 'bg-[#ec3838] border-0 hover:text-white': activeType === i.value }"
          class="border w-full hover:text-[#ec3838] hover:border-[#ec3838] hover:drop-shadow-none rounded-[100px] transition duration-300 text-white border-white z-10 text-center w-40 cursor-pointer py-2 drop-shadow-lg"
          >{{ i.title }}</div
        >
        <div
          v-show="activeType === i.value"
          class="z-10 w-full text-white text-sm bg-[#ffffff25] p-2 rounded"
        >
          {{ i.price }}
        </div>
      </div>
    </div>

    <div
      class="hidden sm:flex items-end h-3/4 overflow-hidden justify-center absolute bottom-0 left-1/2 -translate-x-1/2 pointer-event-none"
    >
      <img src="../assets/images/plans.png" class="h-full -mb-12" />
    </div>
  </HomeBlock>
</template>

<style lang="scss" scoped>
  .plan-section {
    @apply transition duration-500 bg-center bg-cover h-[80vh];
    &:before {
      @apply absolute left-0 top-0 backdrop-blur-[4px]   w-full h-full;
      content: '';
      background: radial-gradient(50% 50% at 50% 50%, #e8e3e39c 0%, #3b383690 100%);
    }
  }
</style>
