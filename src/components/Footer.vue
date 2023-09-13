<script lang="ts" setup>
  import ytIcon from '@/assets/images/social/youtube.png'
  import igIcon from '@/assets/images/social/instagram.png'
  import lineIcon from '@/assets/images/social/line.png'

  const socialMedias = [
    {
      link: 'ytIcon',
      icon: ytIcon,
      name: 'Youtube'
    },
    {
      link: 'ig',
      icon: igIcon,
      name: 'Instagram'
    },
    {
      link: 'https://lin.ee/EMMdfYd',
      icon: lineIcon,
      name: 'LINE官方帳號'
    }
  ]

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
    //   url: '#qa'
    // },
    {
      label: '立即約課',
      url: '#reservation'
    },
    {
      label: '常見問題',
      url: '#qa'
    }
  ]
</script>
<template>
  <footer class="w-full bg-[#aa3232]">
    <div class="max-w-screen-xl mx-auto flex items-center justify-cetner flex-col py-8 sm:py-20">
      <!-- 上排資訊  -->
      <div class="flex flex-col sm:flex-row items-center justify-between w-full mb-6">
        <ul>
          <li v-for="i in links" :key="i.label" class="text-white leading-loose">
            <NuxtLink :to="{ hash: i.url }">{{ i.label }}</NuxtLink>
          </li>
        </ul>
        <!-- Social Medias -->
        <div class="flex flex-row gap-4 mt-4 sm:mt-0">
          <a
            v-for="i in socialMedias"
            :key="i.name"
            :href="i.link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img :src="i.icon" :alt="i.name" class="w-10" />
          </a>
        </div>
      </div>

      <!-- Copy Right -->
      <p class="mx-auto text-center text-xs text-white w-full pt-6 border-t border-gray opacity-60"
        >&copy; {{ new Date().getFullYear() }} TOUCHING SPORT Co.
      </p>
    </div>
  </footer>
</template>
