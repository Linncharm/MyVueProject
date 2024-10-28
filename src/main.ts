
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import Router from "@/routers";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App);
app.use(ElementPlus)
app.use(Router);
app.mount('#app');

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}