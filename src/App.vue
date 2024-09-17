<template>
  <main
    class="absolute flex h-svh w-svw flex-col overflow-auto bg-slate-200 text-slate-950 transition-colors dark:bg-slate-900 dark:text-slate-50"
  >
    <section class="mx-auto w-full max-w-7xl">
      <RouterView />
    </section>
  </main>
  <Notivue v-slot="item">
    <Notification :item="item" :theme="theme">
      <NotificationProgress :item="item" />
    </Notification>
  </Notivue>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useApplicationStore } from '@/stores/application.store'
import {
  Notification,
  NotificationProgress,
  Notivue,
  lightTheme,
  slateTheme
} from 'notivue'

const applicationStore = useApplicationStore()
const theme = computed(() =>
  applicationStore.getIsDarkTheme ? slateTheme : lightTheme
)
</script>
