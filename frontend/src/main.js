import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapFonts from 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(store).use(router).use(bootstrap).use(bootstrapFonts).mount('#app')
