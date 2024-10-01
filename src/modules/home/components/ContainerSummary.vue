<template>
  <DefaultContainer
    title="Front-end: setup-primevue-tailwind"
    description="Vue 3 setup with PrimeVue and TailwindCSS. This demo showcases icons, light and dark theme switching, and notifications. Experience how these elements integrate smoothly to provide a responsive and visually appealing interface. For more details, visit the repository and check out the Project Structure Overview."
  >
    <a
      href="https://github.com/luizottavioc/setup-primevue-tailwind"
      target="_blank"
      class="mt-2 flex items-center justify-center gap-2 rounded-md bg-primary-500/10 p-2 text-sm font-semibold text-primary-600 shadow-sm transition-colors hover:bg-primary-500/20 dark:text-primary-400"
    >
      <PhGithubLogo class="h-4 w-4" weight="fill" />
      setup-primevue-tailwind
    </a>
  </DefaultContainer>
</template>

<script setup lang="ts">
import DefaultContainer from '@/components/DefaultContainer.vue'
import { PhGithubLogo } from '@phosphor-icons/vue'
</script>
