import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config'
import CustomPreset from '@/config/primevue-preset'

import App from '@/App.vue'
import router from '@/router'
import notify from '@/config/notify'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: CustomPreset,
    options: {
      darkModeSelector: '.dark'
    }
  }
})
app.use(notify)

app.mount('#app')
