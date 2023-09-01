<script setup lang="ts">
  const features = [
    {
      title: '拳擊',
      desc: 'desc',
      icon: ''
    },
    {
      title: '泰拳',
      desc: 'desc',
      icon: ''
    },
    {
      title: '散打',
      desc: 'desc',
      icon: ''
    },
    {
      title: '其他',
      desc: 'desc',
      icon: ''
    }
  ]
</script>
<template>
  <HomeBlock id="features">
    <div class="flex items-center justify-between relative 0">
      <!-- <div class="absolute bg-zinc-500 w-full h-3/4 z-[0]"> </div> -->

      <div class="grid grid-col gap-10 z-10">
        <div v-for="i in features" :key="i.title" class="flex gap-4 items-center justify-center">
          <div class="w-10 h-10 bg-black -ml-5"></div>
          <div class="flex flex-col">
            <h4>{{ i.title }}</h4>
            <p>{{ i.desc }}</p>
          </div>
        </div>
      </div>

      <div class="overflow-hidder mr-10 z-10 w-1/3 overflow-hidden rounded=sm">
        <img src="../assets/images/hero-side.jpg" />
      </div>
    </div>
  </HomeBlock>
</template>
