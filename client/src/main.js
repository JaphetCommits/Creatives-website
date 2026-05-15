import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { fetchMembers } from './stores/members.js'

import './assets/base.css'
import './App.css'

fetchMembers()

const app = createApp(App)

app.use(router)
app.mount('#app')
