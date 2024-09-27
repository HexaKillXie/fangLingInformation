import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
//routes
import router from "./router";


const app= createApp(App)
app.use(router) 
app.use(createPinia())
createApp(App).mount('#app')
