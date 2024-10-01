<template>
  <div class="flex w-full flex-col gap-4 p-2">
    <ContainerSummary />
    <ContainerTheme />
    <ContainerNotf />
    <ContainerPrimevue />
    <ContainerIcon />
  </div>
</template>

<script setup lang="ts">
import ContainerSummary from '@/modules/home/components/ContainerSummary.vue'
import ContainerTheme from '@/modules/home/components/ContainerTheme.vue'
import ContainerNotf from '@/modules/home/components/ContainerNotf.vue'
import ContainerPrimevue from '@/modules/home/components/ContainerPrimevue.vue'
import ContainerIcon from '@/modules/home/components/ContainerIcons.vue'
</script>
