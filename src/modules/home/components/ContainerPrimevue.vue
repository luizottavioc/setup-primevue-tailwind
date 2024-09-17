<template>
  <DefaultContainer
    title="PrimeVue"
    description="PrimeVue components to use at the project"
  >
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <PrimevueExampleCard title="DatePicker">
        <DatePicker v-model="date" />
      </PrimevueExampleCard>
      <PrimevueExampleCard title="InputOTP">
        <InputOtp v-model="otp" />
      </PrimevueExampleCard>
      <PrimevueExampleCard title="Select">
        <Select
          v-model="city"
          :options="cities"
          option-label="name"
          placeholder="Select a City"
          class="w-full md:w-56"
          filter
        />
      </PrimevueExampleCard>
      <PrimevueExampleCard title="Rating">
        <div class="p-2">
          <Rating v-model="rating" />
        </div>
      </PrimevueExampleCard>
      <PrimevueExampleCard title="Slider Range">
        <div class="w-full p-2">
          <Slider v-model="slider" range class="w-full" />
        </div>
      </PrimevueExampleCard>
      <PrimevueExampleCard title="Image preview">
        <Image
          src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg"
          preview
          class="h-14"
          image-class="object-cover w-full h-full"
        />
      </PrimevueExampleCard>
    </div>
  </DefaultContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import DefaultContainer from '@/components/DefaultContainer.vue'
import PrimevueExampleCard from './PrimevueExampleCard.vue'

import DatePicker from 'primevue/datepicker'
import InputOtp from 'primevue/inputotp'
import Select from 'primevue/select'
import Rating from 'primevue/rating'
import Slider from 'primevue/slider'
import Image from 'primevue/image'

const date = ref()
const otp = ref()
const city = ref()
const rating = ref()
const slider = ref()

const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
])
</script>
