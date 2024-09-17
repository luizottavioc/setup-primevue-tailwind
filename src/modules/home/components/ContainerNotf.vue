<template>
  <DefaultContainer
    title="Notifications"
    description="Notifications with Notivue library"
  >
    <div class="mt-2 flex items-center justify-center gap-2">
      <button
        class="flex items-center justify-center gap-2 rounded-md border-green-600 bg-green-500/10 p-2 text-xs font-semibold text-green-600 shadow-sm dark:border-green-400 dark:text-green-400"
        @click="
          successNotify({
            title: 'Success',
            message: 'Notification success'
          })
        "
      >
        <PhCheckCircle class="h-4 w-4" weight="bold" />
        Success notification
      </button>
      <button
        class="flex items-center justify-center gap-2 rounded-md border-blue-600 bg-blue-500/10 p-2 text-xs font-semibold text-blue-600 shadow-sm dark:border-blue-400 dark:text-blue-400"
        @click="
          infoNotify({
            title: 'Info',
            message: 'Notification info'
          })
        "
      >
        <PhInfo class="h-4 w-4" weight="bold" />
        Info notification
      </button>
      <button
        class="flex items-center justify-center gap-2 rounded-md border-red-600 bg-red-500/10 p-2 text-xs font-semibold text-red-600 shadow-sm dark:border-red-400 dark:text-red-400"
        @click="
          errorNotify({
            title: 'Error',
            message: 'Notification error'
          })
        "
      >
        <PhXCircle class="h-4 w-4" weight="bold" />
        Info notification
      </button>
    </div>
  </DefaultContainer>
</template>

<script setup lang="ts">
import DefaultContainer from '@/components/DefaultContainer.vue'
import {
  errorNotify,
  infoNotify,
  successNotify
} from '@/services/notify.service'
import { PhCheckCircle, PhInfo, PhXCircle } from '@phosphor-icons/vue'
</script>
