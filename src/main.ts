import '@/assets/main.css'
import 'notivue/notification.css'
import 'notivue/animations.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createNotivue } from 'notivue'

import PrimeVue from 'primevue/config'
import CustomPreset from '@/config/primevue-preset'

import App from './App.vue'
import router from './router'

const notivue = createNotivue()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { theme: { preset: CustomPreset } })
app.use(notivue)

app.mount('#app')
