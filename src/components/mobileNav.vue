<script setup lang="ts">
  import ytIcon from '@/assets/images/social/youtube.png'
  import igIcon from '@/assets/images/social/instagram.png'
  import lineIcon from '@/assets/images/social/line.png'

  const links = [
    {
      label: '教學方向',
      url: '#features'
    },
    {
      label: '場地資訊',
      url: '#plans'
    },
    // {
    //   label: '課程反饋',
    //   url: '#feedback'
    // },
    {
      label: '常見問題',
      url: '#qa'
    },
    {
      label: '立即約課',
      url: '#reservation'
    }
  ]

  const socialMedias = [
    {
      link: 'https://www.youtube.com/',
      icon: ytIcon,
      name: 'Youtube'
    },
    {
      link: 'https://www.instagram.com/touchingsport/',
      icon: igIcon,
      name: 'Instagram'
    },
    {
      link: 'https://lin.ee/EMMdfYd',
      icon: lineIcon,
      name: 'LINE官方帳號'
    }
  ]

  const isOpen = ref(false)
</script>

<template>
  <div class="fixed h-0 top-0 flex items-start flex-row justify-end z-50 text-white w-full">
    <span
      class="absolute right-2 top-4 transition duration-500 text-white transition duration-500 border-white border w-10 h-10 flex items-center justify-center text-2xl rounded-full m-4 drop-shadow"
      :class="{ 'translate-x-[-65vw] rotate-[90deg]': isOpen }"
      @click="isOpen = !isOpen"
    >
      <UIcon name="i-heroicons-bars-3-bottom-right" class="mr-1 text-white" />
    </span>

    <div
      class="w-[65vw] bg-white h-screen transition duration-500 flex flex-col justify-start items-center translate-x-[0]"
      :class="{ 'translate-x-[100%]': !isOpen }"
      @click="isOpen = false"
    >
      <ul class="flex-col flex w-full">
        <li
          v-for="i in links"
          :key="i.label"
          class="text-gray-500 flex items-center py-6 justify-center text-center border-b border-b-gray-200"
          :class="{
            'rounded-full mt-8 px-4 block w-1/2 px-2 py-[8px] bg-[#aa3232] text-white self-center border-none':
              i.url === '#reservation'
          }"
        >
          <NuxtLink :to="{ hash: i.url }">{{ i.label }}</NuxtLink>
        </li>
      </ul>
      <!-- Social Medias -->
      <div class="flex flex-row gap-4 items-center mt-8">
        <a
          v-for="i in socialMedias"
          :key="i.name"
          :href="i.link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img :src="i.icon" :alt="i.name" class="w-8" />
        </a>
      </div>
    </div>
    <div
      v-show="isOpen"
      class="w-full bg-black opacity-50 h-screen absolute z-[-1]"
      @click="isOpen = false"
    >
    </div>
  </div>
</template>
