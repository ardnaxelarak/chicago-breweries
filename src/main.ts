import { createApp } from 'vue'
import App from './App.vue'
import VueGoogleMaps from 'vue-google-maps-community-fork'

import "bootstrap/dist/css/bootstrap.css"

const app = createApp(App)
app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_API_MAP_KEY,
  },
}).mount('#app')

import "bootstrap/dist/js/bootstrap.js"
