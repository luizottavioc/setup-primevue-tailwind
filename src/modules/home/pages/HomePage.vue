<template>
  <div class="flex w-full flex-col gap-4 p-2">
    <ContainerTheme />
    <ContainerNotf />
    <ContainerPrimevue />
    <ContainerIcon />
  </div>
</template>

<script setup lang="ts">
import ContainerTheme from '@/modules/home/components/ContainerTheme.vue'
import ContainerNotf from '@/modules/home/components/ContainerNotf.vue'
import ContainerPrimevue from '@/modules/home/components/ContainerPrimevue.vue'
import ContainerIcon from '@/modules/home/components/ContainerIcons.vue'
</script>
