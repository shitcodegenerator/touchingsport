<script setup lang="ts">
  import avatar from '../assets/images/avatar.jpg'
  const emit = defineEmits(['changeBackground'])

  const customers = [
    {
      name: '林小美',
      value: 'park',
      label: '街頭健身10年',
      content: 'asdfasdasfasdfasdf'
    },
    {
      name: '喪彪',
      value: 'gym',
      label: '街頭健身10年',
      content: 'asdfasdasfasdfasdf'
    },
    {
      name: '練舞室',
      value: 'studio',
      label: '街頭健身10年',
      content: 'asdfasdasfasdfasdf'
    },
    {
      name: '黃大狀',
      value: 'stuasddio',
      label: '街頭健身10年',
      content: 'asdfasdasfasdfasdf'
    }
  ]

  const breakpoints = {
    // 700px and up
    300: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    600: {
      itemsToShow: 2,
      snapAlign: 'center'
    },
    // 1024 and up
    1024: {
      itemsToShow: 3,
      snapAlign: 'start'
    }
  }
</script>
<template>
  <HomeBlock id="feedback" class="bg-[#f8f8f8]">
    <h2 class="text-4xl text-center font-bold">客製化教學反饋</h2>

    <!-- https://ismail9k.github.io/vue3-carousel/examples.html  -->
    <VueCarousel :items-to-show="1" :autoplay="1000" class="mt-40" :breakpoints="breakpoints">
      <VueSlide v-for="i in customers" :key="i.value">
        <div class="rounded flex items-center bg-white px-10 py-4 w-[400px]">
          <div
            class="border-2 border-white w-24 h-24 rounded-full left-1/2 -translate-x-1/2 overflow-hidden absolute -top-10 items-center justify-center flex"
          >
            <img :src="avatar" class="h-full" />
          </div>

          <div class="flex flex-col items-center mx-auto mt-12 gap-2">
            <span class="font-bold">{{ i.name }}</span>
            <span
              class="text-sm border border-orange-500 bg-orange-100 text-orange-500 rounded px-2"
              >{{ i.label }}</span
            >
            <p>{{ i.content }}</p>
          </div>
        </div>
      </VueSlide>
    </VueCarousel>
  </HomeBlock>
</template>

<style lang="scss" scoped>
  :deep(.carousel__track) {
    padding-top: 56px !important;
  }

  .carousel__viewport {
    perspective: 2000px;
  }

  .carousel__track {
    transform-style: preserve-3d;
  }

  .carousel__slide--sliding {
    transition: 0.5s;
  }

  .carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
  }

  .carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
  }

  .carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }

  .carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }

  .carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
  }
</style>
