<template>
  <DefaultContainer
    title="Light/Dark theme"
    :description="`Class theme with Tailwind. The current theme is ${theme}.`"
  >
    <button
      class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/10 text-primary-600 shadow-sm transition-colors hover:bg-primary-500/20 dark:text-primary-400"
      @click="applicationStore.toggleTheme()"
    >
      <PhSun
        v-if="theme === 'light'"
        class="h-4 w-4 animate-show-fade-in"
        weight="bold"
      />
      <PhMoon v-else class="h-4 w-4 animate-show-fade-in" weight="bold" />
    </button>
  </DefaultContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DefaultContainer from '@/components/DefaultContainer.vue'
import type { Theme } from '@/types/application'
import { useApplicationStore } from '@/stores/application.store'
import { PhSun, PhMoon } from '@phosphor-icons/vue'

const applicationStore = useApplicationStore()
const theme = computed<Theme>(() => applicationStore.getTheme)
</script>
