<script setup lang="ts">
  import { Calendar, DatePicker } from 'v-calendar'
  import Types from 'v-calendar/dist/types/src/utils/page'
  import 'v-calendar/style.css'
  import type { FormError } from '@nuxthq/ui/dist/runtime/types'

  const attributes = ref([
    {
      // String
      content: 'red',
      dates: [new Date()]
    },
    {
      // Object
      highlight: {
        color: 'sky-blue'
        // style: {
        //   color: 'red'
        // }
      },
      // content: {
      //   color: 'teal',
      //   style: {
      //     fontStyle: 'italic'
      //   }
      // },
      dates: [new Date(2023, 8, 12), new Date(2023, 8, 26), new Date(2023, 8, 15)]
    }
  ])

  const dayclick = (e: Types.CalendarDay) => {
    console.log(e)
    if (attributes.value[0].dates.includes(e.date)) return
    attributes.value[0].dates = [e.date]
  }

  const time = ref({
    startAt: 10,
    endAt: 11
  })

  const timeOptions = [
    {
      startAt: 10,
      endAt: 11
    },
    {
      startAt: 13,
      endAt: 14
    },
    {
      startAt: 20,
      endAt: 21
    }
  ]

  const selectTime = (selected: { startAt: number; endAt: number }) => {
    console.log(selected)
    time.value = selected
  }

  const isThisDayAvailable = computed(() => {
    return !!attributes.value[1].dates.find(
      (i) => i.getTime() === attributes.value[0].dates[0].getTime()
    )
  })
</script>
<template>
  <HomeBlock id="reservation" class="h-auto">
    <h2 class="text-4xl text-center font-bold">馬上預約課程</h2>

    <div class="max-w-screen-md mx-auto">
      <div class="flex flex-col mt-20 gap-10">
        <div class="flex flex-col">
          <div class="flex flex-col">
            <h3 class="mb-2 font-bold text-lg">預約日期</h3>
            <div class="flex items-center text-sm mb-2 text-blue-300">
              <span class="w-6 h-6 rounded-full bg-[#0284c780] block"></span>
              ：藍色標記時段表示可預約
            </div>
            <ClientOnly>
              <Calendar
                :attributes="attributes"
                expanded
                color="sky-blue"
                mode="dateTime"
                :time-accuracy="1"
                @dayclick="dayclick"
              />
            </ClientOnly>

            <h3 class="my-2">預約時段</h3>
            <div v-if="isThisDayAvailable" class="grid grid-cols-2 gap-2">
              <div
                v-for="i in timeOptions"
                :key="`${i.startAt}-${i.endAt}`"
                class="ring-1 ring-gray-200 text-center rounded leading-loose px-2 py-2 cursor-pointer"
                :class="{
                  'bg-green-400 text-white ring-0':
                    time.endAt === i.endAt && i.startAt === time.startAt
                }"
                @click="selectTime(i)"
                >{{ attributes[0].dates[0].toLocaleDateString() }}
                {{ `${i.startAt}:00-${i.endAt}:00` }}</div
              >
            </div>

            <div v-else class="text-center font-italic text-gray">
              不好意思～～此時段已約滿了，請選擇其他日期。
            </div>
          </div>
        </div>

        <Map />

        <ReservationForm class="flex-1" :date="attributes[0].dates[0]" />
      </div>
    </div>
  </HomeBlock>
</template>

<style>
  .vc-container .vc-weekday-1,
  .vc-container .vc-weekday-7 {
    color: #0ea5e9;
  }

  /* Sky blue */
  .vc-sky-blue {
    --vc-content-color: #fff;
    --vc-accent-50: #f0f9ff;
    --vc-accent-100: #e0f2fe;
    --vc-accent-200: #bae6fd;
    --vc-accent-300: #7dd3fc;
    --vc-accent-400: #38bdf8;
    --vc-accent-500: #0ea5e9;
    --vc-accent-600: #7dd3fc;
    --vc-accent-700: #7dd3fc;
    --vc-accent-800: #7dd3fc;
    --vc-accent-900: #7dd3fc;
  }
</style>
