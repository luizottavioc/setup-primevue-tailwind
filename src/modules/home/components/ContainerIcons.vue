<template>
  <DefaultContainer title="Icons" description="Icons with Phosphor library">
    <div class="flex items-center justify-center gap-4">
      <IconExampleCard :icon="PhArrowsCounterClockwise" />
      <IconExampleCard :icon="PhBackspace" />
      <IconExampleCard :icon="PhBellSimpleRinging" />
      <IconExampleCard :icon="PhCheckCircle" />
      <IconExampleCard :icon="PhFileVue" />
      <IconExampleCard :icon="PhFolderOpen" />
      <IconExampleCard :icon="PhHouseLine" />
      <IconExampleCard :icon="PhMicrophoneSlash" />
      <IconExampleCard :icon="PhPaperPlaneTilt" />
      <IconExampleCard :icon="PhUserCircle" />
    </div>
  </DefaultContainer>
</template>

<script setup lang="ts">
import DefaultContainer from '@/components/DefaultContainer.vue'
import IconExampleCard from './IconExampleCard.vue'

import {
  PhArrowsCounterClockwise,
  PhBackspace,
  PhBellSimpleRinging,
  PhCheckCircle,
  PhFileVue,
  PhFolderOpen,
  PhHouseLine,
  PhMicrophoneSlash,
  PhPaperPlaneTilt,
  PhUserCircle
} from '@phosphor-icons/vue'
</script>
