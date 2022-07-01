import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)


// 安装element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
