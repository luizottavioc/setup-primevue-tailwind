<template>
  <div
    class="flex h-14 w-14 items-center justify-center gap-2 rounded-full border border-primary-500/20 shadow-sm"
  >
    <component :is="icon" class="h-6 w-6 text-primary-500" weight="bold" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: Object,
    required: true
  }
})
</script>
