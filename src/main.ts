import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//routes
import router from "./router";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/baseColor.css'

const app= createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router) 
app.use(createPinia())
app.mount('#app')
