<script setup lang="ts">
  // import { Loader } from '@googlemaps/js-api-loader'
  import mapPinIcon from '@/assets/images/map-pin.png'

  type PlaceValues = 'fitopia' | 'studio'

  interface PlaceInfo {
    id: number
    value: PlaceValues
    name: string
    position: {
      lat: number
      lng: number
    }
    address: string
    sitingFee: number // 場地費
    travelExpenses: number // 車馬費
    total: number // 總價
    detail: string // 場地其他細節
    suitableFor: string // 適用
  }

  type Place = {
    [key in PlaceValues]: PlaceInfo
  }

  const COACH_FEE = 1200

  const selectedPlace = ref<number>()

  const mapInstance = ref() // 地圖實例
  const mapElement = ref() // 地圖 DOM

  const markerList = ref<google.maps.Marker[]>([])

  const currentPosition = ref({
    lat: 25.001842498779297,
    lng: 121.4969787597656
  })

  const places: Place = {
    fitopia: {
      id: 0,
      value: 'fitopia',
      name: '團練健身房',
      position: {
        lat: 25.001842498779297,
        lng: 121.4969787597656
      },
      sitingFee: 100,
      travelExpenses: 0,
      address: '新北市中和區景平路690號',
      detail: '有沙包、免費拳套',
      suitableFor: '沙包訓練、力量訓練',
      total: 1300
    },
    studio: {
      id: 1,
      value: 'studio',
      name: '小教室的地址還沒給我喔',
      position: {
        // 先隨便設在江翠
        lat: 25.029577255249023,
        lng: 121.47248840332031
      },
      sitingFee: 200,
      travelExpenses: 0,
      address: '(江子翠捷運站3號出口)',
      detail: '有落地鏡、同一時段無其他人使用',
      suitableFor: '打靶訓練、體能訓練',
      total: 1300
    }
  }

  // const loader = new Loader({
  //   apiKey: 'AIzaSyChl75u3KzsMPYc2qHA3AqVV6wBN4ZuK7E',
  //   version: 'weekly'
  // })

  /** 讀取地圖 */
  // const loadMap = async () => {
  //   await loader.importLibrary('core')
  //   mapInstance.value = new google.maps.Map(mapElement.value, {
  //     zoom: 13,
  //     minZoom: 3,
  //     maxZoom: 20,
  //     center: currentPosition.value,
  //     fullscreenControl: false,
  //     zoomControl: true,
  //     streetViewControl: false,
  //     mapTypeControl: false
  //   })
  // }

  /** 設置地圖圖標 */
  // const setMarker = () => {
  //   for (const i in places) {
  //     const place = i as PlaceValues
  //     const newMarker = new google.maps.Marker({
  //       position: places[place].position,
  //       map: mapInstance.value,
  //       title: places[place].name,
  //       icon: mapPinIcon
  //     })

  //     markerList.value.push(newMarker)
  //     const infoWindow = setInfoWindow(places[place])
  //     addMarkerOnClickEvent(newMarker, infoWindow)
  //   }
  // }

  // const setInfoWindow = (place: PlaceInfo): google.maps.InfoWindow => {
  //   const infoWindow = new google.maps.InfoWindow({
  //     // 設定想要顯示的內容
  //     content: `
  //         <div class="leading-loose">
  //           <h5 class="font-bold text-base">${place.name}</h5>
  //           <p class="text-zinc-400">地址：${place.address}</p>
  //           <span class="h-px my-1 w-full bg-zinc-200 block"></span>
  //           <div class="">
  //             <p>車馬費：
  //               <span class="text-green-500">${place.travelExpenses}</span>
  //               元
  //             </p>
  //             <p>場租費：
  //               <span class="text-green-500">${place.sitingFee}</span>
  //               元
  //             </p>
  //             <p>基本教練費：
  //               <span class="text-green-500">${COACH_FEE}</span>
  //               元
  //             </p>
  //             <p>總價：
  //               <span class="text-green-500">${place.total}</span>
  //               元
  //             </p>
  //           </div>
  //         </div>
  //       `,
  //     // 設定訊息視窗最大寬度
  //     maxWidth: 280
  //   })
  //   return infoWindow
  // }

  // const addMarkerOnClickEvent = (
  //   marker: google.maps.Marker,
  //   infoWindow: google.maps.InfoWindow
  // ) => {
  //   marker.addListener('click', () => {
  //     mapInstance.value.panTo(marker.getPosition())
  //     infoWindow.open({
  //       anchor: marker,
  //       map: mapInstance.value
  //     })
  //   })
  // }

  const onRadioChange = (place: PlaceInfo) => {
    const selectedMarker = markerList.value.find((i) => i.title === place.name)
    const selectedPlace = places[place.value]
    // addMarkerOnClickEvent(selectedMarker, )selectedPlace
  }

  onMounted(async () => {
    // await loadMap()
    // setMarker()
  })
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col">
      <h3 class="mb-2 font-bold text-lg">預約場館</h3>
      <div class="flex flex-row gap-4">
        <!--  地圖 -->
        <!-- <div ref="mapElement" class="map"></div> -->

        <!--  選單 -->
        <div class="flex flex-col">
          <URadio
            v-for="place of Object.values(places)"
            :key="place.name"
            v-model="selectedPlace"
            :value="place.id"
          >
            <template #label>
              <h5 class="font-bold">{{ place.name }}</h5>
              <div class="flex flex-col justify-start mb-3">
                <span class="text-xs flex items-center"
                  ><UIcon name="i-heroicons-map" class="mr-1" />{{ place.address }}</span
                >
                <span class="text-sm text-yellow-500">NTD: {{ place.total }}</span>
                <span class="text-xs">（場租100+教練費1000）</span>
              </div>
            </template></URadio
          >
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
  .map {
    @apply w-3/4 h-[50vh];
  }
</style>
