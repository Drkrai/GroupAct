import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "chart.js"

loadFonts()

const app=createApp(App)
  app.use(router)
  app.use(vuetify)
app.mount('#app')

   