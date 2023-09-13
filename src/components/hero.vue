<script setup lang="ts">
  import lineIcon from '@/assets/images/social/line.png'

  const router = useRouter()
</script>

<template>
  <div class="flex w-screen h-[80vh] md:h-[90vh]">
    <div class="hero">
      <img
        src="../assets/images/hero.png"
        class="md:w-2/3 duration-300 hover:drop-shadow-lg sm:mt-[50vh]"
      />

      <div class="text-container">
        <h1 class="title">TOUCHING SPORT</h1>

        <p class="text-white drop-shadow sm:text-dark text-2xl tracking-wide"
          >隨時隨地 想練就練 想打就打</p
        >
        <p class="text-white drop-shadow sm:text-dark tracking-wide">雙北地區自由約練，菜鳥進階</p>
        <button
          class="rounded-full cursor-pointer bg-red-500 hover:shadow-lg hover:scale-[1.05] duration-200 border border-white text-lg sm:text-2xl px-6 flex items-center justify-center py-2 bg-[#3a3a3a40] my-4 sm:my-10"
          @click="router.push({ hash: '#reservation' })"
          >加入<img :src="lineIcon" class="w-10 px-2" alt="LINE" />好友，馬上預約</button
        >
        <ScrollDown />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .hero {
    @apply flex-[2] relative flex items-center justify-center overflow-hidden pb-20 sm:pb-40;
    background: radial-gradient(50% 50% at 50% 50%, #e8e3e3 0%, #948f8b 100%);
  }

  .text-container {
    @apply absolute flex flex-col items-center justify-center left-1/2 -translate-x-1/2 top-1/4 sm:top-1/3 cursor-default w-full text-center text-white;
  }

  .side-hero {
    @apply relative bg-[#815555] flex-1 flex items-center flex-col justify-center tracking-wide bg-top;
    background-image: url('../assets/images/hero-side.jpg');
    background-size: 100% auto;
    transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:before {
      @apply absolute left-0 top-0 w-full h-full opacity-50;
      background: radial-gradient(50% 50% at 50% 50%, #e8e3e3 0%, #5e5b59 100%);
      content: '';
    }
    &:hover {
      background-size: 150% auto;
      h2 {
        @apply mb-10;
      }
    }
  }

  .title {
    @apply relative xl:whitespace-nowrap  duration-500 leading-none hover:opacity-50 hover:drop-shadow-xl font-['Bebas_Neue'] text-[7rem] md:text-[12rem] xl:text-[16rem] font-[900] text-white;
    &::before {
      @apply leading-none absolute font-['Bebas_Neue'] w-screen font-[900] text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
      content: 'TOUCHING SPORT';
      animation: scaling 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      white-space: nowrap;
      word-break: keep-all;
    }
  }

  @keyframes scaling {
    0% {
      @apply text-[8rem] md:text-[18rem] opacity-0;
    }
    50% {
      @apply text-[10rem] md:text-[20rem] opacity-10;
    }
    100% {
      @apply text-[8rem] md:text-[18rem] opacity-10;
    }
  }
</style>
