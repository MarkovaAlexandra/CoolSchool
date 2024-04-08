import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/style.css'
import router from './router'
import { createHead } from '@unhead/vue'




const head = createHead();



createApp(App).use(router).use(head).mount('#app')

