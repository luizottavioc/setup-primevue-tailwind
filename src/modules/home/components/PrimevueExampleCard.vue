<template>
  <div
    class="flex w-full flex-col gap-2 rounded border border-primary-500/20 p-2"
  >
    <label class="ml-1 font-semibold">{{ title }}</label>
    <div class="relative flex h-full w-full items-center justify-center">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
