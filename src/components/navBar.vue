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
</script>

<template>
  <div
    class="absolute top-10 flex items-center flex-row justify-between z-50 text-white max-w-screen-xl left-1/2 -translate-x-1/2 w-full"
  >
    <span class="font-['Bebas_Neue'] text-3xl text-white">TOUCHING SPORT</span>

    <ul class="sm:flex flex-row gap-10">
      <li
        v-for="i in links"
        :key="i.label"
        class="text-white flex items-center"
        :class="{
          'rounded-full border px-4 block ease-in-out duration-300 hover:bg-white hover:text-zinc-400':
            i.url === '#reservation'
        }"
      >
        <NuxtLink :to="{ hash: i.url }">{{ i.label }}</NuxtLink>
      </li>
      <!-- Social Medias -->
      <div class="flex flex-row gap-4 items-center">
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
    </ul>
  </div>
</template>
