<template>
  <RouterView />
  <Notivue v-slot="item">
    <NotivueSwipe :item="item">
      <Notification :item="item" :theme="slateTheme">
        <NotificationProgress :item="item" />
      </Notification>
    </NotivueSwipe>
  </Notivue>
</template>

<script setup lang="ts">
import {
  Notification,
  NotificationProgress,
  Notivue,
  NotivueSwipe,
  // lightTheme,
  slateTheme
} from 'notivue'
</script>
