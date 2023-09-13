<script lang="ts" setup>
  import lineIcon from '@/assets/images/social/line.png'

  const items = [
    {
      label: '沒有運動或格鬥相關經驗可以嗎？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content:
        '當然沒問題！TOUCHING SPORT 會先請會員填寫評估表，並且為您量身打造符合需求的運動菜單。有任何問題都可以加入LINE好友詢問！'
    },
    {
      label: '我要在哪裡預約呢？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content: '',
      slot: 'where'
    },
    {
      label: '預約上課的流程是？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content: '',
      slot: 'reservation'
    },
    {
      label: '有哪些付費方式呢？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content: '預約系統建置中，目前採用線上轉帳匯款。'
    },
    {
      label: '多堂數 / 團報 有優惠嗎？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content: '優惠方案建置中，詳細資訊請洽 LINE 官方帳號客服人員。'
    },
    {
      label: '預約後有事情不能上課該怎麼辦？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content:
        '成功預約後如有任何不可抗力因素需改期上課，請在課程開始前 12 小時前以 LINE 私訊客服人員取消該堂課程，並預約下次上課時間。如未能在課程開始前 12 小時取消課程，則該堂課恕不退費。'
    },
    {
      label: '有哪些課程內容可以選擇？',
      icon: 'i-heroicons-information-circle',
      defaultOpen: true,
      content:
        '基本上可以選擇拳擊、泰拳、踢拳(kickboxing)、散打、對練這幾種課程，但課程內容十分彈性，都可以依照你想要達成的目標和需求進行調整，想要留下帥帥的影片？TOUCHING SPORT 也可以訓練幾組效果十足的打靶/沙包動作，幫你錄影留紀念。只是單純想要流流汗運運動，TOUCHING SPORT 可以幫你排比較有氧或是高強度間歇的課程，並將格鬥元素融入其中。'
    }
  ]
</script>
<template>
  <HomeBlock id="qa" class="bg-[#f8f8f8] max-h-auto h-auto sm:h-auto px-4">
    <h2 class="text-4xl text-center font-bold mb-10 sm:mb-20 animate-underline">常見問題</h2>
    <UAccordion class="background" :items="items">
      <template #item="{ item }">
        <p class="text-gray-500">
          {{ item.content }}
        </p>
      </template>

      <template #where>
        <p class="text-gray-500 flex sm:flex-row flex-col items-start sm:items-center">
          預約系統目前建置中，想要預約或是諮詢課程都歡迎加入 TOUCHING SPORT 的
          <a
            class="flex items-center text-primary-500 underline hover:opacity-80"
            href="https://lin.ee/EMMdfYd"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img :src="lineIcon" class="w-7 px-1" /> 官方帳號『@895hkczo』</a
          >
        </p>
      </template>

      <template #reservation>
        <p class="text-gray-500 flex items-center leading-loose">
          預約流程：<br />
          1. 透過 LINE 官方帳號預約<br />
          2. 與教練溝通上課時間、地點、收費方案、課程內容<br />
          3. 為求運動安全，教練會提供『身體狀況評估表單』給您填寫<br />
          4. 確定課程方案與總價後，請先進行匯款，TOUCHING SPORT 將為您保留課程時間。<br />
          5. 教練確認收款後將主動回報給您。<br />
          6. 在預約的時間和地點進行教學。
        </p>
      </template>
    </UAccordion></HomeBlock
  >
</template>

<style lang="scss" scoped>
  :deep(.bg-primary-50) {
    background: rgb(215, 215, 215);
  }
</style>
