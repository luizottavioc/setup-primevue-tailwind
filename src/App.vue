<template>
  <div class="flex h-screen w-screen items-center justify-center p-2">
    <DatePicker v-model="date" />
  </div>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker'
import { ref } from 'vue'

const date = ref()
</script>
