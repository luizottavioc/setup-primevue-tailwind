<template>
  <div
    class="flex w-full flex-col items-center justify-center gap-2 rounded-md bg-slate-50 p-4 shadow-sm dark:bg-slate-800"
  >
    <h1 class="text-xl font-bold text-primary-600 dark:text-primary-400">
      {{ title }}
    </h1>
    <p v-if="description" class="text-sm">{{ description }}</p>
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
