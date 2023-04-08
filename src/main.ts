import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import store from "./store.ts"
import Vue3Transitions from 'vue3-transitions'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Vue3Transitions)
app.use(store)
app.mount('#app')
