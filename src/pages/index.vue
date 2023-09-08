<script lang="ts" setup>
  type Plans = 'park' | 'gym' | 'studio'

  const bgUrl = ref(new URL('../assets/images/gym.jpg', import.meta.url))

  const changeBackground = (type: Plans) => {
    bgUrl.value = new URL(`../assets/images/${type}.jpg`, import.meta.url)
  }

  // const upload = async () => {
  //   const formElement = document.querySelector('form')

  //   await fetch('http://localhost:3030/upload', {
  //     method: 'POST',
  //     body: new FormData(formElement),
  //     headers: { 'Content-Type': 'multipart/form-data' }
  //   })
  // }
</script>

<template>
  <!-- <form>
    <input type="file" name="files" required />
  </form>
  <button @click="upload">UPLOAD</button> -->
  <NavBar />
  <Hero />

  <!-- 特色 -->
  <Feature />

  <!-- 方案 -->
  <HomeBlock
    class="plan-section"
    :style="{
      backgroundImage: `url(${toRaw(bgUrl)})`
    }"
  >
    <Plans @changeBackground="changeBackground" />
  </HomeBlock>

  <!-- 預約 -->
  <!-- <Reservation /> -->

  <!-- QA -->
  <Questions />

  <!-- 反饋 -->
  <!-- <Feedback /> -->

  <Footer />
</template>
<style lang="scss" scoped>
  .hero {
    background: radial-gradient(50% 50% at 50% 50%, #e8e3e3 0%, #948f8b 100%);
  }

  .plan-section {
    @apply bg-center bg-cover;
    &:before {
      @apply absolute left-0 top-0 backdrop-blur-[4px]   w-full h-full;
      content: '';
      background: radial-gradient(50% 50% at 50% 50%, #e8e3e39c 0%, #3b383690 100%);
    }
  }
</style>
