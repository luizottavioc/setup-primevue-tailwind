<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-6 rounded-md bg-slate-50 p-4 shadow transition-colors dark:bg-slate-800"
  >
    <div class="flex w-full flex-col items-center justify-center">
      <h1 class="text-xl font-bold text-primary-600 dark:text-primary-400">
        {{ title }}
      </h1>
      <p v-if="description" class="px-4 text-center text-base">
        {{ description }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})
</script>
