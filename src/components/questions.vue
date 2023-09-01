<script lang="ts" setup>
  const items = [
    {
      label: '有哪些付費方式呢？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
    },
    {
      label: '如何預約？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
    },
    {
      label: '多堂數有優惠嗎？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
    },
    {
      label: '從來沒有經驗可以嗎？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
    },
    {
      label: '是否有團體課程或是團報優惠呢？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
    }
  ]
</script>
<template>
  <HomeBlock id="qa" class="bg-[#f8f8f8]">
    <h2 class="text-4xl text-center font-bold mb-20">常見問題</h2>
    <UAccordion class="background" :items="items"
  /></HomeBlock>
</template>

<style lang="scss" scoped>
  :deep(.bg-primary-50) {
    background: rgb(215, 215, 215);
  }
</style>
