<script lang="ts" setup>
  enum PLACE {
    GYM_FOCUS,
    STUDIO,
    PARK,
    HOME
  }
  const props = defineProps<{
    date: Date
  }>()

  const state = ref({
    name: undefined,
    place: PLACE.GYM_FOCUS,
    password: undefined
  })

  const validate = (state: unknown): unknown[] => {
    // const errors = []
    // if (!state.name) errors.push({ path: 'name', message: 'Required' })
    // if (!state.password) errors.push({ path: 'password', message: 'Required' })
    return []
  }

  const form = ref()

  async function submit() {
    await form.value!.validate()
    // Do something with state.value
  }

  const places = [
    {
      name: 'email',
      value: PLACE.GYM_FOCUS,
      label: '專心練健身房',
      address: '新北市板橋區民生路三段30-1號號B1',
      price: 1200,
      help: '現場附拳套'
    },
    {
      name: 'sms',
      value: PLACE.STUDIO,
      price: 1200,
      address: '新北市板橋區民生路三段30-1號號B1',
      label: '板橋小教室'
    },
    {
      name: 'push',
      value: PLACE.HOME,
      price: 1200,
      label: '教練出動到你家'
    }
  ]
</script>

<template>
  <UForm ref="form" :state="state" class="flex flex-col justify-around" @submit.prevent="submit">
    <UFormGroup label="學員姓名" name="name">
      <UInput v-model="state.name" />
    </UFormGroup>

    <UFormGroup label="學員電話" name="mobile">
      <UInput v-model="state.password" type="mobile" />
    </UFormGroup>

    <!-- <UFormGroup label="預約時間">
      <UInput :value="date.toLocaleDateString()" disabled />
    </UFormGroup> -->

    <!-- <UFormGroup label="上課地點">
      <URadio v-for="place of places" :key="place.name" v-model="state.place" :value="place.value">
        <template #label>
          <h5 class="font-bold">{{ place.label }}</h5>
          <div class="flex flex-col justify-start mb-3">
            <span class="text-xs flex items-center"
              ><UIcon name="i-heroicons-map" class="mr-1" />{{ place.address }}</span
            >
            <span class="text-sm text-yellow-500">NTD: {{ place.price }}</span>
            <span class="text-xs">（場租100+教練費1000）</span>
          </div>
        </template></URadio
      >
    </UFormGroup> -->

    <UButton type="submit" block> 立即預約 </UButton>
  </UForm>
</template>
