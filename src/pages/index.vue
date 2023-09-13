<script lang="ts" setup>
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
  <NavBar class="hidden sm:block" />
  <MobileNav class="flex sm:hidden" />
  <Hero />

  <!-- 特色 -->
  <Feature />

  <!-- 方案 -->

  <Plans />

  <!-- 預約 -->
  <Reservation />

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
</style>
