<script setup lang="ts">
  const emit = defineEmits(['changeBackground'])

  const plans = [
    {
      title: '公園',
      value: 'park'
    },
    {
      title: '健身房',
      value: 'gym'
    },
    {
      title: '練舞室',
      value: 'studio'
    }
  ]
</script>
<template>
  <h2 class="text-5xl text-white text-center font-bold absolute z-10 left-1/2 -translate-x-1/2"
    >場地方案自由配</h2
  >

  <div
    v-for="i in plans"
    :key="i.value"
    :class="`${i.value} z-10`"
    @click="emit('changeBackground', i.value)"
    >{{ i.title }}</div
  >

  <div
    class="flex items-end h-3/4 justify-center absolute bottom-0 left-1/2 -translate-x-1/2 pointer-event-none"
  >
    <img src="../assets/images/plans.png" class="h-full" />
  </div>
</template>

<style lang="scss" scoped>
  .park {
    @apply absolute left-1/4 top-1/4  w-52 py-12 bg-cover text-center bg-bottom rounded border hover:scale-[1.2] duration-300 hover:shadow-lg cursor-pointer  border-zinc-300 text-white;
    background-image: url('../assets/images/park.jpg');
  }
  .gym {
    @apply absolute right-1/4 bottom-1/2 w-52 py-12 bg-cover text-center bg-bottom rounded border hover:scale-[1.2] duration-300 hover:shadow-lg cursor-pointer  border-zinc-300 text-white;
    background-image: url('../assets/images/gym.jpg');
  }
  .studio {
    @apply absolute left-1/4 bottom-1/4 w-52 py-12 bg-cover text-center bg-bottom rounded border hover:scale-[1.2] duration-300 hover:shadow-lg cursor-pointer  border-zinc-300 text-white;
    background-image: url('../assets/images/studio.jpg');
  }
</style>
