<script setup lang="ts">
  const sideList = [
    {
      title: '場地方案自由挑選',
      desc: '場地方案自由挑選場地方案自由挑選場地方案自由挑選場地方案自由挑選場地方案自由挑選'
    },
    {
      title: '場地方案自由挑選',
      desc: '場地方案自由挑選場地方案自由挑選場地方案自由挑選場地方案自由挑選場地方案自由挑選'
    }
  ]

  const router = useRouter()
</script>

<template>
  <div class="flex w-screen h-[90vh]">
    <div class="hero">
      <img
        src="../assets/images/hero.png"
        class="w-2/3 duration-300 hover:drop-shadow-lg mt-[50vh]"
      />

      <div class="text-container">
        <h1 class="title">TOUCHING SPORT</h1>

        <p class="text-dark text-2xl tracking-wide">隨時隨地 想練就練 想打就打</p>
        <button
          class="rounded-full border border-white text-2xl px-6 flex items-center justify-center py-2 mt-10 bg-[#3a3a3a40] mb-10"
          @click="router.push({ hash: '#reservation' })"
          >立即報名</button
        >
        <ScrollDown />
      </div>
    </div>

    <!-- <div class="flex flex-col flex-1">
      <div
        v-for="(i, index) in sideList"
        :key="i.title"
        class="side-hero"
        :class="{ 'bg-gray': index === 1 }"
      >
        <h2 class="z-10 duration-300 text-white text-4xl font-bold">
          {{ i.title }}
        </h2>
        <p class="z-10">asdfasdf</p>
      </div>
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
  .hero {
    @apply flex-[2] relative flex items-center justify-center overflow-hidden;
    background: radial-gradient(50% 50% at 50% 50%, #e8e3e3 0%, #948f8b 100%);
  }

  .text-container {
    @apply absolute flex flex-col items-center justify-center left-1/2 -translate-x-1/2 top-1/3 cursor-default w-full text-center text-white;
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
    @apply relative duration-500 leading-none hover:opacity-50 hover:drop-shadow-xl font-['Bebas_Neue'] text-[18rem] font-[900] text-white;
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
      @apply text-[18rem] opacity-0;
    }
    50% {
      @apply text-[30rem] opacity-10;
    }
    100% {
      @apply text-[18rem] opacity-10;
    }
  }
</style>
