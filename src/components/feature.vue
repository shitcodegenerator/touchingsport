<script setup lang="ts">
  import icon_0 from '@/assets/images/feature/0.png'
  import icon_1 from '@/assets/images/feature/1.png'
  import icon_2 from '@/assets/images/feature/2.png'
  import icon_3 from '@/assets/images/feature/3.png'

  const features = [
    {
      title: '想要學習格鬥技巧嗎？新手、進階都可以！',
      desc: '舉凡拳擊、泰拳、踢拳、散打，訓練方式以1對1教學為主，根據場地不同可透過打靶、沙包訓練、有軟墊之場地則可以練習散打摔法',
      icon: icon_0
    },
    {
      title: '上班壓力大？減肥舒壓一次搞定！',
      desc: '寓格鬥於舒壓、減肥之中，兼顧帥氣學習和運動燃脂打造Fit好體態。聆聽你的需求，為你客製化調整最適合你的教學內容',
      icon: icon_1
    },
    {
      title: '找不到人對練？1V1對練最佳解！',
      desc: '選手最怕備賽沒人練習，新手最怕練了技巧不知如何應用。讓教練一對一陪你備賽、對練，根據學員強度調整適合的對練方式，找人對練so easy！',
      icon: icon_2
    },
    {
      title: '不想出遠門～可不可以來我家附近練？',
      desc: '各種場地方案，自由挑選搭配。想在公園練習也沒問題，場租費用直接省下來！想到健身房吹冷氣也行，方案自己選，價格最彈性',
      icon: icon_3
    }
  ]
</script>
<template>
  <HomeBlock id="features">
    <h2 class="title animate-underline">教學方向</h2>
    <div class="flex items-center justify-center lg:justify-between lg:gap-0 gap-8 relative 0">
      <!-- <div class="absolute bg-zinc-500 w-full h-3/4 z-[0]"> </div> -->

      <div
        class="flex flex-col gap-10 z-10 w-full sm:grid sm:grid-cols-2 sm:w-full lg:flex lg:w-1/2 px-4 sm:px-4 sm:w-1/2"
      >
        <div v-for="i in features" :key="i.title" class="flex gap-4 items-center justify-start">
          <div class="w-20 h-20 flex items-center">
            <img :src="i.icon" />
          </div>

          <div class="flex flex-col">
            <h4 class="font-bold text-base sm:text-lg">{{ i.title }}</h4>
            <p class="text-xs sm:text-base text-gray-400">{{ i.desc }}</p>
          </div>
        </div>
      </div>

      <div
        class="hidden md:block overflow-hidden mr-10 z-10 w-1/3 overflow-hidden rounded shadow-xl"
      >
        <img src="../assets/images/hero-side.png" />
      </div>
    </div>
  </HomeBlock>
</template>

<style lang="scss" scoped>
  .title {
    @apply relative text-4xl text-center font-bold mb-10 sm:mb-20;
  }
</style>
